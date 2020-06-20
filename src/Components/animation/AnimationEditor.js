import React from 'react';
import { StyleSheet, Animated, Dimensions, Easing, View, Picker } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animation from './Animation';
import DraggableDisplayedElement from './DraggableDisplayedElement';
import BackgroundPicker from './BackgroundPicker';
import Drill from './Drill';
import theme from '../../styles/theme.style';

import debug from './debug';

class AnimationEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Drill(props.animation),
      dTop: 0, // Distance between the top of the window and the editor
      dLeft: 0, // Distance between the left of the window and the editor
      width: 0,
      height: 0,
      playerRadius: 0,
      labels: {
        offense: 1,
        defense: 1,
        disc: 1,
        triangle: 1,
      },
      isElementMoving: false, // True if an element already in the animation is moving (enables when an element moves to enable removing it)
    };

    /** Vertical ratio of the space of the editor in which the animation is displayed */
    this.hRatio = 5 / 7;

    /** Horizontal ratio of the space of the editor in which the animation is displayed */
    this.wRatio = 1;

    this.currentStep = 0;

    // Enables to update  the current step inside an animation
    this.currentStepAV = new Animated.Value(0);

    this.currentStepAV.addListener(progress => {
      this.currentStep = progress.value;
    });

    this.editorHeight = 100;
    this.editorWidth = 100;
  }

  saveAnimation = (newAnimation, cb) => {
    this.props.onAnimationChange && this.props.onAnimationChange(newAnimation);
    this.setState({ animation: newAnimation }, cb);
  };

  onLayout = e => {
    this.editorHeight = e.nativeEvent.layout.height;
    this.editorWidth = e.nativeEvent.layout.width;

    //TODO see why this is needed...
    this.setState({
      width: this.editorWidth,
      height: this.editorHeight,
      dTop: e.nativeEvent.layout.y,
      dLeft: e.nativeEvent.layout.x,
    });

    // Create the elements in the horizontal bar
    this.initialElements = [];

    var animationWidth = this.editorWidth * this.wRatio;
    var animationHeight = this.editorHeight * this.hRatio;

    this.setState(prevState => ({
      playerRadius: Math.min(animationWidth, animationHeight) / 12,
    }));
  };

  addElementToAnimation = (type, x, y) => {
    console.log({ type, x, y });
    // TODO: Fix y offset
    const position = this._positionPixelToPercent(x, y - 50);
    if (position[0] <= 1 && position[1] <= 0.88 && position[0] >= 0 && position[1] >= 0) {
      const text = this.state.labels[type];
      console.log(text);
      const labels = { ...this.state.labels };
      labels[type] = labels[type] + 1;
      this.setState({ labels });

      var newAnimation = this._copyAnimation();
      newAnimation.addElement(type, position[0], position[1], text);
      this.saveAnimation(newAnimation);
    }
  };

  onBackgroundChange = value => {
    var newAnimation = this._copyAnimation();
    newAnimation.background = value;
    this.saveAnimation(newAnimation);
  };

  /** Convert a position (x, y) in pixels of the phone screen in a position (x2, y2) in percentages of the animation area
   * x: horizontal position in pixels (=0 left edge, =1 right edge)
   * y: vertical position in pixels (=0 top, =1 bottom)
   * x2: corresponding horizontal position in percentage (=0 if centered)
   * y2: corresponding vertical position in percentage (=0 if centered)
   */
  _positionPixelToPercent = (x, y) => {
    return [
      (x - this.state.dLeft) / (this.state.width * this.wRatio),
      (y - this.state.dTop) / (this.state.height * this.hRatio),
    ];
  };

  /** Convert a position (x, y) in percentage of the animation area (x2, y2) in pixels of the phone screen
   * x: horizontal position in percentage (=0 if centered)
   * y: vertical position in percentage (=0 if centered)
   * x: corresponding horizontal position in pixels (=0 left edge, =1 right edge)
   * y: corresponding vertical position in pixels (=0 top, =1 bottom)
   */
  _positionPercentToPixel = (x, y) => {
    return [
      x * (this.state.width * this.wRatio) + this.state.dLeft,
      y * (this.state.height * this.hRatio) + this.state.dTop,
    ];
  };

  _copyAnimation() {
    var newAnimation = new Drill();

    newAnimation.positions = JSON.parse(JSON.stringify(this.state.animation.positions));
    newAnimation.ids = JSON.parse(JSON.stringify(this.state.animation.ids));
    newAnimation.texts = JSON.parse(JSON.stringify(this.state.animation.texts));
    newAnimation.background = JSON.parse(JSON.stringify(this.state.animation.background));

    return newAnimation;
  }

  componentDidMount() {
    var newAnimation = this._copyAnimation();

    newAnimation.positions = Array(2);
    newAnimation.positions[0] = [];
    newAnimation.positions[1] = [];

    /* Get the dimension of the screen and then initialize the animation */
    var { height, width } = Dimensions.get('window');

    this.saveAnimation(newAnimation);
  }

  cutMove = (elemId, xDelta, yDelta, isCounterCut) => {
    var previousStepId = Math.ceil(this.currentStep) - 1;

    var previousPositions = this.state.animation.getPositionsAtStep(elemId, previousStepId);

    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    var newAnimation = this._copyAnimation();

    var xCutDelta = xDeltaPercent;
    var yCutDelta = yDeltaPercent;
    var xCCutDelta = xDeltaPercent;
    var yCCutDelta = yDeltaPercent;

    if (isCounterCut) {
      xCutDelta = 0;
      yCutDelta = 0;
    } else {
      xCCutDelta = 0;
      yCCutDelta = 0;
    }

    var newCutPosition = [previousPositions[0][0] + xCutDelta, previousPositions[0][1] + yCutDelta];

    /* If the cut goes outside of the animation area, put it at the border of the animation */
    if (newCutPosition[0] < 0) newCutPosition[0] = 0;
    else if (newCutPosition[0] > 1) newCutPosition[0] = 1;

    if (newCutPosition[1] < 0) newCutPosition[1] = 0;
    else if (newCutPosition[1] > 0.85) newCutPosition[1] = 0.85;

    /* Set the starting position */
    newAnimation.positions[previousStepId][elemId] = [];
    newAnimation.positions[previousStepId][elemId].push([]);
    newAnimation.positions[previousStepId][elemId][0].push(newCutPosition[0]);
    newAnimation.positions[previousStepId][elemId][0].push(newCutPosition[1]);

    /* If there was a counter-cut or if the counter-cut is moving */
    if (previousPositions.length > 1 || isCounterCut) {
      /* Set the counter-cut position */
      newAnimation.positions[previousStepId][elemId].push([]);

      /* Get the new position of the counter-cut */

      /* 1 - If there was no counter-cut, the move is from (previousPosition + currentPosition) / 2 */
      var currentPositions = this.state.animation.getPositionsAtStep(elemId, previousStepId + 1);
      var newPositionX = (currentPositions[0][0] + previousPositions[0][0]) / 2 + xCCutDelta;
      var newPositionY = (currentPositions[0][1] + previousPositions[0][1]) / 2 + yCCutDelta;

      /* 2 - If there was a counter cut, the move is from this counter-cut position */
      if (previousPositions.length > 1) {
        newPositionX = previousPositions[1][0] + xCCutDelta;
        newPositionY = previousPositions[1][1] + yCCutDelta;
      }

      /* If the counter-cut goes outside of the animation area, put it at the border of the animation */
      if (newPositionX < 0) newPositionX = 0;
      else if (newPositionX > 1) newPositionX = 1;

      if (newPositionY < 0) newPositionY = 0;
      else if (newPositionY > 0.85) newPositionY = 0.85;

      newAnimation.positions[previousStepId][elemId][1].push(newPositionX);
      newAnimation.positions[previousStepId][elemId][1].push(newPositionY);
    }

    this.saveAnimation(newAnimation, () => {
      this.state.animation.log();
    });
  };

  onElementMove = (element, xDelta, yDelta) => {
    var currentPosition = this.state.animation.getPositionsAtStep(element.props.eId, Math.ceil(this.currentStep));
    currentPosition = currentPosition[0];
    var xDeltaPercent = xDelta / (this.state.width * this.wRatio);
    var yDeltaPercent = yDelta / (this.state.height * this.hRatio);

    var newPosition = [currentPosition[0] + xDeltaPercent, currentPosition[1] + yDeltaPercent];
    var newPixelPosition = this._positionPercentToPixel(newPosition[0], newPosition[1]);

    var newAnimation = this._copyAnimation();
    var animationWidth = this.state.width * this.wRatio;
    var animationHeight = this.state.height * this.hRatio;

    /* If the element is dropped on the trash icon */
    if (
      newPixelPosition[0] >= animationWidth - 50 &&
      newPixelPosition[1] >= animationHeight - 50 &&
      newPixelPosition[1] <= animationHeight + 3
    ) {
      /* Remove it from the drill */
      newAnimation.removeElement(element.props.eId);

      /* If it had a number, we need to decrement the number of the corresponding draggable element */
      const labels = { ...this.state.labels };
      labels[type] = labels[type] - 1;
      this.setState({ labels });
    } else {
      /* If the element is moved outside of the animation area, move it to the closest position inside the animation area */
      if (newPosition[0] < 0) newPosition[0] = 0;
      else if (newPosition[0] > 1) newPosition[0] = 1;

      if (newPosition[1] < 0) newPosition[1] = 0;
      else if (newPosition[1] > 0.85) newPosition[1] = 0.85;

      /* If the element is not moved outside of the animation area, updated its coordinates */
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId] = [];
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId].push([]);
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(newPosition[0]);
      newAnimation.positions[Math.ceil(this.currentStep)][element.props.eId][0].push(newPosition[1]);
    }

    this.saveAnimation(newAnimation);
    this.setState({ isElementMoving: false }); // Line to comment
  };

  onMoveStart = () => {
    this.setState({
      isElementMoving: true,
    });
  };

  addStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    newAnimation.addStep();

    this.saveAnimation(newAnimation);
  };

  removeStep = () => {
    // Add the element with its initial position
    var newAnimation = this._copyAnimation();

    /* If the last step is currently displayed */
    if (this.currentStep === this.state.animation.stepCount() - 1)
      Animated.timing(this.currentStepAV, {
        toValue: this.state.animation.stepCount() - 2,
        duration: 0,
        easing: Easing.linear,
        key: 0,
      }).start();

    newAnimation.removeStep();

    this.saveAnimation(newAnimation);
  };

  render() {
    return (
      <View style={styles.mainContainer} onLayout={this.onLayout}>
        <Animation
          onLayout={this.onLayout}
          style={[{ flex: 10 }]}
          editable
          animation={this.state.animation}
          onMoveStart={this.onMoveStart}
          onElementMove={this.onElementMove}
          onCutMove={this.cutMove}
          widthRatio={1}
          heightRatio={this.hRatio}
          dTop={this.state.dTop}
          lTop={this.state.lTop}
          onStepChange={this.displayStepDescription}
          onStepAdded={this.addStep}
          onStepRemoved={this.removeStep}
          currentStepAV={this.currentStepAV}
        />

        {this.state.isElementMoving ? (
          <View style={styles.deletionArea}>
            <MaterialCommunityIcons name="trash-can" color={theme.COLOR_PRIMARY} size={22} />
          </View>
        ) : (
          <View style={styles.draggableArea}>
            {['offense', 'defense', 'disc', 'triangle'].map(type => (
              <DraggableDisplayedElement
                type={type}
                playerRadius={this.state.playerRadius}
                onMoveEnd={this.addElementToAnimation}
                number={this.state.labels[type]}
                key={type}
              />
            ))}
            <BackgroundPicker
              onBackgroundChange={this.onBackgroundChange}
              selectedBackground={this.state.animation.background}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  draggableArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  deletionArea: {
    marginHorizontal: 30,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimationEditor;

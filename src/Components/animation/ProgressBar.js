import React from 'react';
import { Text, StyleSheet, Easing, Animated, View, TouchableOpacity, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../styles/theme.style';

/** Progress bar displayed with an animation which:
    - shows the number of step;
    - shows the current step;
    - enable to move to a given step by clicking on the associated button
 */
class ProgressBar extends React.Component {
  // The props contains:
  // - animationWidth/animationHeight: size in pixel of the animation
  // - stepCount: the number of steps
  // - currentStepAV: an animated value which represents the current step
  // - getStepAnimation(): set the animation to a given step
  constructor(props) {
    super(props);

    this.state = {
      stateFromProps: _initializeStateFromProps(props),
    };
  }

  _addStepButtonClicked() {
    if (this.props.onStepAdded() !== undefined && this.props.onStepAdded !== null) this.props.onStepAdded();
  }

  render() {
    return (
      <View style={[{ position: 'absolute', left: 0, top: 0 }]} height="100%" width="100%">
        {/* Gray dots */}
        {!this.props.readonly &&
          this.state.stateFromProps.progressBarDots?.map(item => (
            <View style={[styles.gray, styles.dot, { left: item.left }]} key={item.key} />
          ))}

        {/* Step number */}
        {!this.props.readonly &&
          this.state.stateFromProps.progressBarDots?.map(item => (
            <Text
              style={[styles.progressBarNumbers, { left: item.left + 4 }]}
              key={item.key + 2 * this.state.stateFromProps.progressBarDots.length}
            >
              {item.key + 1}
            </Text>
          ))}

        {/* Gray bar */}
        <View
          style={[
            styles.gray,
            styles.progressBar,
            this.props.readonly && styles.largeProgressBar,
            { width: this.state.stateFromProps.progressBarWidth },
          ]}
        />

        {/* Black dots */}
        {!this.props.readonly &&
          this.state.stateFromProps.progressBarDots?.map(item => (
            <Animated.View
              style={[
                styles.black,
                styles.dot,
                {
                  opacity: this.state.stateFromProps.interpolatedOpacities[item.key],
                  left: item.left,
                },
              ]}
              key={item.key + this.state.stateFromProps.progressBarDots.length}
            />
          ))}

        {/* Play button */}
        <TouchableOpacity
          style={[styles.playButton, { left: this.state.stateFromProps.playLeft }]}
          onPress={() => this.props.playAnimation()}
        >
          <MaterialCommunityIcons name="play" color={theme.COLOR_PRIMARY} size={36} />
        </TouchableOpacity>

        {/* Black bar */}
        <Animated.View
          style={[
            styles.black,
            styles.progressBar,
            this.props.readonly && styles.largeProgressBar,
            { width: this.state.stateFromProps.interpolatedWidth },
          ]}
        />

        {/* Clickable areas to move to each step */}
        {this.state.stateFromProps.progressBarDots?.map((item, idx, arr) => (
          <TouchableOpacity
            style={
              this.props.readonly
                ? [
                    styles.largeHitBox,
                    {
                      width: item.touchableWidth,
                      left: item.touchableLeft,
                    },
                  ]
                : [styles.dotHitBox, { left: item.left - DOT_SIZE / 2 }]
            }
            onPress={() => this.props.goToStep(item.key)}
            key={1000 + item.key}
          />
        ))}

        {/* White squares */}
        {this.props.readonly &&
          this.state.stateFromProps.progressBarDots?.map(item => (
            <Animated.View
              style={[styles.white, styles.square]}
              key={item.key + this.state.stateFromProps.progressBarDots.length}
              left={item.left + 3}
            />
          ))}

        {/* Buttons: add step, remove step, trash */}
        {!this.props.readonly && (
          <View style={[StyleSheet.absoluteFill]} height="100%" width="100%">
            <TouchableOpacity style={[styles.icon, { right: 40 }]} onPress={() => this.props.onStepAdded()}>
              <MaterialCommunityIcons name="plus-box" color={theme.COLOR_PRIMARY} size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.icon, { right: 10 }]} onPress={() => this.props.onStepRemoved()}>
              <MaterialCommunityIcons name="minus-box" color={theme.COLOR_PRIMARY} size={22} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.animationWidth !== state.stateFromProps.animationWidth ||
      props.animationHeight !== state.stateFromProps.animationHeight ||
      props.stepCount !== state.stateFromProps.stepCount
    )
      return { stateFromProps: _initializeStateFromProps(props) };
    else return null;
  }
}

export default ProgressBar;

const DOT_SIZE = 15;
const PROGRESS_BAR_MIDDLE = 15;
const HITBOX_SLOP = 10;

const _initializeStateFromProps = props => {
  // Horizontal position of each dot
  var progressBarDots = [];

  // Width of the progress bar
  var progressBarWidth = props.animationWidth - 135;

  if (props.readonly) progressBarWidth = props.animationWidth - 35;

  var stepWidth = progressBarWidth / props.stepCount;

  // Set the horizontal position in pixels of each dot on the progress bar
  for (var i = 0; i < props.stepCount; i++) {
    var touchableWidth = stepWidth;
    var left = 10 + i * stepWidth;
    var touchableLeft = left;

    if (i === 0)
      if (props.readonly) touchableWidth = 0;
      else touchableWidth = stepWidth / 2;
    else if (props.readonly) touchableLeft -= stepWidth;
    else touchableLeft -= stepWidth / 2;

    const frozenObj = Object.freeze({
      key: i,
      touchableLeft,
      left,
      touchableWidth,
    });
    progressBarDots = Object.freeze(progressBarDots.concat(frozenObj));
  }

  var playLeft = 10 + props.stepCount * stepWidth;

  /* Create an array with all the step numbers */
  var time = [];
  for (var stepId = 0; stepId < props.stepCount; stepId++) time.push(stepId);

  /* Interpolation of the step dots opacity */
  var interpolatedOpacities = [];

  /* For each dot */
  for (var dotId = 0; dotId < props.stepCount; dotId++) {
    var opacity = [];

    /* For each step */
    for (stepId = 0; stepId < props.stepCount; stepId++) {
      if (dotId <= stepId)
        /* If the dot is visible */
        opacity.push(1);
      else opacity.push(0); /* If the dot is transparent */
    }

    interpolatedOpacities.push(
      props.currentStepAV.interpolate({
        inputRange: time,
        outputRange: opacity,
      }),
    );
  }

  if (props.readonly) {
    progressBarWidth -= stepWidth;
    playLeft -= stepWidth - DOT_SIZE / 4;
  }

  return {
    animationHeight: props.animationHeight,
    animationWidth: props.animationWidth,
    stepCount: props.stepCount,
    progressBarDots,
    progressBarWidth,
    addStepLeft: 10 + props.stepCount * stepWidth,
    interpolatedOpacities,
    interpolatedWidth: props.currentStepAV.interpolate({
      // Interpolation of the current step which enables to get the current progress bar width
      inputRange: [0, 1],
      outputRange: [0, stepWidth],
    }),
    playLeft,
  };
};

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: 10,
    borderWidth: 0,
    bottom: PROGRESS_BAR_MIDDLE - DOT_SIZE / 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    color: 'white',
  },
  icon: {
    position: 'absolute',
    borderRadius: 10,
    borderWidth: 0,
    bottom: PROGRESS_BAR_MIDDLE - DOT_SIZE / 2 - 2,
  },
  square: {
    position: 'absolute',
    height: DOT_SIZE,
    width: DOT_SIZE / 2,
    borderWidth: 0,
    bottom: PROGRESS_BAR_MIDDLE - DOT_SIZE / 2,
    color: 'white',
  },
  dotHitBox: {
    position: 'absolute',
    bottom: 0,
    height: DOT_SIZE + HITBOX_SLOP,
    width: DOT_SIZE + HITBOX_SLOP,
  },
  largeHitBox: {
    position: 'absolute',
    height: PROGRESS_BAR_MIDDLE + HITBOX_SLOP,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  white: {
    backgroundColor: 'white',
  },
  black: {
    backgroundColor: 'black',
  },
  gray: {
    backgroundColor: 'gray',
  },
  progressBar: {
    position: 'absolute',
    bottom: PROGRESS_BAR_MIDDLE - 4 / 2,
    height: 4,
    left: 20,
  },
  largeProgressBar: {
    height: 10,
    bottom: PROGRESS_BAR_MIDDLE - 10 / 2,
  },
  progressBarNumbers: {
    position: 'absolute',
    bottom: PROGRESS_BAR_MIDDLE + 1 + DOT_SIZE / 2,
  },
  playButton: {
    position: 'absolute',
    width: 2 * DOT_SIZE,
    height: 2 * DOT_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: PROGRESS_BAR_MIDDLE - DOT_SIZE,
    borderRadius: 10,
    borderWidth: 0,
  },
});

import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { WebView } from 'react-native-webview';

import Animation from './animation/Animation';
import VimeoVideo from './VimeoVideo';
import { IllustrationType } from '../Fixtures';
import theme from '../styles/theme.style';
import { swipeConfig } from '../styles/config';
import iconRedo from '../../assets/redo_arrow.png';
import buttonValidation from '../../assets/button_validation_ultra_light.png';
import buttonValidationGradient from '../../assets/button_validation_gradient.png';
import { Easing } from 'react-native-reanimated';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const screenDimension = Dimensions.get('window');

const DrillIllustration = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const opacityUnchecked = useRef(new Animated.Value(1)).current;
  const opacityChecked = opacityUnchecked.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const currentStep = props.drill.steps[activeIndex];

  const checkAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityUnchecked, {
        toValue: 0,
        duration: 800,
        easing: Easing.easeOutQuint,
      }),
      Animated.timing(opacityUnchecked, {
        toValue: 1,
        duration: 10,
      }),
    ]).start(() => incrementStepIndex());
  };

  const checkAnimationFast = () => {
    Animated.sequence([
      Animated.timing(opacityUnchecked, {
        toValue: 0,
        duration: 200,
        easing: Easing.easeOutQuint,
      }),
      Animated.timing(opacityUnchecked, {
        toValue: 1,
        duration: 10,
      }),
    ]).start(() => incrementStepIndex());
  };

  // back to 0 when drill changes
  useEffect(() => {
    setActiveIndex(0);
  }, [props.drill]);

  const incrementStepIndex = () => {
    setActiveIndex((activeIndex + 1) % (props.drill.steps.length + 1));
  };

  const displayNextStep = () => {
    if (activeIndex + 1 === props.drill.steps.length) {
      return (
        <>
          <View style={styles.description}>
            <View style={styles.wrapperFinish}>
              <Text style={styles.fitnessNext}>Finish</Text>
            </View>
          </View>
          <View style={styles.lines} />
        </>
      );
    } else {
      return (
        <>
          <View style={styles.description}>
            <View style={styles.subWrapper}>
              <Text style={styles.fitnessNext}>{props.drill.steps[activeIndex + 1].repetition}</Text>
            </View>
            <View style={styles.subSubWrapper}>
              <Text style={styles.fitnessNext}>{props.drill.steps[activeIndex + 1].title}</Text>
            </View>
            <View style={styles.fakeWrapper} />
          </View>
          <View style={styles.lines} />
        </>
      );
    }
  };

  const displayFinish = () => {
    return (
      <>
        <View style={styles.containerFinish}>
          <Text style={styles.redoMessage}>You have completed the drill!</Text>
          <TouchableOpacity style={styles.redoButton} onPress={() => incrementStepIndex()}>
            <Image style={styles.redoImage} source={iconRedo} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const displayAnimation = ({ illustrationSource, instruction, title }) => {
    return (
      <>
        <Animation widthRatio={1} heightRatio={props.minimal ? 2 / 5 : 1 / 2} animation={illustrationSource} />
        {props.drill.steps.length > 1 && (
          <>
            <View style={styles.description}>
              <View style={styles.containerAnimation}>
                <View style={styles.descriptionAnimation}>
                  <View style={styles.subSubWrapper}>
                    <Text style={styles.fitness}>{title}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.lines} />
          </>
        )}
        <Text style={styles.instruction}>{instruction}</Text>
      </>
    );
  };

  const displayYoutube = ({ illustrationSource, title, instruction }) => {
    return (
      <>
        <View style={{ height: 250 }}>
          <WebView
            source={{
              uri: illustrationSource,
            }}
          />
        </View>
        {props.drill.steps.length > 1 && (
          <>
            <View style={styles.description}>
              <View style={styles.containerAnimation}>
                <View style={styles.descriptionAnimation}>
                  <View style={styles.subSubWrapper}>
                    <Text style={styles.fitness}>{title}</Text>
                  </View>
                  <TouchableOpacity style={styles.container} onPress={() => checkAnimation()}>
                    <Animated.View
                      style={[
                        {
                          opacity: opacityUnchecked,
                        },
                      ]}
                    >
                      <Image style={styles.buttonNext} source={buttonValidation} />
                    </Animated.View>
                    <Animated.View
                      style={[
                        {
                          opacity: opacityChecked,
                        },
                      ]}
                    >
                      <Image style={styles.buttonNext} source={buttonValidationGradient} />
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.lines} />
            <Text style={styles.instruction}>{instruction}</Text>
          </>
        )}
      </>
    );
  };

  const displayVimeo = ({ illustrationSource, repetition, title, sounds }) => {
    const isUniqueStep = props.drill.steps.length === 1;
    return (
      <>
        <View style={[{ height: 250 }, isUniqueStep && styles.videoAlone]}>
          <VimeoVideo vimeoId={illustrationSource} screenWidth={screenDimension.width} sounds={sounds} />
        </View>
        {!isUniqueStep && (
          <>
            <View style={styles.description}>
              <View style={styles.subWrapper}>
                <Text style={styles.fitness}>{repetition}</Text>
              </View>
              <View style={styles.subSubWrapper}>
                <Text style={styles.fitness}>{title}</Text>
              </View>
              <TouchableOpacity style={styles.container} onPress={() => checkAnimation()}>
                <Animated.View
                  style={[
                    {
                      opacity: opacityUnchecked,
                    },
                  ]}
                >
                  <Image style={styles.buttonNext} source={buttonValidation} />
                </Animated.View>
                <Animated.View
                  style={[
                    {
                      opacity: opacityChecked,
                    },
                  ]}
                >
                  <Image style={styles.buttonNext} source={buttonValidationGradient} />
                </Animated.View>
              </TouchableOpacity>
            </View>

            <View style={styles.lines} />
            <View style={styles.containerAnimation}>
              <View style={styles.container}>{displayNextStep()}</View>
            </View>
          </>
        )}
      </>
    );
  };

  const checkSwitch = () => {
    if (activeIndex === props.drill.steps.length) {
      return displayFinish();
    } else if (!currentStep) {
      return <View />; // bad state, but let's not crash
    } else {
      switch (props.drill.steps[activeIndex].illustrationType) {
        case IllustrationType.ANIMATION:
          return displayAnimation(props.drill.steps[activeIndex]);
        case IllustrationType.YOUTUBE:
          return displayYoutube(props.drill.steps[activeIndex]);
        case IllustrationType.VIMEO:
          return displayVimeo(props.drill.steps[activeIndex]);
        default:
          return <Text>No visual content for this drill</Text>;
      }
    }
  };

  const renderStep = ({ item, index }) => {
    if (!currentStep) {
      return <View />; // bad state, but let's not crash
    } else {
      switch (item.illustrationType) {
        case IllustrationType.ANIMATION:
          return displayAnimation(item);
        case IllustrationType.YOUTUBE:
          return displayYoutube(item);
        case IllustrationType.VIMEO:
          return displayVimeo(item);
        default:
          return <Text>No visual content for this drill</Text>;
      }
    }
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={props.drill.steps.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
          paddingVertical: 0,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: theme.GRADIENT_FIRST_COLOR,
        }}
        inactiveDotStyle={{
          backgroundColor: theme.COLOR_SECONDARY,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const drillTypes = () => {
    if (props.drill.type === 'frisbee') {
      return (
        <SafeAreaView style={styles.container}>
          <Carousel
            layout="default"
            // ref={ref => (carousel = ref)}
            data={props.drill.steps}
            sliderWidth={screenDimension.width}
            itemWidth={screenDimension.width}
            renderItem={renderStep}
            onSnapToItem={index => setActiveIndex(index)}
          />
          <View style={styles.pagination}>{pagination()}</View>
        </SafeAreaView>
      );
    } else {
      return (
        <GestureRecognizer style={styles.container} onSwipeLeft={checkAnimationFast} config={swipeConfig}>
          {checkSwitch()}
        </GestureRecognizer>
      );
    }
  };

  return <View style={styles.container}>{drillTypes()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFinish: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  redoMessage: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  containerAnimation: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  description: {
    flexDirection: 'row',
    paddingBottom: 2,
  },
  descriptionAnimation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageAnimation: {
    flex: 1,
  },
  fitness: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  fitnessNext: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_SECONDARY,
  },
  separator: {
    height: 15,
    borderRightWidth: 1,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  buttonNext: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    alignItems: 'center',
  },
  subWrapper: {
    flexGrow: 0,
    flexShrink: 0,
    alignItems: 'center',
  },
  subSubWrapper: {
    flex: 6,
  },
  fakeWrapper: {
    width: 70,
  },
  lines: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  wrapperFinish: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishMessage: {
    marginTop: 150,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  instruction: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redoButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  redoImage: {
    width: 60,
    height: 60,
  },
  videoAlone: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pagination: {
    paddingBottom: 15,
  },
});

export default DrillIllustration;

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  Platform,
  Animated,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Share,
} from 'react-native';
import { Easing } from 'react-native-reanimated';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import I18n from '../utils/i18n';

import Animation from '../Components/animation/Animation';
import VimeoVideo from '../Components/shared/VimeoVideo';
import theme from '../styles/theme.style';

import Drill from '..//Components/animation/Drill';
import { createLink } from '../utils/firebase';

const FitnessPage = (props) => {
  const { route, navigation } = props;

  const drill = props.route.params.drill;

  const share = async (drill) => {
    const url = await createLink(
      'drills/' + drill.id,
      drill.title,
      I18n.t('drillPage.description', { description: drill.description.slice(0, 70) }),
    );

    const youtubeVideos = drill.steps.reduce((total, step) => {
      const stepvideo = step.youtube ? `${step.title} - ${step.youtube}\n` : '';
      return total + stepvideo;
    }, '');

    Share.share({
      title: I18n.t('drillPage.shareTitle', { drillTitle: drill.title }),
      message: I18n.t('drillPage.shareContent', { url, youtubeVideos, count: youtubeVideos.length }),
      url,
    }).catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: drill.title,
      headerRight: () => (
        <TouchableOpacity onPress={() => share(drill)} testID="shareButton">
          <Ionicons
            name={Platform.select({
              ios: 'ios-share-outline',
              default: 'share-social',
            })}
            style={styles.iconShare}
          />
        </TouchableOpacity>
      ),
    });
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const opacityUnchecked = useRef(new Animated.Value(1)).current;
  const opacityChecked = opacityUnchecked.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const currentStep = drill.steps[activeIndex];
  const stepsCount = drill.steps.length;

  const carouselRef = useRef(null);
  const flatListRef = useRef(null);

  const checkAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityUnchecked, {
        toValue: 0,
        duration: 800,
        easing: Easing.easeOutQuint,
        useNativeDriver: false,
      }),
      Animated.timing(opacityUnchecked, {
        toValue: 1,
        duration: 10,
        useNativeDriver: false,
      }),
    ]).start(() => {
      const newIndex = (activeIndex + 1) % (stepsCount + 1);
      setActiveIndex(newIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: newIndex, viewPosition: 0.5 });
    });
  };

  // back to 0 when drill changes
  useEffect(() => {
    setActiveIndex(0);
  }, [drill]);

  const renderFinish = () => {
    return (
      <View style={styles.containerFinish}>
        <Text style={styles.redoMessage}>{I18n.t('drills.fitnessDrillIllustration.redoMessage')}</Text>
        <TouchableOpacity style={styles.redoButton} onPress={() => setActiveIndex(0)}>
          <MaterialCommunityIcons name="restart" color={theme.COLOR_PRIMARY} size={50} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderStep = ({ index, item }) => {
    const isCurrent = index == activeIndex;

    const doneStyle = index < activeIndex ? styles.stepTitleDone : {};
    const currentStyle = isCurrent ? styles.stepTitleCurrent : {};
    const currentStep = isCurrent ? styles.stepCurrent : {};

    return (
      <TouchableOpacity style={[styles.step, currentStep]} onPress={() => setActiveIndex(index)}>
        <View style={styles.subWrapper}>
          <Text style={[styles.stepTitle, doneStyle, currentStyle]}>{item.repetition} </Text>
          <Text style={[styles.stepTitle, doneStyle, currentStyle]}>{item.title}</Text>
        </View>
        {isCurrent && (
          <TouchableOpacity style={styles.doneAnimation} onPress={() => checkAnimation()} testID="doneIcon">
            <Animated.View style={{ opacity: opacityUnchecked }}>
              <MaterialCommunityIcons
                style={styles.buttonNext}
                name="check-circle-outline"
                color={theme.COLOR_SECONDARY}
                size={26}
              />
            </Animated.View>
            <Animated.View style={{ opacity: opacityChecked }}>
              <MaterialCommunityIcons
                style={styles.buttonNext}
                name="check-circle"
                color={theme.MAIN_COLOR}
                size={26}
              />
            </Animated.View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderVimeo = ({ vimeoId, sounds }) => {
    const isUniqueStep = stepsCount === 1;
    return (
      <>
        <View style={styles.allPage}>
          <View style={[styles.videoMultiple, isUniqueStep && styles.videoAlone]}>
            <VimeoVideo vimeoId={vimeoId} sounds={sounds} />
          </View>
          <ScrollView style={styles.scrollList}>
            {!isUniqueStep && (
              <FlatList
                nestedScrollEnabled
                ref={flatListRef}
                data={drill.steps}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderStep}
              />
            )}
          </ScrollView>
        </View>
      </>
    );
  };

  const renderAnimation = ({ animation, title, instruction }, index) => {
    const isFirstStep = index === 0;
    const isLastStep = index === stepsCount - 1;
    return (
      <>
        <View style={styles.line}>
          <View>
            {!isFirstStep && (
              <TouchableOpacity
                onPress={() => {
                  carouselRef.current.snapToPrev();
                }}
              >
                <MaterialCommunityIcons name="chevron-double-left" color={theme.COLOR_PRIMARY} size={26} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.title}>{title}</Text>
          <View>
            {!isLastStep && (
              <TouchableOpacity
                onPress={() => {
                  carouselRef.current.snapToNext();
                }}
              >
                <MaterialCommunityIcons name="chevron-double-right" color={theme.COLOR_PRIMARY} size={26} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.animation}>
          <Animation widthRatio={1} heightRatio={1 / 2} animation={new Drill(animation)} />
        </View>
        <Text style={styles.instruction}>{instruction}</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {activeIndex === drill.steps.length && renderFinish()}
      {currentStep?.animation && !currentStep?.vimeoId && renderAnimation(currentStep)}
      {currentStep?.vimeoId && renderVimeo(currentStep)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFinish: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  redoMessage: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  redoButton: {
    width: 80,
    height: 80,
  },
  step: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  doneAnimation: {
    flex: 1,
  },
  stepTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  stepTitleCurrent: {
    fontWeight: 'bold',
  },
  stepTitleDone: {
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
    marginLeft: 20,
  },
  subWrapper: {
    flexGrow: 0,
    flexShrink: 0,
    alignItems: 'center',
    flexDirection: 'row',
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
  videoAlone: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  animation: { flex: 9 },
  videoMultiple: {
    height: 250,
  },
  scrollList: {
    height: '100%',
  },
  allPage: {
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  stepCurrent: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  iconShare: {
    fontSize: 28,
    marginRight: 20,
  },
});

export default FitnessPage;

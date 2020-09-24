import React, { useState, useLayoutEffect } from 'react';
import {
  Share,
  StyleSheet,
  View,
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import I18n from '../utils/i18n';
import AnimationEditor from './animation/AnimationEditor';
import HeaderButton from './shared/HeaderButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../styles/theme.style';

import { connect } from 'react-redux';
import { saveAnimation, deleteAnimation } from '../Store/Actions/animationAction';

export const AnimationEditorPage = props => {
  const [currentAnimationState, saveAnimationState] = useState(null);
  const [modalManagerVisible, setModalManagerVisible] = useState(false);
  const [modalTitleVisible, setModalTitleVisible] = useState(false);
  const [modalOpenVisible, setModalOpenVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [animationTempTitle, setAnimationTempTitle] = useState('');
  const [animationTitle, setAnimationTitle] = useState(I18n.t('animationEditor.untitledAnimation'));
  const navigation = props.navigation;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="dots-vertical"
          color={theme.COLOR_PRIMARY}
          size={26}
          onPress={() => setModalManagerVisible(true)}
        />
      ),
    });
  });

  // Called when the user chose for the animation a title which is already used by another animation
  const askOverwriteAnimation = () => {
    Alert.alert(
      I18n.t('animationEditor.drillManager.alreadyUsedTitle'),
      I18n.t('animationEditor.drillManager.askOverwrite'),
      [
        {
          text: I18n.t('animationEditor.drillManager.cancel'),
          style: 'cancel',
          onPress: () => {
            setModalTitleVisible(true);
          },
        },
        {
          text: I18n.t('animationEditor.drillManager.validate'),
          onPress: () => {
            props.saveAnimation({ title: animationTempTitle, oldTitle: animationTitle, value: currentAnimationState });
            setAnimationTitle(animationTempTitle);
            navigation.setOptions({ headerTitle: animationTempTitle });
          },
        },
      ],
      'secure-text',
    );
  };

  const updateTitle = () => {
    setModalTitleVisible(false);

    // If the title has changed
    if (animationTempTitle !== animationTitle) {
      const animationIndex = props.customeAnimations.findIndex(item => item.title === animationTempTitle);

      // If the new title is already given to another animation
      if (animationIndex !== -1) askOverwriteAnimation();
      // Otherwise, send the updated animation to the store
      else {
        props.saveAnimation({ title: animationTempTitle, oldTitle: animationTitle, drill: currentAnimationState });
        setAnimationTitle(animationTempTitle);
        navigation.setOptions({ headerTitle: animationTempTitle });
      }
    }
  };

  const saveLocally = title => {
    props.saveAnimation({ title: animationTitle, drill: currentAnimationState });
  };

  const doShare = () => {
    Share.share({
      title: I18n.t('animationEditor.sharePlaceholder'),
      message:
        '----- ENCODED DRILL -------\n' + JSON.stringify(currentAnimationState) + '\n---------------------------',
    }).catch(err => console.log(err));
  };

  const openAnimation = item => {
    setAnimationTitle(item.title);
    navigation.setOptions({ headerTitle: item.title });
    setAnimationTempTitle(item.title);
    saveAnimationState(item.drill);
  };

  const createNewAnimation = () => {
    const emptyAnimation = {
      positions: [[], []],
      ids: [],
      texts: [],
      background: 'endzone',
    };

    // Create the title of the new animation
    const defaultTitle = I18n.t('animationEditor.untitledAnimation');
    let newTitle = defaultTitle;

    const titleId = props.customeAnimations.findIndex(item => item.title === newTitle);

    // If a saved animation already has the default title
    if (titleId !== -1) {
      let counter = 1;

      do {
        newTitle = defaultTitle + ' (' + counter + ')';
        counter += 1;
      } while (props.customeAnimations.findIndex(item => item.title === newTitle) !== -1);
    }

    saveAnimationState(emptyAnimation);
    setAnimationTitle(newTitle);
    setAnimationTempTitle(newTitle);
    setModalManagerVisible(false);
    navigation.setOptions({ headerTitle: newTitle });
  };

  const deleteAnimation = item => {
    // Envoyer l'action de suppression
    props.deleteAnimation(item.title);

    if (item.title === animationTitle) createNewAnimation();
  };

  return (
    <View style={styles.animationEditorPage}>
      <AnimationEditor onAnimationChange={saveAnimationState} animation={currentAnimationState} />

      {/* Modal to manage the dirlls */}
      <Modal visible={modalManagerVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalTitleText}>{`${I18n.t('animationEditor.drillManager.titleManager')}`}</Text>
            <Text style={styles.modalText}>{`${'"' + animationTitle + '"'} `}</Text>

            {/* Save button */}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalManagerVisible(false);
                saveLocally();
              }}
            >
              <Text style={styles.textStyle}> {`${I18n.t('animationEditor.drillManager.save')}`}</Text>
            </TouchableHighlight>

            {/* Rename button */}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalManagerVisible(false);
                setModalTitleVisible(true);
              }}
            >
              <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.rename')}`}</Text>
            </TouchableHighlight>

            {/* Send to team button */}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalManagerVisible(false);
                doShare();
              }}
            >
              <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.cta')}`}</Text>
            </TouchableHighlight>

            {/* New animation button */}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                createNewAnimation();
              }}
            >
              <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.newAnimation')}`}</Text>
            </TouchableHighlight>

            {/* Load button */}
            {props.customeAnimations !== undefined &&
            props.customeAnimations !== null &&
            props.customeAnimations.length > 0 ? (
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setModalManagerVisible(false);
                  setModalOpenVisible(true);
                }}
              >
                <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.load')}`}</Text>
              </TouchableHighlight>
            ) : (
              <View />
            )}

            {/* Delete button */}
            {props.customeAnimations !== undefined &&
            props.customeAnimations !== null &&
            props.customeAnimations.length > 0 ? (
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setModalManagerVisible(false);
                  setModalDeleteVisible(true);
                }}
              >
                <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.delete')}`}</Text>
              </TouchableHighlight>
            ) : (
              <View />
            )}

            {/* Cancel button */}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalManagerVisible(false);
              }}
            >
              <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.cancel')}`}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* Modal to delete an existing animations */}
      <Modal visible={modalDeleteVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalTitleText}>{`${I18n.t('animationEditor.drillManager.deleteTitle')}`}</Text>

            <FlatList
              data={props.customeAnimations}
              keyExtractor={item => item.title.toString()}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setModalDeleteVisible(false);
                    deleteAnimation(item);
                  }}
                >
                  <View>
                    <Text style={styles.item}>{item.title}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalDeleteVisible(false);
                setModalManagerVisible(true);
              }}
            >
              <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.cancel')}`}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* Modal to open an existing animations */}
      <Modal visible={modalOpenVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalTitleText}>{`${I18n.t('animationEditor.drillManager.openTitle')}`}</Text>

            <FlatList
              data={props.customeAnimations}
              keyExtractor={item => item.title.toString()}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setModalOpenVisible(false);
                    openAnimation(item);
                  }}
                >
                  <View>
                    <Text style={styles.item}>{item.title}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalOpenVisible(false);
                setModalManagerVisible(true);
              }}
            >
              <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.cancel')}`}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* Modal to enter the drill title */}
      <Modal visible={modalTitleVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalTitleText}>{`${I18n.t('animationEditor.drillManager.enterTitle')}`}</Text>

            <Text style={styles.modalText}>{`${'"' + animationTitle + '"'} `}</Text>

            <TextInput
              style={{ margin: 5, marginBottom: 20 }}
              placeholder={I18n.t('animationEditor.drillManager.clickHereToRename')}
              onChangeText={text => setAnimationTempTitle(text)}
            />

            <View style={{ flexDirection: 'row' }}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  updateTitle();
                }}
              >
                <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.ok')}`}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setAnimationTempTitle(animationTitle);
                  setModalTitleVisible(false);
                  setModalManagerVisible(true);
                }}
              >
                <Text style={styles.textStyle}>{`${I18n.t('animationEditor.drillManager.cancel')}`}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    customeAnimations: state.customeAnimations,
  };
};

const mapDispatchToProps = { saveAnimation, deleteAnimation };

export default connect(mapStateToProps, mapDispatchToProps)(AnimationEditorPage);

const styles = StyleSheet.create({
  animationEditorPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitleView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    backgroundColor: '#d5f6ffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    margin: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
});

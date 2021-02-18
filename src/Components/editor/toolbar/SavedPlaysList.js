import React, { useState, useRef } from 'react';
import { StyleSheet, View, Alert, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../../styles/theme.style';
import I18n from '../../../utils/i18n';
import FlashMessage, { showSuccess } from '../../../utils/flashMessage';
import Modal from '../../shared/Modal';

const SavedPlaysList = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  const modalFlash = useRef(null);

  const beforeOpening = (play) => {
    if (props.isPlaySaved) {
      props.onOpen(play);
      setModalOpened(false);
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: props.playTitle }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              props.saveCurrentPlay();
              showSuccess(I18n.t('editor.currentPlayManager.saveSuccess', { title: props.playTitle }));
              props.onOpen(play);
              setModalOpened(false);
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              props.onOpen(play);
              setModalOpened(false);
            },
          },
        ],
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalOpened(true)}>
        <MaterialCommunityIcons name="clipboard-text-outline" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
      </TouchableOpacity>
      <Modal title={I18n.t('editor.savedPlaysList.title')} visible={modalOpened} onClose={() => setModalOpened(false)}>
        <FlatList
          data={props.savedPlays}
          keyExtractor={(item) => item.title}
          style={{ flexGrow: 0 }}
          ListEmptyComponent={() => (
            <View>
              <Text>{I18n.t('editor.savedPlaysList.empty')}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                beforeOpening(item);
              }}
            >
              <View style={styles.item}>
                <View style={styles.itemTitle}>
                  <Text style={styles.itemTitleText}>{item.title}</Text>
                </View>
                <MaterialCommunityIcons
                  style={styles.deleteIcon}
                  name="trash-can"
                  onPress={() => {
                    deletionConfirmation(item);
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <FlashMessage ref={modalFlash} position="bottom" />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  itemTitle: {
    flexBasis: '90%',
  },
  deleteIcon: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});

export default SavedPlaysList;

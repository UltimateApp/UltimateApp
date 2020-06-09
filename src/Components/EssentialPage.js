import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Modal, TouchableHighlight, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import VimeoVideo from './VimeoVideo';

const screenDimension = Dimensions.get('window');

const EssentialPage = () => {
  const dataEssential = [
    {
      title: 'Throwing',
      pages: [
        {
          id: 1,
          title: 'Backhand',
          text: 'Rowan McDonnell',
          video: '415565763',
          animation: '',
        },
        {
          id: 2,
          title: 'Forehand',
          text: 'Rowan McDonnell',
          video: '415569048',
          animation: '',
        },
        {
          id: 3,
          title: 'Hammer',
          text: 'Rowan McDonnell',
          video: '423999439',
          animation: '',
        },
        {
          id: 4,
          title: 'Scoober',
          text: 'Rowan McDonnell',
          video: '423999364',
          animation: '',
        },
        {
          id: 5,
          title: 'How to Backhand Pull Like a Boss',
          text: 'Ryan Lowe',
          video: '424514096',
          animation: '',
        },
      ],
    },
    {
      title: 'Catching',
      pages: [
        {
          id: 1,
          title: 'The art of catching',
          text: 'Rise Up',
          video: '424266555',
          animation: '',
        },
        {
          id: 2,
          title: 'How to Layout',
          text: 'Brodie Smith',
          video: '424514902',
          animation: '',
        },
      ],
    },
    {
      title: 'Cutting',
      pages: [
        {
          id: 1,
          title: 'How to make a perfect cut?',
          text: 'Rise Up Ultimate',
          video: '424000350',
          animation: '',
        },
      ],
    },
    {
      title: 'Defense',
      pages: [
        {
          id: 1,
          title: 'Force',
          text: 'Colonel Saul',
          video: '424266154',
          animation: '',
        },
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [theorySubject, setTheorySubject] = useState(dataEssential[0].title);
  const [modalVisible, setModalVisible] = useState(false);

  const renderContent = ({ item }) => {
    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.container}>
          <VimeoVideo vimeoId={item.video} screenWidth={screenDimension.width} sounds />
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instruction}>{item.text}</Text>
        </View>
        <View style={styles.lines} />
      </>
    );
  };

  const displayTheory = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={dataEssential[selectedIndex].pages}
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id.toString()}
          renderItem={renderContent}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewTheory}>
            {dataEssential.map((topic, index) => (
              <TouchableHighlight
                style={styles.subjectButton}
                onPress={() => {
                  setSelectedIndex(index);
                  setTheorySubject(topic.title);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.subjectText}>{topic.title}</Text>
              </TouchableHighlight>
            ))}
            <TouchableHighlight
              style={styles.returnButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>{I18n.t('essentialPage.back')}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.displayTheory}>
        <TouchableHighlight
          style={styles.subjectModal}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View>
            <View style={styles.dropdown}>
              <Text style={{ ...styles.textStyle, color: theme.COLOR_PRIMARY }}>{theorySubject}</Text>
              <MaterialCommunityIcons name="chevron-down" color={theme.COLOR_PRIMARY} size={26} />
            </View>
            <View style={styles.lines} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.displayTheory}>
        <View>{displayTheory()}</View>
      </View>
    </View>
  );
};

export default EssentialPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  title: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  lines: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },

  titleContainer: {
    paddingVertical: 15,
  },
  instructionContainer: {
    paddingVertical: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  instruction: { fontSize: theme.FONT_SIZE_SMALL, paddingLeft: 10 },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalViewTheory: {
    width: '80%',
    height: '70%',
    justifyContent: 'space-around',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
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

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  returnButton: {
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    width: 120,
  },
  displayTheory: {
    alignItems: 'center',
    paddingTop: 20,
  },
  subjectModal: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderRadius: 5,
    padding: 10,
    width: '50%',
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subjectButton: {
    backgroundColor: theme.COLOR_SECONDARY_LIGHT,
    width: '100%',
    borderRadius: 2,
    padding: 10,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 1,
    borderColor: theme.COLOR_PRIMARY,
  },
  subjectText: {
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
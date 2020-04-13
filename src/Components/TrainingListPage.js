import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

const getTrainingDuration = trainingDrills => {
  const durationList = trainingDrills.map(({ durationInMinutes }) => durationInMinutes);
  return durationList.reduce((a, b) => a + b, 0);
};

const getTrainingNbPlayers = trainingDrills => {
  const nbPlayersList = trainingDrills.map(({ nbPlayers }) => nbPlayers);
  return Math.max(...nbPlayersList);
};

const mapStateToProps = state => {
  return {
    trainings: state.trainings,
    allDrills: state.drills,
  };
};

export const TrainingListPage = props => {
  const { allDrills, trainings, navigation } = props;

  const [data] = useState(trainings);

  const renderTraining = ({ item }) => {
    const { title, source, image, drills } = item;
    return (
      <TouchableOpacity style={list.item} onPress={() => navigation.navigate('TrainingPage', { training: item })}>
        <ImageBackground source={{ uri: image }} style={list.image} imageStyle={list.imageOpacity}>
          <Text style={list.imageText}>
            {getTrainingDuration(allDrills.filter(drill => drills.includes(drill.id)))} min
          </Text>
          <Text style={list.imageText}>
            {getTrainingNbPlayers(allDrills.filter(drill => drills.includes(drill.id)))}+ players
          </Text>
        </ImageBackground>
        <View style={list.contentContainer}>
          <Text style={list.source}>{source}</Text>
          <Text style={list.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.trainingListPage}>
      <Text style={list.counter}>{data.length} training sessions available</Text>
      <FlatList data={data} keyExtractor={item => item.id.toString()} renderItem={renderTraining} />
    </View>
  );
};

export default connect(mapStateToProps)(TrainingListPage);

const styles = StyleSheet.create({
  trainingListPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
});

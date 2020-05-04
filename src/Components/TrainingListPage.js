import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import { getTrainingDuration, getTrainingMinimalPlayersNumber } from './TrainingPage';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';
import * as list from '../styles/list.style';

const mapStateToProps = state => {
  return {
    trainings: state.trainings,
  };
};

export function getGoals(training) {
  return Array.from(new Set(training.drills.reduce((acc, { goals }) => acc.concat(goals), [])));
}

export const TrainingListPage = props => {
  const { trainings, navigation } = props;

  const [data] = useState(trainings);

  const renderTraining = ({ item }) => {
    const { title, source, image } = item;
    return (
      <TouchableOpacity style={list.item} onPress={() => navigation.navigate('TrainingPage', { training: item })}>
        <ImageBackground source={{ uri: image }} style={list.image} imageStyle={list.imageOpacity}>
          <Text style={list.imageText}>{getTrainingDuration(item)} min</Text>
          <Text style={list.imageText}>{getTrainingMinimalPlayersNumber(item)}+ players</Text>
        </ImageBackground>
        <View style={list.contentContainer}>
          <Text style={list.source}>{source}</Text>
          <Text style={list.title}>{title}</Text>
          <Text style={list.numberOfPlayers}>{getGoals(item).join(', ')}</Text>
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

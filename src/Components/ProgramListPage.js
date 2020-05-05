import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import Program from './programs/Program';

export const ProgramListPage = props => {
  const { programs, navigation } = props;

  return (
    <View style={styles.programPage}>
      <TouchableHighlight onPress={() => props.navigation.navigate('TrainingListPage')} style={styles.allTrainings}>
        <Text style={styles.allTrainingsText}>All trainings</Text>
      </TouchableHighlight>
      <FlatList
        data={programs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Program program={item} navigation={navigation} />}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.programs,
  };
};

export default connect(mapStateToProps)(ProgramListPage);

const styles = StyleSheet.create({
  programPage: {
    paddingVertical: 20,
    backgroundColor: theme.BACKGROUND_COLOR,
    height: '100%',
  },
  allTrainings: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  allTrainingsText: {
    fontSize: theme.FONT_SIZE_LARGE,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  incentive: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
});
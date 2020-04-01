import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import theme from '../styles/theme.style';

const Button = props => {
  const activeStyle = props.active ? styles.activeButton : {};
  return (
    <TouchableOpacity style={{ ...styles.button, ...activeStyle }} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Filters = props => {
  const [level, setLevel] = useState();

  const onLevelChange = pressedLevel => {
    const newLevel = pressedLevel === level ? undefined : pressedLevel;
    setLevel(newLevel);
  };

  useEffect(() => {
    const newData = level ? props.initialData.filter(drill => drill.level === level) : props.initialData;
    props.onFiltered(newData);
  }, [level]);

  return (
    <View style={styles.filters}>
      <Text style={styles.filterTitle}>Level</Text>
      <View style={styles.filter}>
        <Button title="Beginner" onPress={() => onLevelChange('beginner')} active={level === 'beginner'} />
        <Button title="Intermediate" onPress={() => onLevelChange('intermediate')} active={level === 'intermediate'} />
        <Button title="Advanced" onPress={() => onLevelChange('advanced')} active={level === 'advanced'} />
      </View>
      <Button title="Validate" onPress={props.onConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    height: '100%',
    alignItems: 'center',
  },
  filterTitle: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  filter: {
    flexDirection: 'row',
  },
  button: {
    borderColor: theme.BORDER_COLOR_BUTTON,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeButton: {
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON_ACTIVE,
  },
});

export default Filters;

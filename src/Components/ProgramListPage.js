import React, { useState } from 'react';
import { connect } from 'react-redux';

import { DrillTypes } from '../Fixtures/config';
import ProgramList from './programs/ProgramList';

export const ProgramListPage = (props) => {
  const { navigation, programs, activeProgram, completeTrainings, route } = props;

  let displayedPrograms;

  // Try to find programs from activeProgram
  if (activeProgram) {
    displayedPrograms = programs.filter((program) => program.type === activeProgram.type);
    if (activeProgram.type === DrillTypes.FITNESS)
      displayedPrograms = displayedPrograms.filter(
        (program) => program.equipmentLabel === activeProgram.equipmentLabel,
      );
  }
  // Find programs from params
  if (!displayedPrograms) {
    displayedPrograms = programs.filter((program) => program.type === route.params.type);
    if (route.params.type === DrillTypes.FITNESS)
      displayedPrograms = displayedPrograms.filter((program) => program.equipmentLabel === route.params.equipmentLabel);
  }

  return (
    <ProgramList
      navigation={navigation}
      displayedPrograms={displayedPrograms}
      activeProgram={activeProgram}
      completeTrainings={completeTrainings}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    programs: state.programs,
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(ProgramListPage);

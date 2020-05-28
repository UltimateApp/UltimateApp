import {
  DrillTypes,
  Intensities,
  Levels,
  FrisbeeGoals,
  FitnessGoals,
  SeasonTimings,
  EquipmentLabels,
  IllustrationType,
} from './config';

import I18n from '../utils/i18n';
import fr from './fr';
import en from './en';

let fixtures;
switch (I18n.currentLocale().slice(0, 2)) {
  case 'fr':
    fixtures = fr;
    break;
  case 'en':
    fixtures = en;
    break;
  default:
    fixtures = en;
}

export default fixtures;

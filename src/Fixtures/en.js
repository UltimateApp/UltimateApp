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

import animationSquare from './Animation/AnimationSquare';
import animationGoToTen from './Animation/AnimationGoToTen';
import throwingMachine from './Animation/ThrowingMachine';
import giveAndGo from './Animation/GiveAndGo';
import threePerson from './Animation/ThreePerson';
import redemption from './Animation/Redemption';
import dwarDuel from './Animation/DwarfDuel';
import backdoor from './Animation/Backdoor';
import powerReset from './Animation/PowerReset';
import resetOpen from './Animation/ResetOpen';
import upline from './Animation/Upline';
import around from './Animation/Around';
import resetBreak from './Animation/ResetBreak';
import ladder from './Animation/Ladder';
import giveAndGoRace from './Animation/GiveAndGoRace';
import blockTheUnder from './Animation/BlockTheUnder';
import blockEverything from './Animation/BlockEverything';
import defensiveUnder from './Animation/DefensiveUnder';
import defenseDeep from './Animation/DefenseDeep';
import threeVersusTwo from './Animation/ThreeVersusTwo';
import train from './Animation/Train';
import trainRace from './Animation/TrainRace';
import triangleDeath from './Animation/TriangleDeath';
import oneFakeTrain from './Animation/OneFakeTrain';
import twoFakeTrain from './Animation/TwoFakeTrain';
import breakSide from './Animation/BreakSide';
import goaltimate from './Animation/Goaltimate';
import bigEight from './Animation/BigEight';
import theM from './Animation/TheM';
import dishiesChain from './Animation/DishiesChain';
import dishiesPoach from './Animation/DishiesPoach';

const stabilityDrill = {
  id: 1,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Stability Off-season 1',
  image: 'https://zupimages.net/up/20/19/75s2.jpg',
  description:
    "It's the first session of our program, we start with stability drill to build solid base for the rest of the season",
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Kettlebell - Dumbbell',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.LEGS, FitnessGoals.UPPER],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 2,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 3,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 4,
      title: 'Single Arm Dumbbell Bench Press (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 5,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 6,
      title: 'Single Leg Vertical Jump (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 7,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 8,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 9,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 10,
      title: 'Single Arm Dumbbell Bench Press (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 11,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 12,
      title: 'Single Leg Vertical Jump (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 13,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 14,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 14,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 15,
      title: 'Single Arm Dumbbell Bench Press (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 16,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 17,
      title: 'Single Leg Vertical Jump (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 18,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 19,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 20,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 21,
      title: 'Single Arm Dumbbell Bench Press (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 22,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 23,
      title: 'Single Leg Vertical Jump (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
  ],
};

const strengthDrill = {
  id: 2,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Strenght Off-season 1',
  image: 'https://zupimages.net/up/20/19/qxbk.jpg',
  description: 'The first strength practice of the season',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.FULL,
  equipment: 'Kettlebell - Dumbbell - Tow bar',
  durationInMinutes: 15,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 2,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      sounds: false,
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 3,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 4,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 5,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 6,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      sounds: false,
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 7,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 8,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 9,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 10,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      sounds: false,
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 11,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 12,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
  ],
};

const speedDrill = {
  id: 3,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Speed Off-season 1',
  image: 'https://zupimages.net/up/20/19/vt6g.jpg',
  description:
    "It's the first session of our program, we start with speed drill to build solid base for the rest of the season",
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 30,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Dynamic Marchs',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764988',
      sounds: false,
      repetition: '2',
      rest: 'Walk back',
      instruction: '',
    },
    {
      id: 2,
      title: 'Wall Fire',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764961',
      sounds: false,
      repetition: '3',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 3,
      title: 'A Skips - 15 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406760709',
      sounds: false,
      repetition: '3',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 4,
      title: 'B Skips - 15 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406760726',
      sounds: false,
      repetition: '3',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 5,
      title: 'Bounding - 25 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764918',
      sounds: false,
      repetition: '2',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 6,
      title: 'Sprint - 10 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      sounds: false,
      repetition: '4',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 7,
      title: 'Sprint - 30 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      sounds: false,
      repetition: '4',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 8,
      title: 'Sprint - 50 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      sounds: false,
      repetition: '3',
      rest: '90 s',
      instruction: '',
    },
  ],
};

const conditioningDrill = {
  id: 4,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Conditioning Off-season 1',
  image: 'https://zupimages.net/up/20/19/kj0f.jpg',
  description: 'Try to follow her for your conditioning',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Follow her',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406556796',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const warmupGameDrill = {
  id: 5,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Warm-up Game ready',
  image: 'https://zupimages.net/up/20/19/f2bd.jpg',
  description: 'Try to follow him for your warm-up',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Follow him',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '413628757',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const warmupDrill = {
  id: 6,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Warm-up Ultimate',
  image: 'https://zupimages.net/up/20/19/va5f.jpg',
  description: 'Try to follow him for your warm-up',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FitnessGoals.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Ultimate warm-up',
      illustrationType: IllustrationType.VIMEO,
      sounds: true,
      illustrationSource: '415430252',
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const conditioningFullbodyDrill = {
  id: 7,
  type: DrillTypes.FITNESS,
  author: 'Pamela Reif',
  title: 'Conditioning Full-body',
  image: 'https://zupimages.net/up/20/19/kj0f.jpg',
  description: 'Try to follow her for your conditioning',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Follow her',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '416604913',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const basicThrowsDrill = {
  id: 1001,
  type: DrillTypes.FRISBEE,
  author: 'Rowan McDonnell',
  title: 'Basic Throws',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: 'Basic drills to learn how to throw',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc for 2 players',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Throwing Machine',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: throwingMachine,
      repetition: '',
      rest: '',
      instruction: 'With a partner, the players throw backhands and forehands for 5 minutes.',
    },
    {
      id: 2,
      title: 'The Throwing Olympics Ladder',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: ladder,
      repetition: '',
      rest: '',
      instruction:
        'Players stand in two lines facing a partner and pass back and forth. The coach decides what throw they do. If the disc falls, the pair moves to the right most spot in the line. The pair at the left when the time is over wins!',
    },
  ],
};

const breakDrill = {
  id: 1023,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: 'Cuts to the Break Side',
  image: 'https://zupimages.net/up/20/19/83fx.jpg',
  description: 'Cutting from the open side to the break side. The drill is both for the thrower and the mark.',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '6 discs - 2 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.BREAK, FrisbeeGoals.MARK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Open to Break',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakSide,
      instruction:
        'Two lines of players face each other, about 30 meters apart. A force is decided for the exercise. At the front of one line is a player with a disc, and a mark maintaining the force. The front of the other line cuts towards the thrower on the open side, and when the thrower fakes, cuts horizontally from the open side towards the break side. The thrower then must break the mark to throw to the cutter. The thrower then makes the next cut, towards the other side. The mark becomes a thrower, and the next in line becomes the mark. Players in line should have discs.',
    },
    {
      id: 2,
      title: 'Great Wall of China',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakSide,
      instruction:
        "If you want to work on improving the mark, you may insist so that the defender may not be broken twice in a row with the same pass. You want them to identify the thrower's favorite throw and block it",
    },
  ],
};

const threeColumnsLongDrill = {
  id: 1025,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: '3 columns long shot',
  image: 'https://zupimages.net/up/20/19/330p.jpg',
  description: 'Basic long passes drill. You want your players to alternate between throwing, running and passing',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc for 3 players - 3 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '90s',
      instruction:
        "1- The cutter run as fast as possible then he claps the second mate's hand. \n 2- Cut under and long ",
    },
  ],
};

const twoColumnsLongDrill = {
  id: 1026,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: '2 columns with defense',
  image: 'https://zupimages.net/up/20/19/fvm4.jpg',
  description:
    'Basic long passes drill. You want your players to alternate between throwing, running and passing, with offense and defense',
  minimalPlayersNumber: 18,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc for 3 players - 3 cones',
  durationInMinutes: 30,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '90s',
      instruction: '',
    },
  ],
};

const treasureHuntDrill = {
  id: 1009,
  type: DrillTypes.FRISBEE,
  author: 'PUC Ultimate',
  title: 'Treasure Hunt',
  image: 'https://zupimages.net/up/20/19/z7lq.jpg',
  description:
    '2 teams are fighting. The objective is to bring the 5 Frisbees back into a square delimited by the cones.\nPlayers are not allowed to walk with the Frisbee. When a Frisbee falls or is intercepted, it must be brought back to the starting point by the attacking team. The first team that "saves" all its frisbees wins.',
  minimalPlayersNumber: 10,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 discs - 10 cones',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Basic Version',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'Goals: Bringing all the disc in the square. \nA player can play in offense on his side or go on the other side to play defense.\nIf there is a turnover, the frisbee goes back to the starting line.\nFirst team that saves all the discs win!',
    },
  ],
};

const kyeDrill = {
  id: 1010,
  type: DrillTypes.FRISBEE,
  author: 'Kye',
  title: '3 vs 2',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: 'The team with two players stays on defense if they successfully force a turnover',
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threeVersusTwo,
      repetition: '',
      rest: '',
      instruction:
        "The defense forces middle. The offensive cutters are only allowed to make two cuts to get the disc. They may either catch a continuation pass, or cutting under. The goal of the drill is for the defense to learn how to quickly set up a mark and to use their bodies and positioning downfield to control the offense's cuts.",
    },
  ],
};

const bigEightDrill = {
  id: 1011,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'The big 8',
  image: 'https://zupimages.net/up/20/19/5209.jpg',
  description: 'Making a pass circuit where each player will try to work on their throws',
  minimalPlayersNumber: 16,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 discs - 8 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: bigEight,
      repetition: '',
      rest: '',
      instruction:
        'Here is the rotation: \nHandler in the middle \nReset going for the backdoor \nFirst of the stack following in the break \nLast of the stack going long \nSame but in opposite position ',
    },
  ],
};

const trainDrill = {
  id: 1002,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'The Train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'This is a drill which works on the flow of a vertical stack',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Normal train',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: train,
      repetition: '',
      rest: '',
      instruction:
        'Set up a vertical stack of 5 cutters with a thrower and a dump and decide on a force. The last cutter in the stack cuts deep while looking at the thrower. When the thrower fakes, the receiver cuts back in on the open side and receives the disc. The next player in the stack must begin their deep cut so as to be hitting full speed when the previous cutter catches the disc. The rest of the stack re-positions farther downfield, the thrower becomes the dump, the previous dump becomes the front of the stack. Repeat for the length of the field.',
    },
    {
      id: 2,
      title: 'Racing train',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: trainRace,
      repetition: '',
      rest: '',
      instruction:
        'Racing train: Divide into two teams. Begin in the same place and complete the train as a race. Decide on a set number of passes, the team that completes this many passes first wins!',
    },
  ],
};

const goaltimateDrill = {
  id: 1004,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Goaltimate',
  image: 'https://zupimages.net/up/20/19/gce7.jpg',
  description:
    'The object is to score points by throwing a disc to a teammate in a small scoring area, through a large semicircular hoop called the goal.',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 10 cones or 1 goal',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Goaltimate rules',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: goaltimate,
      repetition: '',
      rest: '',
      instruction:
        '4 on 4 \nStall count of 5 \nWhenever a turnover happens, the new offensive team must ‘clear’ the disc by taking it into the clear box, and can then attack the goal.\nOne point for a completed pass that travels through the hoop and is caught in the end zone by your teammate',
    },
    {
      id: 2,
      title: 'Illustration',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '416849035',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const giveAndGoDrill = {
  id: 1013,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Give-N-Go',
  image: 'https://zupimages.net/up/20/19/s9fe.jpg',
  description: 'Follow your disc as fast as possible',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 12 cones',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Give-N-Go',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: giveAndGo,
      repetition: '',
      rest: '',
      instruction: 'Try to do this give and go drill as fast as possible. Make sure not to travel.',
    },
    {
      id: 2,
      title: 'Make It Count',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: giveAndGoRace,
      repetition: '',
      rest: '',
      instruction: 'A race between 2 teams. First to 25 wins!',
    },
  ],
};

const aussieDrill = {
  id: 1008,
  type: DrillTypes.FRISBEE,
  author: 'Matt Hill',
  title: 'Aussie games',
  image: 'https://zupimages.net/up/20/19/78g2.png',
  description: 'You can run with the disc',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '4 discs - 20 cones',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.COMMUNICATION, FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        '2 teams plays against each others.There are 2 territories for each team and they play with 4 discs.\nTo score a point, a player has to bring a disc in one of the endzone of the opponent team. A player can run with a disc. If a player, get touch in the territory of the other team or the disc is intercepted or touch the ground, he looses the possession. In his territory, he is invincible. First team to 5 wins! ',
    },
  ],
};

const bolognaMDrill = {
  id: 1024,
  type: DrillTypes.FRISBEE,
  author: 'Bologna',
  title: 'The M',
  image: 'https://zupimages.net/up/20/19/akuy.jpg',
  description: 'Follow the M',
  minimalPlayersNumber: 10,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '5 disc - 6 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: theM,
      repetition: '',
      rest: '',
      instruction: 'Working on the reset from the front of the stack',
    },
  ],
};

const goToTenDrill = {
  id: 1014,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Go to 10',
  image: 'https://zupimages.net/up/20/19/rcyt.jpg',
  description: 'First team with 10 completes passes win',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 4 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.PLAY, FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationGoToTen,
      repetition: '',
      rest: '',
      instruction: 'First team with 10 completes passes win. Stall to 6.',
    },
  ],
};

const endzoneDameDrill = {
  id: 1015,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Endzone Game',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Game to 5. If you score, your team stay in offense',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 4 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.PLAY, FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Endzone Game',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'Game to 5. If you score, your team stay in offense.\nThe player who caught the disc in the endzone has to keep the disc to start the next offense ',
    },
    {
      id: 2,
      title: 'Endzone finition',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: 'Everybody start behing the disc.\nGame to 5',
    },
  ],
};

const bulldogDrill = {
  id: 1016,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'British Bulldog',
  image: 'https://zupimages.net/up/20/19/tf79.jpg',
  description:
    'The bulldogs stand in the middle of the play area. All remaining players stand at one end of the area (home). The aim of the game is to run from one end of the field of play to the other, without being caught by the bulldogs. When a player is caught, they become a bulldog themselves.',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '4 cones',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'The bulldogs try to catch the remaining players. The aim of the game is to run from one end of the field of play to the other, without being caught.\nWhen a player is caught, he must hold hands with one another and form a line of 3 bulldogs.\n If there is more than 3 bulldogs, they split in more than one line',
    },
  ],
};

const menageATroisDrill = {
  id: 1003,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Three-person drill',
  image: 'https://zupimages.net/up/20/19/ai3z.jpg',
  description: 'The thrower tries to reach the target by using any fake possible',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.BREAK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Flat mark',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threePerson,
      repetition: '',
      rest: '',
      instruction: 'The defensive player does a flat mark, five times before switching roles.',
    },
    {
      id: 2,
      title: 'Redemption',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: redemption,
      repetition: '',
      rest: '',
      instruction:
        'The set-up is the same as three-person drill, but with lines behind the thrower and receiver. The order is receiving the disc, throwing, and then following the disc to mark. After marking, the player goes to the back of the line. The thrower must throw a pass that the receiver can catch within one pivot. If they do not, they must then force the next thrower to throw a bad pass, or else they are out of the game! The game continues until one player wins.',
    },
  ],
};

const dwarfDuelDrill = {
  id: 1012,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Dwarf Duel',
  image: 'https://zupimages.net/up/20/19/3m3k.jpg',
  description: 'Duel without jumping, all about positioning',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dwarDuel,
      repetition: '',
      rest: '',
      instruction:
        'The coach (or an experienced player) throws hucks.\nWhen the offensive player starts to run, the defensive player can move. Neither player can jump to catch the disc',
    },
  ],
};

const dishieChainDrill = {
  id: 1017,
  type: DrillTypes.FRISBEE,
  author: 'Mooncatcher',
  title: 'Dishie Chain',
  image: 'https://zupimages.net/up/20/19/stdq.jpg',
  description: 'Basic long passes drill. You want your players to alternate between throwing, running and passing',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Focus on Offense',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dishiesChain,
      repetition: '',
      rest: '',
      instruction:
        '2 columns: \n2 players from the same column go in direction of the thrower. When of them receive the disc.\n The thrower is looking ot make a dishie when the other cutter is going long.\n The cutter catching the long throw becomes the new first thrower for the other column',
    },
    {
      id: 2,
      title: 'Adding a poach',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dishiesPoach,
      repetition: '',
      rest: '',
      instruction: 'Add a defensive player to work on the poach with a side stack',
    },
  ],
};

const breakDanceDrill = {
  id: 1018,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Break Dance',
  image: 'https://zupimages.net/up/20/19/agsd.jpg',
  description: 'Making a christmas tree in the break',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '5 discs - 10 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
  steps: [
    {
      id: 1,
      title: 'Break continuity',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'The cutter try to work on their timing to start their almort horizontal cut. The player goes to the next cones after his throws ',
    },
    {
      id: 2,
      title: 'The race',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'The 2 teams are racing. \nWhen the disc reach the last player, he has to run as fast as possible to start a new serie. \nFirst team that make the complete rotation win!',
    },
  ],
};

const triangleOfDeathdrill = {
  id: 1019,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'The Triangle of Death',
  image: 'https://zupimages.net/up/20/19/kmlc.jpg',
  description: 'Throwing 10 hucks in a row as far and as fast as possible',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 disc - 3 cones',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: triangleDeath,
      repetition: '',
      rest: '',
      instruction:
        'Set up a small triangle of cones about 3 meters apart, pointing downfield. One thrower begins on one side. One player stands about 3 meters behind the triangle with a large pile of discs. The rest of the team sets up in a vertical stack (this can be more than 5 players).\n\nThe thrower cuts to the peak of the triangle and then to the other side, receives a dishy pass from player behind the triangle, and throws a huck to a cutter from the back of the stack. The thrower immediately remakes their cut in the opposite direction, receiving a dishy and throwing a huck. Repeat either 10 times, or until all cutters have received a pass.',
    },
  ],
};

const chevronDrill = {
  id: 1022,
  type: DrillTypes.FRISBEE,
  author: 'Author',
  title: 'Chevron Passes',
  image: 'https://zupimages.net/up/20/19/1y4x.jpg',
  description: 'Cutting with good timing; throwing immediately after catching',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.CATCH, FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const trainOfFakeDrill = {
  id: 1020,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'The Fake Train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'This is a drill which works on the flow of a vertical stack',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Normal train',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: train,
      repetition: '',
      rest: '',
      instruction:
        'Set up a vertical stack of 5 cutters with a thrower and a dump and decide on a force. The last cutter in the stack cuts deep while looking at the thrower. When the thrower fakes, the receiver cuts back in on the open side and receives the disc. The next player in the stack must begin their deep cut so as to be hitting full speed when the previous cutter catches the disc. The rest of the stack re-positions farther downfield, the thrower becomes the dump, the previous dump becomes the front of the stack. Repeat for the length of the field.',
    },
    {
      id: 2,
      title: 'With One fake',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: oneFakeTrain,
      repetition: '',
      rest: '',
      instruction:
        'Set up the normal train drill. This time, however, the thrower can choose to make a second fake while the cutters is cutting in. If they do, the cutters clears to the second position in the stack (from the front), the thrower looks at the dump, the dump cuts upline and receives a pass. The drill continues.',
    },
    {
      id: 3,
      title: 'With two fakes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: twoFakeTrain,
      repetition: '',
      rest: '',
      instruction:
        'Set up the One Fake Train Drill. This time, when the reset cuts upline, the thrower can again fake. If they do, the front of the stack cuts back and receives a dump in the reset position. The drill continues.',
    },
  ],
};

const resetOpenDrill = {
  id: 1005,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Open',
  image: 'https://zupimages.net/up/20/19/tzk3.jpg',
  description: 'Cutting with good timing; throwing immediately after catching',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'The Backdoor',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: backdoor,
      repetition: '',
      rest: '',
      instruction:
        "The thrower stands with a defender setting a force, and the reset handler sets up at a 45° angle behind the thrower, on the open side.\nThe thrower begins by looking up field, before turning and making eye contact with the reset. When eye contact is established, the reset makes a backdoor cut and receives a pass.\nThe disc is then sent back to the thrower, the thrower's defender switches the force, and the cut is made again in the opposite direction.",
    },
    {
      id: 2,
      title: 'Power Reset',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: powerReset,
      repetition: '',
      rest: '',
      instruction:
        'The set-up is the same as in "The Backdoor." This time, when eye contact is made, the reset cuts up-field and receives a pass in front of them.',
    },
    {
      id: 3,
      title: 'Game Situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: resetOpen,
      repetition: '',
      rest: '',
      instruction:
        'The set-up is the same as in "the Backdoor." The defense on the reset is real, and the reset must choose one of the two directions to cut to receive a pass. The reset is not allowed more than one juke. Each team does the same number of attempts, whichever team completes the most passes wins!',
    },
  ],
};

const resetBreakDrill = {
  id: 1006,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Break',
  image: 'https://zupimages.net/up/20/19/w90f.jpg',
  description: 'Cutting with good timing; throwing immediately after catching',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'The 45° Upline',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: upline,
      repetition: '',
      rest: '',
      instruction:
        'A thrower holds a disc with a defender who marks with a force. The reset handler begins in line horizontally with the thrower, on the break side.\nThe reset moves slowly upfield until they are at a 45° from the thrower. When the thrower makes eye contact, the reset makes a decisive upline cut.\nThe disc is then sent back to the thrower, and exercise is repeated with the opposite force.',
    },
    {
      id: 2,
      title: 'The Easy Reset',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: around,
      repetition: '',
      rest: '',
      instruction:
        'Same set-up as "The 45° Upline." When eye contact is made, the thrower throws around the mark with the goal that the reset catches about where they had started before moving up field. The reset only moves once the pass is thrown. Switch sides.',
    },
    {
      id: 3,
      title: 'Game Situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: resetBreak,
      repetition: '',
      rest: '',
      instruction:
        'Same set-up as "The 45° Upline." The defense on the reset is real, and the reset must choose one of the two directions to cut to receive a pass. The reset is not allowed more than one juke. Each team does the same number of attempts, whichever team completes the most passes wins!',
    },
  ],
};

const youShallNotPassDrill = {
  id: 1007,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'You Shall Not Pass',
  image: 'https://zupimages.net/up/20/19/90z6.jpg',
  description: 'Using your body to prevent your opponent from getting to the disc',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 4 cones',
  durationInMinutes: 12,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Blocking the Under',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockTheUnder,
      repetition: '',
      rest: '',
      instruction:
        'Set up both an offense line and a defense line. One attacker and one defender each run to the box then cut deep at the same time. The offensive player must cut back towards the thrower to try to catch the disc in the box, they are only allowed to change their direction this one time. The defender must position themself so that the offense cannot pass them to return to the box. The thrower may only throw to under cuts.',
    },
    {
      id: 2,
      title: 'Blocking Everything',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockEverything,
      repetition: '',
      rest: '',
      instruction:
        'The same exercise as "Blocking the Under," but the thrower is allowed to throw both deep and under.',
    },
    {
      id: 3,
      title: 'Make It Count',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockEverything,
      repetition: '',
      rest: '',
      instruction:
        'Divide into two teams and do the "Block Everything" drill. This time, if the pass is not completed, the defense gets a point. The first team to 10 wins!',
    },
  ],
};

const defensePositionDrill = {
  id: 1021,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Defense Positioning',
  image: 'https://zupimages.net/up/20/19/zigu.jpg',
  description: "Maintaining good positioning and adapting to the team's defense",
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc - 5 cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Positioning Under',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: defensiveUnder,
      repetition: '',
      rest: '',
      instruction:
        'A thrower stands with a mark and a force. An offensive receiver begins at any cone, with a defensive player positioning at a 45° angle on the open side between the receiver and the thrower. The receiver runs between the cones in any order, and the defensive player must maintain their positioning relative to the receiver at all times.',
    },
    {
      id: 2,
      title: 'Positioning Deep',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: defenseDeep,
      repetition: '',
      rest: '',
      instruction:
        'The drill is the same as "Positioning Under", except that the defensive player positions downfield of the receiver.',
    },
  ],
};

const normalGame = {
  id: 2001,
  type: DrillTypes.GAME,
  author: 'Martin',
  title: '7v7 game',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "It's always interesting to have a time to play in game conditions towards the end of a training. That's the perfect moment to use what players have learnt during the training. Keep in mind that players always FORGET everything when they start playing, so remind them what we're to concentrate on",
  minimalPlayersNumber: 14,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.CORE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: '',
    },
  ],
};

const game3v3 = {
  id: 2002,
  type: DrillTypes.GAME,
  author: 'Martin',
  title: '3v3 games',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "The perfect setup if you have a LOT of players or want your players to touch a lot of frisbees in a short time. This can be quite exhausting so don't forget to set breaks every 5 to 10 minutes.",
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: '',
    },
  ],
};

const longShotGame = {
  id: 2003,
  type: DrillTypes.GAME,
  author: 'Martin',
  title: 'Hucks oriented game',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    'Just a classical game on the whole field. Only exception: a team scores 2 points if there was a successful long shot on the offense that lead to scoring!',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.PLAY, FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: '2 points if there was a successful long shot on the offense that lead to scoring!',
    },
  ],
};

const dumpSwingTraining = {
  id: 1,
  title: 'Dump & Swing',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'This training session aims at make your team better at Dump & Swing. blabla bla bla bla',
  drills: [warmupDrill],
};

const firstWeekFitnessTraining = {
  id: 2,
  title: 'First Week Fitness',
  image: 'https://zupimages.net/up/20/19/9fcj.jpg',
  description: 'This is the first week of the Off-season program',
  drills: [stabilityDrill, strengthDrill, speedDrill, conditioningDrill],
};

const coed2MarkTraining = {
  id: 3,
  title: 'Build your Defense',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description:
    "This training session aims at practicing your mark skills. Don't be broken to easily, generate dangerous passes",
  drills: [warmupGameDrill, kyeDrill, breakDrill, normalGame],
};

const coed2LongTraining = {
  id: 4,
  title: 'Long Shot is Coming',
  image: 'https://zupimages.net/up/20/19/aapn.jpg',
  description: 'Practice your long skills.',
  drills: [warmupGameDrill, threeColumnsLongDrill, longShotGame],
};

const coed2Long2Training = {
  id: 5,
  title: 'Long is your weapon',
  image: 'https://zupimages.net/up/20/19/v8f4.jpg',
  description: 'Practicie your long skills.',
  drills: [warmupDrill, threeColumnsLongDrill, twoColumnsLongDrill, longShotGame],
};

const firstChildTraining = {
  id: 6,
  title: 'First Time',
  image: 'https://zupimages.net/up/20/19/a7io.png',
  description: 'Training will allow the players to learn the basics of ultimate while having fun',
  drills: [warmupDrill, basicThrowsDrill, dwarfDuelDrill, game3v3],
};

const secondChildTraining = {
  id: 7,
  title: 'Defense Basics',
  image: 'https://zupimages.net/up/20/19/dgwo.jpg',
  description: 'Training will allow the players to learn the basics of ultimate while having fun',
  drills: [warmupDrill, aussieDrill, menageATroisDrill, game3v3],
};

const thirdChildTraining = {
  id: 8,
  title: 'Treasure Hunt',
  image: 'https://zupimages.net/up/20/19/c9i6.jpg',
  description: 'Help players learn the basics of ultimate while having fun',
  drills: [warmupDrill, bulldogDrill, goToTenDrill, treasureHuntDrill, game3v3],
};

const secondWeekFitnessTraining = {
  id: 9,
  title: 'Second Week Fitness',
  image: 'https://zupimages.net/up/20/19/9fcj.jpg',
  description: "This is the second week of the season. It's time to work on your conditioning",
  drills: [conditioningFullbodyDrill, conditioningDrill],
};

const secondInintiationAdultTraining = {
  id: 10,
  title: 'Defense & Longs',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Players will work on defense and long throws',
  drills: [warmupDrill, menageATroisDrill, threeColumnsLongDrill, normalGame],
};

const thirdInintiationAdultTraining = {
  id: 11,
  title: 'Adapt to the Field',
  image: 'https://zupimages.net/up/20/19/hrqz.jpg',
  description: 'Players will learn to adapt to the size of the field',
  drills: [warmupDrill, goaltimateDrill, triangleOfDeathdrill, normalGame],
};

const initiationVerticalTraining = {
  id: 12,
  title: 'Vertical Stack',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'Make your team better at Vertical Stack',
  drills: [warmupDrill, trainDrill, bigEightDrill, normalGame],
};

const secondVerticalTraining = {
  id: 13,
  title: 'The Break Power',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'Make your team better at Vertical Stack',
  drills: [warmupDrill, resetBreakDrill, trainOfFakeDrill, game3v3, normalGame],
};

const defenseBaseTraining = {
  id: 14,
  title: 'Defense Positioning',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: 'Practice your defense.',
  drills: [warmupGameDrill, defensePositionDrill, youShallNotPassDrill, breakDrill, normalGame],
};

export default {
  favoriteDrills: [],
  completeTrainings: [],
  drills: [
    // Fitness
    stabilityDrill,
    strengthDrill,
    speedDrill,
    conditioningDrill,
    warmupGameDrill,
    warmupDrill,
    conditioningFullbodyDrill,
    // Frisbee
    basicThrowsDrill,
    trainDrill,
    menageATroisDrill,
    goaltimateDrill,
    resetOpenDrill,
    resetBreakDrill,
    youShallNotPassDrill,
    aussieDrill,
    treasureHuntDrill,
    kyeDrill,
    bigEightDrill,
    dwarfDuelDrill,
    giveAndGoDrill,
    goToTenDrill,
    endzoneDameDrill,
    bulldogDrill,
    dishieChainDrill,
    breakDanceDrill,
    triangleOfDeathdrill,
    trainOfFakeDrill,
    defensePositionDrill,
    chevronDrill,
    breakDrill,
    bolognaMDrill,
    threeColumnsLongDrill,
    twoColumnsLongDrill,

    // Games
    normalGame,
    game3v3,
    longShotGame,
  ],
  trainings: [
    dumpSwingTraining,
    firstWeekFitnessTraining,
    coed2MarkTraining,
    coed2LongTraining,
    coed2Long2Training,
    firstChildTraining,
    secondChildTraining,
    thirdChildTraining,
    secondWeekFitnessTraining,
    secondInintiationAdultTraining,
    thirdInintiationAdultTraining,
    initiationVerticalTraining,
    secondVerticalTraining,
    defenseBaseTraining,
  ],
  programs: [
    {
      id: 1,
      title: 'Initiation U13',
      trainings: [firstChildTraining, secondChildTraining, thirdChildTraining],
    },
    {
      id: 2,
      title: 'Initiation Adult',
      trainings: [firstChildTraining, secondInintiationAdultTraining, thirdInintiationAdultTraining],
    },
    {
      id: 3,
      title: 'Fitness Bloc',
      trainings: [firstWeekFitnessTraining, secondWeekFitnessTraining],
    },
    {
      id: 4,
      title: 'Vertical Stack',
      trainings: [initiationVerticalTraining, secondVerticalTraining, dumpSwingTraining],
    },
    {
      id: 5,
      title: 'Long Throws',
      trainings: [coed2LongTraining, coed2Long2Training],
    },
    {
      id: 6,
      title: 'Strong Defense',
      trainings: [defenseBaseTraining, coed2MarkTraining],
    },
  ],
};

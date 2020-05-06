import AnimationMenageATrois from './AnimationMenageATrois';
import animationSquare from './AnimationSquare';

export const DrillTypes = {
  FITNESS: 'fitness',
  TECHNICAL: 'technical',
  GAME: 'game',
};

export const Intensities = {
  LOW: 'Low',
  MODERATE: 'Moderate',
  HIGH: 'High',
};

export const GoalsFrisbee = {
  DEFENSE: 'Defense',
  MARK: 'Mark',
  HANDLING: 'Handling',
  CUTTING: 'Cutting',
  THROWING: 'Throwing',
  BREAK: 'Breaking the mark',
  COMMUNICATION: 'Communication',
  CATCH: 'Catch',
  PLAY: 'Playing time',
};

export const GoalsFitness = {
  LEGS: 'Legs',
  UPPER: 'Upper',
  FULL_BODY: 'Full body',
  CORE: 'Core',
  CONDITIONING: 'Conditioning',
  WARM_UP: 'Warm-up',
};

export const Levels = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

export const SeasonTimings = {
  OFF_SEASON: 'Off-season',
  PRE_SEASON: 'Pre-season',
  IN_SEASON: 'In-season',
  ANYTIME: 'Anytime',
};

export const EquipmentLabels = {
  NONE: 'None',
  BASIC: 'Basic',
  FULL: 'Full',
};

export const IllustrationType = {
  VIMEO: 'vimeo',
  YOUTUBE: 'youtube',
  ANIMATION: 'animation',
};

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
  goals: [GoalsFitness.LEGS, GoalsFitness.UPPER],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 2,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 3,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 4,
      title: 'Single Arm Dumbbell Bench Press (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 5,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 6,
      title: 'Single Leg Vertical Jump (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 7,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 8,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 9,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 10,
      title: 'Single Arm Dumbbell Bench Press (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 11,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 12,
      title: 'Single Leg Vertical Jump (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 13,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 14,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 14,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 15,
      title: 'Single Arm Dumbbell Bench Press (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 16,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 17,
      title: 'Single Leg Vertical Jump (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 18,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 19,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 20,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 21,
      title: 'Single Arm Dumbbell Bench Press (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 22,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 23,
      title: 'Single Leg Vertical Jump (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
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
  goals: [GoalsFitness.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 2,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 3,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 4,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 5,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 6,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 7,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 8,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 9,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 10,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 11,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 12,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
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
  goals: [GoalsFitness.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Dynamic Marchs',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764988',
      repetition: '2',
      rest: 'Walk back',
      instruction: '',
    },
    {
      id: 2,
      title: 'Wall Fire',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764961',
      repetition: '3',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 3,
      title: 'A Skips - 15 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406760709',
      repetition: '3',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 4,
      title: 'B Skips - 15 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406760726',
      repetition: '3',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 5,
      title: 'Bounding - 25 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764918',
      repetition: '2',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 6,
      title: 'Sprint - 10 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      repetition: '4',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 7,
      title: 'Sprint - 30 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      repetition: '4',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 8,
      title: 'Sprint - 50 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
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
  goals: [GoalsFitness.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Follow her',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406556796',
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
  goals: [GoalsFitness.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Follow him',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '413628757',
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
  description: 'Try to follow her for your conditioning',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [GoalsFitness.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Ultimate warm-up',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '415430252',
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const chevronDrill = {
  id: 1001,
  type: DrillTypes.TECHNICAL,
  author: 'Author',
  title: 'Chevron passes',
  image: 'https://zupimages.net/up/20/19/1y4x.jpg',
  description: 'Cutting in the right timing, catching and passing straight away',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.CUTTING, GoalsFrisbee.CATCH, GoalsFrisbee.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '90s',
      instruction: 'Step 1: Introduce the notion of continuity',
    },
  ],
};

const markDrill = {
  id: 1002,
  type: DrillTypes.TECHNICAL,
  author: 'Martin',
  title: '3 people mark',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: '',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.DEFENSE, GoalsFrisbee.BREAK],
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
      instruction: 'Step 1: Introduce the notion of continuity',
    },
  ],
};

const breakDrill = {
  id: 1003,
  type: DrillTypes.TECHNICAL,
  author: 'Martin',
  title: 'Cuts to the break side',
  image: 'https://zupimages.net/up/20/19/83fx.jpg',
  description: 'Cut from the open side to the break side. The thrower and the mark are working',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Cones if you have some (not mandatory)',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.BREAK, GoalsFrisbee.MARK],
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
      instruction: 'Step 1: Introduce the notion of continuity',
    },
  ],
};

const lDrill = {
  id: 1004,
  type: DrillTypes.TECHNICAL,
  author: 'Martin',
  title: 'L drill',
  image: 'https://zupimages.net/up/20/19/tz63.jpg',
  description: 'Or is it Hell drill?\nTo practice in groups of 8 to 14 players',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc per player, 3 cones',
  durationInMinutes: 30,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING],
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
      instruction: 'Step 1: Introduce the notion of continuity',
    },
  ],
};

const threeColumnsLongDrill = {
  id: 1005,
  type: DrillTypes.TECHNICAL,
  author: 'Martin',
  title: '3 columns long shot',
  image: 'https://zupimages.net/up/20/19/330p.jpg',
  description: 'Basic long passes drill. You want your players to alternate between throwing, running and passing',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: 'around 1 disc for 3 players, 3 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING],
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
      instruction: 'Step 1: Introduce the notion of continuity',
    },
  ],
};

const twoColumnsLongDrill = {
  id: 1006,
  type: DrillTypes.TECHNICAL,
  author: 'Martin',
  title: '2 columns with defense',
  image: 'https://zupimages.net/up/20/19/fvm4.jpg',
  description:
    'Basic long passes drill. You want your players to alternate between throwing, running and passing, with offense and defense',
  minimalPlayersNumber: 18,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: 'around 1 disc for 3 players, 3 cones',
  durationInMinutes: 30,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.THROWING],
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
      instruction: 'Step 1: Introduce the notion of continuity',
    },
  ],
};

const treasureHuntDrill = {
  id: 1007,
  type: DrillTypes.TECHNICAL,
  author: 'PUC Ultimate',
  title: 'Treasure hunt',
  image: 'https://zupimages.net/up/20/19/z7lq.jpg',
  description:
    '2 teams are fighting. The objective is to bring the 5 Frisbees back into a square delimited by the cones. Players are not allowed to walk with the Frisbee. When a Frisbee falls or is intercepted, it must be brought back to the starting point by the attacking team. The first team that "saves" all its frisbees wins.',
  minimalPlayersNumber: 10,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 discs - 10 cones',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [GoalsFrisbee.PLAY],
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
      instruction: 'If the disc get intercept, it will come back to the line',
    },
    {
      id: 2,
      title: 'Version more Fun',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: menageATroisDrill,
      repetition: '',
      rest: '',
      instruction: 'Version more Fun instruction',
    },
  ],
};

const kyeDrill = {
  id: 1008,
  type: DrillTypes.TECHNICAL,
  author: 'KYE',
  title: '3 vs 2',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: 'The team with 2 players stay in defense if they succeed to make the defense',
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.DEFENSE, GoalsFrisbee.PLAY, GoalsFrisbee.COMMUNICATION],
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

const bigEightDrill = {
  id: 1009,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'The big 8',
  image: 'https://zupimages.net/up/20/19/5209.jpg',
  description: 'Making a pass circuit where each player will try to work on their throws',
  minimalPlayersNumber: 16,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 Discs - 8 Cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING],
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
      instruction: '',
    },
  ],
};

const trainDrill = {
  id: 1010,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'The train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'Drill where you teach the flow with a vertical stack',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.CUTTING, GoalsFrisbee.COMMUNICATION],
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
      instruction: '',
    },
  ],
};

const goaltimateDrill = {
  id: 1011,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Goaltimate',
  image: 'https://zupimages.net/up/20/19/gce7.jpg',
  description: 'Frisbee game similar to basket-ball',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 10 Cones or 1 Goal',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.DEFENSE, GoalsFrisbee.PLAY, GoalsFrisbee.PLAY],
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
      instruction: '',
    },
  ],
};

const middleForceDrill = {
  id: 1012,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Middle Force',
  image: 'https://zupimages.net/up/20/19/q6jw.jpg',
  description: 'Body positioning for middle force',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 4 Cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
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

const giveAndGoDrill = {
  id: 1013,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: "Give'n Go",
  image: 'https://zupimages.net/up/20/19/s9fe.jpg',
  description: 'Follow your disc as fast as possible',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 12 Cones',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.HANDLING],
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
      instruction: '',
    },
  ],
};

const AussieDrill = {
  id: 1014,
  type: DrillTypes.TECHNICAL,
  author: 'Matt Hill',
  title: 'Aussie games',
  image: 'https://zupimages.net/up/20/19/78g2.png',
  description: 'You can run with the disc',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '4 Discs - 20 Cones',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.COMMUNICATION, GoalsFrisbee.PLAY],
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

const bolognaMDrill = {
  id: 1015,
  type: DrillTypes.TECHNICAL,
  author: 'Bologna',
  title: 'The M',
  image: 'https://zupimages.net/up/20/19/akuy.jpg',
  description: 'Follow the M',
  minimalPlayersNumber: 10,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '5 Disc - 6 Cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
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

const goToTenDrill = {
  id: 1016,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Go to 10',
  image: 'https://zupimages.net/up/20/19/rcyt.jpg',
  description: 'First team with 10 completes passes win',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 4 Cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.PLAY, GoalsFrisbee.DEFENSE],
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
      instruction: '',
    },
  ],
};

const endzoneDameDrill = {
  id: 1017,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Endzone Game',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Game to 5. If you score, your team stay in offense',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 4 Cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.PLAY, GoalsFrisbee.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Blah blah blah',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: 'Blah blah blah',
    },
  ],
};

const bulldogDrill = {
  id: 1018,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'British Bulldog',
  image: 'https://zupimages.net/up/20/19/tf79.jpg',
  description: 'warm-up game where the defense has to run by group of 3',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '4 Cones',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [GoalsFrisbee.DEFENSE, GoalsFrisbee.PLAY, GoalsFrisbee.COMMUNICATION],
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

const menageATroisDrill = {
  id: 1019,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Menage a trois',
  image: 'https://zupimages.net/up/20/19/ai3z.jpg',
  description: 'Pass - defense - Receive',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.DEFENSE, GoalsFrisbee.BREAK],
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

const dwarfDuelDrill = {
  id: 1020,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Dwarf duel',
  image: 'https://zupimages.net/up/20/19/3m3k.jpg',
  description: 'Duel without jumping',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 2 Cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.CUTTING],
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

const dishieChainDrill = {
  id: 1021,
  type: DrillTypes.TECHNICAL,
  author: 'Mooncatcher',
  title: 'Dishie Chain',
  image: 'https://zupimages.net/up/20/19/stdq.jpg',
  description: 'Basic long passes drill. You want your players to alternate between throwing, running and passing',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 Disc - 2 Cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.CUTTING],
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
      instruction: '',
    },
  ],
};

const breakDanceDrill = {
  id: 1022,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'Break Dance',
  image: 'https://zupimages.net/up/20/19/agsd.jpg',
  description: 'Making a christmas tree in the break',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '3 Discs - 10 Cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [GoalsFrisbee.THROWING, GoalsFrisbee.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
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

const catapultdrill = {
  id: 1023,
  type: DrillTypes.TECHNICAL,
  author: 'Moby',
  title: 'The Catapult',
  image: 'https://zupimages.net/up/20/19/kmlc.jpg',
  description: 'Throwing 10 long shot a row as far and fast as you can',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '5 Disc - 3 Cones',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.THROWING],
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
  equipment: '8 cones and 1 disc per field',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [GoalsFitness.CORE],
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
    "The perfect setup if you have a LOT of players or want your players to touch a lot of frisbees in a short time. This can be quite exhausting so don't forget to set breaks every 5 o 10 minutes.",
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones and 1 disc per field',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.PLAY],
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
  title: 'Long shots oriented game',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    'Just a classical game on the whole field. Only exception: a team scores 2 points if there was a successful long shot on the offense that lead to scoring!',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones and 1 disc per field',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [GoalsFrisbee.PLAY, GoalsFrisbee.THROWING],
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
      instruction: '',
    },
  ],
};

const dumpSwingTraining = {
  id: 1,
  illustrationType: '** Ultimate App **',
  title: 'Dump & Swing',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'This training session aims at make your team better at Dump & Swing. blabla bla bla bla',
  drills: [warmupDrill, goToTenDrill, endzoneDameDrill, bulldogDrill, menageATroisDrill, dwarfDuelDrill],
};

const firstWeekFitnessTraining = {
  id: 2,
  illustrationType: '** Ultimate App **',
  title: 'First Week Fitness',
  image: 'https://zupimages.net/up/20/19/9fcj.jpg',
  description: 'This is the first week of the Off-season program',
  drills: [stabilityDrill, strengthDrill, speedDrill, conditioningDrill],
};

const coed2MarkTraining = {
  id: 3,
  illustrationType: 'Martin',
  title: 'Coed 2 Mark',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description:
    "This training session aims at practicing your mark skills. Don't be broken to easily, generate dangerous passes",
  drills: [warmupGameDrill, chevronDrill, markDrill, breakDrill, game3v3],
};

const coed2LongTraining = {
  id: 4,
  illustrationType: 'Martin',
  title: 'Coed 2 Long',
  image: 'https://zupimages.net/up/20/19/aapn.jpg',
  description:
    "This training session aims at practicing your mark skills. Don't be broken to easily, generate dangerous passes",
  drills: [warmupGameDrill, lDrill, threeColumnsLongDrill, longShotGame],
};

const coed2Long2Training = {
  id: 5,
  illustrationType: 'Martin',
  title: 'Coed 2 Long v2',
  image: 'https://zupimages.net/up/20/19/v8f4.jpg',
  description:
    "This training session aims at practicing your mark skills. Don't be broken to easily, generate dangerous passes",
  drills: [warmupDrill, threeColumnsLongDrill, twoColumnsLongDrill, longShotGame],
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
    // Frisbee
    chevronDrill,
    markDrill,
    breakDrill,
    lDrill,
    threeColumnsLongDrill,
    twoColumnsLongDrill,
    treasureHuntDrill,
    kyeDrill,
    bigEightDrill,
    trainDrill,
    goaltimateDrill,
    middleForceDrill,
    giveAndGoDrill,
    AussieDrill,
    bolognaMDrill,
    goToTenDrill,
    endzoneDameDrill,
    bulldogDrill,
    menageATroisDrill,
    dwarfDuelDrill,
    dishieChainDrill,
    breakDanceDrill,
    catapultdrill,
    // Games
    normalGame,
    game3v3,
    longShotGame,
  ],
  trainings: [dumpSwingTraining, firstWeekFitnessTraining, coed2MarkTraining, coed2LongTraining, coed2Long2Training],
  programs: [
    {
      id: 1,
      title: 'Beginner',
      trainings: [dumpSwingTraining],
    },
    {
      id: 2,
      title: 'Fitness Bloc',
      trainings: [dumpSwingTraining, firstWeekFitnessTraining, coed2MarkTraining],
    },
    {
      id: 3,
      title: 'Vertical Stack',
      trainings: [dumpSwingTraining, firstWeekFitnessTraining, coed2MarkTraining, coed2LongTraining],
    },
    {
      id: 4,
      title: 'Ultimate overwiew',
      trainings: [
        firstWeekFitnessTraining,
        dumpSwingTraining,
        coed2LongTraining,
        coed2MarkTraining,
        coed2Long2Training,
      ],
    },
    {
      id: 5,
      title: 'Long throws',
      trainings: [coed2LongTraining, coed2Long2Training],
    },
    {
      id: 6,
      title: 'Strong defense',
      trainings: [coed2MarkTraining],
    },
  ],
};

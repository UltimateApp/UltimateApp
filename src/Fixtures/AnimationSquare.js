/** Square drill
 *
 *  Each drill has an attribute "positions" which is a 4D array:
 * - positions[i][j][k][l]: coordinate l at substep k of step j for element to display number i
 *
 * Remark1: positions[i][0] is the initial position which must be defined for each element i
 * Remark2: positions[i][j] is undefined if  element i position does not change between steps j-1 and j
 */

/* Type of the element displayed */
const ids = [
  'triangle',
  'triangle',
  'triangle',
  'triangle',
  'triangle',
  'triangle',
  'triangle',
  'triangle',
  'offense',
  'offense',
  'offense',
  'offense',
  'offense',
  'disc',
];

/* Text displayed on each element */
const texts = ['', '', '', '', '', '', '', '', '1', '2', '3', '4', '5', ''];

/* Definition of the position of each element at each step */
const stepCount = 6;

var discPositions = new Array(stepCount);
var p1Positions = new Array(stepCount);
var p2Positions = new Array(stepCount);
var p3Positions = new Array(stepCount);
var p4Positions = new Array(stepCount);
var p5Positions = new Array(stepCount);
var triangle1 = new Array(stepCount);
var triangle2 = new Array(stepCount);
var triangle3 = new Array(stepCount);
var triangle4 = new Array(stepCount);
var triangle5 = new Array(stepCount);
var triangle6 = new Array(stepCount);
var triangle7 = new Array(stepCount);
var triangle8 = new Array(stepCount);

var discDeltaP = 0.06;
var discDeltaN = -0.02;

// Initial positions
discPositions[0] = [[0.3 + discDeltaP, 0.3 + discDeltaP]];
p1Positions[0] = [[0.3, 0.3]];
p2Positions[0] = [[0.16, 0.3]];
p3Positions[0] = [[0.6, 0.3]];
p4Positions[0] = [[0.6, 0.6]];
p5Positions[0] = [[0.3, 0.6]];
triangle1[0] = [[0.3, 0.3]];
triangle2[0] = [[0.3, 0.6]];
triangle3[0] = [[0.6, 0.3]];
triangle4[0] = [[0.6, 0.6]];
triangle5[0] = [[0.45, 0.2]];
triangle6[0] = [[0.2, 0.45]];
triangle7[0] = [[0.45, 0.7]];
triangle8[0] = [[0.7, 0.45]];

// Step 1 - p2 first cut
p2Positions[1] = [[0.45, 0.2]];

// Step 2 - p2 counter-cut, p1 throws, p3 first cut
p2Positions[2] = [[0.6, 0.3]];
p3Positions[2] = [[0.7, 0.45]];
discPositions[2] = [[0.6 + discDeltaN, 0.3 + discDeltaP]];

// Step 3 - p3 counter-cut, p2 throws, p4 first cut
p3Positions[3] = [[0.6, 0.6]];
p4Positions[3] = [[0.45, 0.7]];
discPositions[3] = [[0.6 + discDeltaN, 0.6 + discDeltaN]];

// Step 4 - p4 counter-cut, p3 throws, p5 first cut
p4Positions[4] = [[0.3, 0.6]];
p5Positions[4] = [[0.2, 0.45]];
discPositions[4] = [[0.3 + discDeltaP, 0.6 + discDeltaN]];

// Step 5 - p5 counter-cut, p4 throws, p1 first cut
p5Positions[5] = [[0.3, 0.3]];
p1Positions[5] = [[0.45, 0.2]];
discPositions[5] = [[0.3 + discDeltaP, 0.3 + discDeltaP]];

// Warning: the elements must be in the same order in this.positions than in this.ids and this.texts
const positions = Array(ids.length);
positions[0] = triangle1;
positions[1] = triangle2;
positions[2] = triangle3;
positions[3] = triangle4;
positions[4] = triangle5;
positions[5] = triangle6;
positions[6] = triangle7;
positions[7] = triangle8;
positions[8] = p1Positions;
positions[9] = p2Positions;
positions[10] = p3Positions;
positions[11] = p4Positions;
positions[12] = p5Positions;
positions[13] = discPositions;

export default { positions, ids, texts };

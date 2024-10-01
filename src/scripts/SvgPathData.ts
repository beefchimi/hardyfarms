// This class is a useful utility for re-organizing SVG data.

type AnchorPoint = [x: number, y: number];
type CubicBezierHandle = [cx: number, cy: number];
type CubicBezierTuple = [CubicBezierHandle, CubicBezierHandle];

type InputData = (AnchorPoint | CubicBezierTuple)[];

export const testData: InputData = [
  [1, 2],
  [
    [3, 4],
    [5, 6],
  ],
  [7, 8],
];

export class SvgPathData {
  constructor(input: InputData) {}

  // get toString() {}
}

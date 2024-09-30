export type ClipBlobSquareShape = 'square1' | 'square2' | 'square3' | 'square4';

// Numbered variants correspond with:
// original, flip X, flip Y, flip X+Y
const clipBlobSquareDataRaw: Record<ClipBlobSquareShape, string[]> = {
  square1: [
    'M0.04,0.16',
    'C0.13,0.04 0.31,0.06',
    '0.46,0.06',
    'C0.6,0.06 0.76,0.05',
    '0.87,0.15',
    'C0.98,0.26 1.01,0.42',
    '0.99,0.57',
    'C0.97,0.7 0.83,0.77',
    '0.72,0.84',
    'C0.64,0.89 0.55,0.92',
    '0.46,0.93',
    'C0.35,0.93 0.24,0.93',
    '0.16,0.86',
    'C0.08,0.79 0.07,0.68',
    '0.05,0.57',
    'C0.03,0.43 -0.04,0.27',
    '0.04,0.16',
    'Z',
  ],
  square2: [
    'M0.13,0.15',
    'C0.23,0.05 0.39,0.06',
    '0.54,0.06',
    'C0.69,0.06 0.87,0.04',
    '0.95,0.16',
    'C1.04,0.27 0.97,0.43',
    '0.95,0.57',
    'C0.93,0.68 0.92,0.79',
    '0.84,0.86',
    'C0.76,0.93 0.65,0.93',
    '0.54,0.93',
    'C0.44,0.92 0.35,0.89',
    '0.27,0.84',
    'C0.16,0.77 0.03,0.7',
    '0.01,0.57',
    'C-0.01,0.42 0.02,0.26',
    '0.13,0.15',
    'Z',
  ],
  square3: [
    'M0.16,0.13',
    'C0.24,0.06 0.35,0.06',
    '0.46,0.06',
    'C0.55,0.07 0.64,0.1',
    '0.72,0.15',
    'C0.83,0.23 0.97,0.29',
    '0.99,0.42',
    'C1.01,0.57 0.98,0.73',
    '0.87,0.84',
    'C0.76,0.94 0.6,0.93',
    '0.46,0.93',
    'C0.31,0.93 0.13,0.95',
    '0.04,0.83',
    'C-0.04,0.72 0.03,0.56',
    '0.05,0.42',
    'C0.07,0.31 0.08,0.2',
    '0.16,0.13',
    'Z',
  ],
  square4: [
    'M0.27,0.15',
    'C0.35,0.1 0.44,0.07',
    '0.54,0.06',
    'C0.65,0.06 0.76,0.06',
    '0.84,0.13',
    'C0.92,0.2 0.93,0.31',
    '0.95,0.42',
    'C0.97,0.56 1.04,0.7',
    '0.95,0.83',
    'C0.87,0.95 0.69,0.93',
    '0.54,0.93',
    'C0.39,0.93 0.23,0.94',
    '0.13,0.84',
    'C0.02,0.73 -0.01,0.57',
    '0.01,0.42',
    'C0.03,0.29 0.16,0.23',
    '0.27,0.15',
    'Z',
  ],
};

export const clipBlobSquarePath: Record<ClipBlobSquareShape, string> = {
  square1: clipBlobSquareDataRaw.square1.join(' '),
  square2: clipBlobSquareDataRaw.square2.join(' '),
  square3: clipBlobSquareDataRaw.square3.join(' '),
  square4: clipBlobSquareDataRaw.square4.join(' '),
};

/*
export const generated = Object.entries(clipBlobSquareDataRaw).reduce((collection, [key, value]) => {
  return {
    ...collection,
    [key]: value.join(' '),
  };
}, {} as Record<ClipBlobSquareShape, string>);
*/

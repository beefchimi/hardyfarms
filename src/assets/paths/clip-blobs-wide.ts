export type ClipBlobWideShape = 'wide1' | 'wide2' | 'wide3' | 'wide4';

// Numbered variants correspond with:
// original, flip X, flip Y, flip X+Y
const clipBlobWideDataRaw: Record<ClipBlobWideShape, string[]> = {
  wide1: [
    'M0.01,0.5',
    'C0.024,0.38 0.05,0.28',
    '0.14,0.2',
    'C0.23,0.13 0.34,0.14',
    '0.46,0.12',
    'C0.6,0.1 0.74,0.08',
    '0.84,0.16',
    'C0.96,0.24 1,0.38',
    '1,0.5',
    'C1,0.62 0.92,0.72',
    '0.8,0.8',
    'C0.7,0.86 0.6,0.88',
    '0.48,0.88',
    'C0.34,0.88 0.2,0.96',
    '0.08,0.86',
    'C0,0.78 0,0.62',
    '0.01,0.5',
    'Z',
  ],
  wide2: [
    'M0.16,0.16',
    'C0.27,0.08 0.41,0.1',
    '0.54,0.12',
    'C0.66,0.14 0.78,0.13',
    '0.86,0.2',
    'C0.95,0.28 0.98,0.38',
    '0.99,0.5',
    'C1.01 0.62 1,0.78',
    '0.92,0.86',
    'C0.81,0.96 0.67,0.88',
    '0.52,0.88',
    'C0.41,0.88 0.31,0.86',
    '0.2,0.8',
    'C0.09,0.72 0.01,0.62',
    '0.01,0.5',
    'C0.01,0.38 0.05,0.24',
    '0.16,0.16',
    'Z',
  ],
  wide3: [
    'M0.08,0.16',
    'C0.2,0.05 0.34,0.13',
    '0.48,0.13',
    'C0.6,0.13 0.7,0.15',
    '0.8,0.21',
    'C0.92,0.29 1,0.39',
    '1,0.51',
    'C1,0.64 0.96,0.77',
    '0.84,0.85',
    'C0.74,0.93 0.6,0.91',
    '0.46,0.89',
    'C0.34,0.87 0.23,0.89',
    '0.14,0.81',
    'C0.05,0.74 0.02,0.63',
    '0.01,0.51',
    'C0,0.39 0,0.23',
    '0.08,0.16',
    'Z',
  ],
  wide4: [
    'M0.2,0.21',
    'C0.3,0.15 0.4,0.13',
    '0.52,0.13',
    'C0.66,0.13 0.8,0.05',
    '0.92,0.16',
    'C1,0.23 1.01,0.39',
    '0.99,0.51',
    'C0.98,0.63 0.95,0.74',
    '0.86,0.81',
    'C0.78,0.89 0.66,0.87',
    '0.54,0.89',
    'C0.4,0.91 0.27,0.93',
    '0.16,0.85',
    'C0.04,0.77 0,0.64',
    '0,0.51',
    'C0,0.39 0.08,0.29',
    '0.2,0.21',
    'Z',
  ],
};

export const clipBlobWidePath: Record<ClipBlobWideShape, string> = {
  wide1: clipBlobWideDataRaw.wide1.join(' '),
  wide2: clipBlobWideDataRaw.wide2.join(' '),
  wide3: clipBlobWideDataRaw.wide3.join(' '),
  wide4: clipBlobWideDataRaw.wide4.join(' '),
};

/*
export const generated = Object.entries(clipBlobWideDataRaw).reduce((collection, [key, value]) => {
  return {
    ...collection,
    [key]: value.join(' '),
  };
}, {} as Record<ClipBlobWideShape, string>);
*/

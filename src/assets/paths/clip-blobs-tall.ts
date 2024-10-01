export type ClipBlobTallShape = 'tall1' | 'tall2' | 'tall3' | 'tall4';

// Numbered variants correspond with:
// original, flip X, flip Y, flip X+Y

const clipBlobTallDataRaw: Record<ClipBlobTallShape, string[]> = {
  tall1: [
    'Mx,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Z',
  ],
  tall2: [
    'Mx,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Z',
  ],
  tall3: [
    'Mx,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Z',
  ],
  tall4: [
    'Mx,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Cx1,y1 x2,y2',
    'x,y',
    'Z',
  ],
};

export const clipBlobTallPath: Record<ClipBlobTallShape, string> = {
  tall1: clipBlobTallDataRaw.tall1.join(' '),
  tall2: clipBlobTallDataRaw.tall2.join(' '),
  tall3: clipBlobTallDataRaw.tall3.join(' '),
  tall4: clipBlobTallDataRaw.tall4.join(' '),
};

/*
export const generated = Object.entries(clipBlobTallDataRaw).reduce((collection, [key, value]) => {
  return {
    ...collection,
    [key]: value.join(' '),
  };
}, {} as Record<ClipBlobTallShape, string>);
*/

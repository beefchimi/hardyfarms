# Patterns

All of the SVG patterns within this file are intended to be used as a CSS `url()`. As long as the file is below a certain filesize, Astro will automatically encode + inline the SVG data.

One caveat to this is that we need to hard-code the `fill` value. Unfortunately, a `fill` of `currentColor` will not inherit the color from the surrounding CSS styling.

Sometimes, we may need to tailor the inlined SVG data for a very specific use case. In those cases, we will still keep the original SVG asset here in this folder, even though it isn't imported anywhere. We can use [this website](https://www.svgbackgrounds.com/tools/svg-to-css/) to manually convert the SVG data.

## Scrapped

Here are some code snippets we may want to resurrect at some point.

### Bump Squigg

See `Bump.astro` and all `squigg-*svg` assets for more context.

```tsx
import Bump from '@components/Bump.astro';

<div class="BumpWrapper">
  <div class="BumpList">
    <Bump id="HelloBump1" />
    <Bump id="HelloBump2" />
    <Bump id="HelloBump3" />
    <Bump id="HelloBump4" />
    <Bump id="HelloBump5" />
    <Bump id="HelloBump6" />
  </div>
</div>;
```

```css
.BumpWrapper {
  padding: 2rem;
  background-color: rgb(255, 255, 255, 0.9);

  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }

  /* This does not work in Astro for some reason */
  &:hover svg path {
    animation-play-state: running !important;
  }
}

.BumpList {
  display: grid;
  grid-auto-flow: column;
  width: calc(4.8rem * 6);
  height: 1.4rem;
}
```

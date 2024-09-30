// TODO: Since we do not actually render <Navigation /> on `mobile`, we
// should use a `matchMedia` listener to conditionally execute this code.
export class StickyNav {
  #target: Element | null;
  #offset: number;
  #observer: IntersectionObserver | undefined;

  constructor(targetSelector = 'nav', targetOffset = 0) {
    this.#target = document.querySelector(targetSelector);
    this.#offset = targetOffset;
  }

  run() {
    if (!this.#target) return;

    // If we already have an active IntersectionObserver...
    // tear it down before continuing.
    if (this.#observer) this.teardown();

    this.#observer = new IntersectionObserver(this.#handleIntersect, {
      root: null,
      rootMargin: `${this.#offset}px`,
      threshold: 1,
    });

    this.#observer.observe(this.#target);
  }

  teardown() {
    this.#observer?.disconnect();
    document.documentElement.dataset.hasScrolled = 'false';
  }

  #handleIntersect: IntersectionObserverCallback = (entries) => {
    const onlyNav = entries[0];
    const hasScrolled = !onlyNav.isIntersecting;

    document.documentElement.dataset.hasScrolled = hasScrolled.toString();
  };
}

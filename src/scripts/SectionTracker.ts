// TODO: Since we do not actually render <Navigation /> on `mobile`, we
// should use a `matchMedia` listener to conditionally execute this code.
export class SectionTracker {
  #sections: NodeListOf<Element>;
  #fallback: string;
  #observer: IntersectionObserver | undefined;

  constructor(sectionsSelector = 'section', activeFallback = 'home') {
    this.#sections = document.querySelectorAll(sectionsSelector);
    this.#fallback = activeFallback;
  }

  run() {
    if (!this.#sections.length) return;

    // If we already have an active IntersectionObserver...
    // tear it down before continuing.
    if (this.#observer) this.teardown();

    this.#observer = new IntersectionObserver(this.#handleIntersect, {
      root: null,
      rootMargin: '0px',
      // `threshold` value determined based on browser testing.
      // If <section /> heights change, we may want to revisit this value.
      threshold: 0.6,
    });

    this.#sections.forEach((element) => {
      this.#observer?.observe(element);
    });
  }

  teardown() {
    this.#observer?.disconnect();
    document.documentElement.dataset.activeSection = '';
  }

  #handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach(({target, isIntersecting}) => {
      if (isIntersecting) {
        const targetSection = target.getAttribute('data-section');
        document.documentElement.dataset.activeSection =
          targetSection ?? this.#fallback;

        // TODO: Consider updating the URL Hash
        // const targetId = target.id;
        // history.replaceState(null, '', urlHash);

        // console.log('currently intersecting', targetSection);
      }
    });
  };
}

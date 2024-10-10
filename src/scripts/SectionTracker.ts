import {calcProgress} from 'beeftools';

interface SectionBox {
  id: string;
  order: number;
  top: number;
  bottom: number;
  height: number;
  startPercentage: number;
  heightPercentage: number;
}

// NOTE: We are not using an IntersectionObserver for this, as it
// was unreliable in tracking the correct on-screen section.

// TODO: Since we do not actually render <Navigation /> on `mobile`, we
// should use a `matchMedia` listener to conditionally execute this code.
export class SectionTracker {
  #sections: NodeListOf<Element>;
  #fallback: string;

  #running = false;
  #rafId = 0;
  #rafTicking = false;

  constructor(sectionsSelector = 'section', activeFallback = 'home') {
    this.#sections = document.querySelectorAll(sectionsSelector);
    this.#fallback = activeFallback;
  }

  get docHeight() {
    return document.documentElement.scrollHeight;
  }

  get viewHeight() {
    return document.documentElement.clientHeight;
  }

  get isScrollOutsideRange() {
    const winY = window.scrollY;
    return winY < 0 || winY > this.docHeight;
  }

  get sectionBoxes() {
    const sectionsArray = Array.from(this.#sections);

    return sectionsArray.reduce<SectionBox[]>((collection, section, index) => {
      const id = section.getAttribute('data-section') ?? `section-${index}`;
      const height = section.scrollHeight;

      const previous = collection[index - 1];
      const prevBottom = previous?.bottom ?? 0;

      // Some of the top/bottom/height values will not be correct
      // if negative offsets are used.
      return [
        ...collection,
        {
          id,
          order: index,
          top: prevBottom,
          bottom: prevBottom + height,
          height,
          startPercentage: calcProgress(prevBottom, {
            max: this.docHeight,
            round: true,
          }),
          heightPercentage: calcProgress(height, {
            max: this.docHeight,
            round: true,
          }),
        },
      ];
    }, []);
  }

  get activeSection() {
    const scrollY = window.scrollY;
    const maxScrollY = this.docHeight - this.viewHeight;
    const viewMid = Math.floor(this.viewHeight / 2) + scrollY;

    if (scrollY >= maxScrollY) {
      const finalSection = this.sectionBoxes[this.sectionBoxes.length - 1];
      return finalSection.id;
    }

    const active = this.sectionBoxes.find((section) => {
      const mostlyVisible = section.top <= viewMid && section.bottom > viewMid;
      return mostlyVisible;
    });

    return active?.id ?? this.#fallback;
  }

  run() {
    if (!this.#sections.length) return;

    // If already running... teardown before continuing.
    if (this.#running) this.teardown();

    this.#registerEventListeners(true);
    this.#running = true;
  }

  teardown() {
    // window.removeEventListener('hashchange', this.#updateUrl);
    window.removeEventListener('scroll', this.#handleUpdateEvent);
    window.removeEventListener('resize', this.#handleUpdateEvent);

    cancelAnimationFrame(this.#rafId);
    this.#rafId = 0;

    document.documentElement.dataset.activeSection = this.#fallback;
  }

  #registerEventListeners(immediate = false) {
    // TODO: Considering updating the hash URL.
    // window.addEventListener('hashchange', this.#updateUrl, false);

    window.addEventListener('scroll', this.#handleUpdateEvent, {
      passive: true,
    });

    window.addEventListener('resize', this.#handleUpdateEvent, {
      passive: true,
    });

    if (immediate) this.#update();
  }

  #handleUpdateEvent = () => {
    if (this.#rafTicking) return;

    this.#rafId = requestAnimationFrame(this.#update);
    this.#rafTicking = true;

    this.#update();
  };

  #update = () => {
    document.documentElement.dataset.activeSection = this.activeSection;
    this.#rafTicking = false;
  };
}

export class NavTracker {
  #nav: Element | null;
  #items: NodeListOf<Element>;
  #lastSavedIndex = 0;

  #rafId = 0;
  #rafTicking = false;

  constructor(navSelector = 'nav', itemsSelector = 'nav ul li') {
    this.#nav = document.querySelector(navSelector);
    this.#items = document.querySelectorAll(itemsSelector);
  }

  run() {
    /*
    // Required alongside `handleScroll` for anchor tags.
    window.addEventListener('hashchange', this.#runAllUpdates, false);
    */

    // `passive` may not actually make sense for `scroll` events.
    window.addEventListener('scroll', this.#handleScroll, {
      passive: true,
    });
  }

  teardown() {
    window.removeEventListener('scroll', this.#handleScroll);
    cancelAnimationFrame(this.#rafId);
    this.#rafId = 0;
  }

  /*
  update(currentIndex = 0) {
    this.#items.forEach((element, index) => {
      if (index === currentIndex) {
        element.setAttribute('data-current', 'true');
      } else {
        element.removeAttribute('data-current');
      }
    });
  }

  safeUpdate(currentIndex = 0) {
    if (this.#lastSavedIndex === currentIndex) return;

    this.#lastSavedIndex = currentIndex;
    this.update(currentIndex);
  }
  */

  #handleScroll = () => {
    if (this.#rafTicking) return;

    this.#rafId = requestAnimationFrame(this.#runAllUpdates);
    this.#rafTicking = true;

    // do something
  };
}

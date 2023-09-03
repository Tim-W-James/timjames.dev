// Source: https://github.com/remix-run/react-router/discussions/9555

type ScrollPosition = {
  x: number;
  y: number;
};

const getScrollPosition = (): ScrollPosition => ({
  x: window.scrollX,
  y: window.scrollY,
});

const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scrolls the window to the given scroll position.
 *
 * For smooth scrolling behavior you might want to use the smoothscroll
 * polyfill http://iamdustan.com/smoothscroll/
 *
 * If the user has indicated that they prefer reduced motion, the smoothScroll
 * value will be ignored.
 *
 * @param scrollPosition the scroll position to scroll to
 * @param smoothScroll true for smooth scrolling, false otherwise
 */
export const setScrollPosition = (
  scrollPosition: ScrollPosition,
  smoothScroll = false
): void => {
  if (!smoothScroll || prefersReducedMotion()) {
    // Use old form of scrollTo() (when we can) to maximize browser
    // compatibility.
    window.scrollTo(scrollPosition.x, scrollPosition.y);
  } else {
    try {
      window.scrollTo({
        behavior: "smooth",
        left: scrollPosition.x,
        top: scrollPosition.y,
      });
    } catch {
      // If scrollTo with options throws, fall back on old form.
      // See https://github.com/Fyrd/caniuse/issues/1760
      // See https://github.com/frontarm/navi/issues/71
      // See https://github.com/frontarm/navi/pull/84/files
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }
  }
};

const getScrollPositionRestorer = (): (() => void) => {
  const scrollPosition = getScrollPosition();

  return () => {
    setScrollPosition(scrollPosition);
  };
};

/**
 * Executes a function that may (undesirably) change the window's scroll
 * position and then restores the window scroll position and scroll behavior.
 *
 * @param funcWithScrollSideEffect a function to execute that may (undesirably)
 * change the window's scroll position
 */
const withRestoreScrollPosition = <T>(funcWithScrollSideEffect: () => T): T => {
  const restoreScrollPosition = getScrollPositionRestorer();
  const result = funcWithScrollSideEffect();
  restoreScrollPosition();
  return result;
};

/**
 * Focuses an element, setting `tabindex="-1"` if necessary.
 *
 * @param element the element to focus.
 * @param preventScroll true if the browser should not scroll the target element
 * into view, false otherwise.
 */
export const focusElement = (
  element: HTMLElement | SVGElement,
  preventScroll = false
): boolean => {
  // See: https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/
  // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  // See: https://github.com/whatwg/html/issues/834
  // See: https://stackoverflow.com/questions/4963053/focus-to-input-without-scrolling/6610501

  try {
    // Set tabindex="-1" if necessary.
    // TODO avoid setting tabindex when we're confident we don't need to?
    if (!element.hasAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      // We remove tabindex after blur to avoid weird browser behavior
      // where a mouse click can activate elements with tabindex="-1".
      const blurListener = (): void => {
        element.removeAttribute("tabindex");
        element.removeEventListener("blur", blurListener);
      };
      element.addEventListener("blur", blurListener);
    }

    if (preventScroll) {
      // preventScroll has poor browser support, so we restore scroll manually
      // after setting focus.
      // see https://caniuse.com/#feat=mdn-api_htmlelement_focus_preventscroll_option
      // TODO detect if browser supports preventScroll and avoid
      // `withRestoreScrollPosition`
      // shenanigans if so.
      withRestoreScrollPosition(() => {
        try {
          element.focus({ preventScroll: true });
        } catch {
          // If focus() with options throws, fall back on calling focus()
          // without any arguments.
          element.focus();
        }
      });
    } else {
      // Avoid passing anything to focus() (when we can) to maximize browser
      // compatibility.
      element.focus();
    }

    return document.activeElement === element;
  } catch (e: unknown) {
    // Apparently trying to focus a disabled element in IE can throw.
    // See https://stackoverflow.com/a/1600194/2476884
    console.error(e);
    return false;
  }
};

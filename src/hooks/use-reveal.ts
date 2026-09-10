import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll helper. Returns a ref to attach to the element (or a wrapper)
 * you want to watch, and a `hidden` flag to drive an enter transition.
 *
 * `hidden` is only ever true AFTER the component has mounted on the client and
 * BEFORE the element scrolls into view. Server-rendered / prerendered HTML,
 * no-JS visitors, and anyone with reduced motion always get `hidden === false`,
 * so content is never invisible without JavaScript.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, hidden: mounted && !inView };
}

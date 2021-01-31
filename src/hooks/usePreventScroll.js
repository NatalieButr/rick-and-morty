import { useLayoutEffect } from "react";

export function usePreventScroll() {
  const bodyFixPosition = () => {
    document.body.setAttribute("modal-open", "true");
  };

  const bodyUnfixPosition = () => {
    document.body.removeAttribute("modal-open");
  };

  useLayoutEffect(() => {
    bodyFixPosition();
    return () => {
      bodyUnfixPosition();
    };
  }, []);
}

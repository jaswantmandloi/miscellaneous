import { useRef, useEffect } from "react";

const TrapTap = ({ children, isActive = true }) => {
  const nodeToRestore = useRef();
  const sentinelStart = useRef(null);
  const sentinelEnd = useRef(null);

  useEffect(() => {
    const loopFocus = (event) => {
      // 9 = Tab
      if (!isActive || event.keyCode !== 9) {
        return;
      }

      if (sentinelEnd.current === document.activeElement) {
        sentinelStart.current.focus();
      }

      if (event.shiftKey && sentinelStart.current === document.activeElement) {
        sentinelEnd.current.focus();
      }
    };

    document.addEventListener("keydown", loopFocus, true);
    nodeToRestore.current = document.activeElement;

    sentinelStart.current.focus();

    return () => {
      document.removeEventListener("keydown", loopFocus, true);
      if (nodeToRestore.current && nodeToRestore.current.focus) {
        nodeToRestore.current.focus();
      }

      nodeToRestore.current = null;
    };
  }, []);

  return (
    <>
      <div tabIndex="0" ref={sentinelStart} />
      {children}
      <div tabIndex="0" ref={sentinelEnd} />
    </>
  );
};

export default TrapTap;

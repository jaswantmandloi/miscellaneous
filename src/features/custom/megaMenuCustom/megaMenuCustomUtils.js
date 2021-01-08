import { useState, useEffect, useCallback, useRef } from "react";

//https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys

export const KEYS = {
  ARROW_DOWN: "ArrowDown",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_LEFT: "ArrowLeft",
  TAB: "Tab",
};

export const useKeyPressEvent = function (captureEvents) {
  const [keyEvent, setKeyEvent] = useState({});

  function downHandler(event) {
    const { key, shiftKey } = event;
    if (captureEvents.includes(key)) {
      event.preventDefault();
      setKeyEvent({
        shiftKey,
        key,
        lastUpdateTime: new Date().getTime(),
      });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return keyEvent;
};

export const useMutationObservation = function ({
  observingElement,
  observerHandler,
}) {
  useEffect(() => {
    let observer = null;
    if (observingElement) {
      observer = new MutationObserver(observerHandler);
      observer.observe(observingElement, {
        attributes: true,
        attributeFilter: ["class"],
        subtree: true,
        characterData: false,
      });
    }

    return () => {
      observer && observer?.disconnect();
    };
  }, [observingElement]);
};

export const useKeyboardNavigation = function ({
  items,
  isActive,
  selectedClassName,
  observingElement,
  keysToListen = [],
  horizontalArrowHandler = () => {},
}) {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { key, lastUpdateTime, shiftKey } = useKeyPressEvent(keysToListen);

  const cursorPosition = useRef(0);

  const downPress = key === KEYS.ARROW_DOWN || (key === KEYS.TAB && !shiftKey);
  const upPress = key === KEYS.ARROW_UP || (key === KEYS.TAB && shiftKey);
  const rightPress = key === KEYS.ARROW_RIGHT;
  const leftPress = key === KEYS.ARROW_LEFT;

  const mutationObserver = useCallback(
    function (event) {
      event.forEach((mutation) => {
        const { target: selectedElement = {} } = mutation;
        selectedElement &&
          selectedElement?.classList?.contains(selectedClassName) &&
          selectedElement?.focus();
      });
    },
    [selectedClassName]
  );

  useMutationObservation({
    observerHandler: mutationObserver,
    observingElement,
  });

  useEffect(() => {
    if (isActive && items.length && upPress) {
      cursorPosition.current =
        cursorPosition.current > 0
          ? cursorPosition.current - 1
          : cursorPosition.current;
      const { id: selectedId } = items[cursorPosition.current];
      setSelectedItemId(selectedId);
    }
  }, [upPress, lastUpdateTime]);

  useEffect(() => {
    if (isActive && items.length && downPress) {
      cursorPosition.current =
        cursorPosition.current < items.length - 1
          ? cursorPosition.current + 1
          : cursorPosition.current;
      const { id: selectedId } = items[cursorPosition.current];
      setSelectedItemId(selectedId);
    }
  }, [downPress, lastUpdateTime]);

  useEffect(() => {
    if (items.length && rightPress) {
      horizontalArrowHandler(false);
    }
  }, [rightPress, lastUpdateTime]);

  useEffect(() => {
    if (items.length && leftPress) {
      horizontalArrowHandler(true);
    }
  }, [leftPress, lastUpdateTime]);

  return { selectedItemId };
};

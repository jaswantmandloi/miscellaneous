import styles from "./LeftMenus.module.scss";
import { KEYS, useKeyboardNavigation } from "../megaMenuCustomUtils";
import { useCallback, useEffect, useRef } from "react";

export default function LeftMenus({
  menus,
  activeMenuId,
  onToggleMenu,
  isLeftMenuActive,
  setIsLeftMenuActive,
}) {
  const listRef = useRef(null);
  const items = menus;

  const horizontalArrowHandler = useCallback(
    (isActiveLeftMenu) => {
      setIsLeftMenuActive(isActiveLeftMenu);
    },
    [setIsLeftMenuActive]
  );

  const { selectedItemId } = useKeyboardNavigation({
    items,
    isActive: isLeftMenuActive,
    selectedClassName: styles.activeCursor,
    observingElement: listRef.current,
    keysToListen: [
      KEYS.ARROW_DOWN,
      KEYS.ARROW_UP,
      KEYS.ARROW_LEFT,
      KEYS.ARROW_RIGHT,
      KEYS.TAB,
    ],
    horizontalArrowHandler,
  });

  useEffect(() => {
    const eventData = {
      currentTarget: {
        dataset: {
          index: selectedItemId,
        },
      },
    };

    isLeftMenuActive && onToggleMenu(eventData);
  }, [selectedItemId]);

  return (
    <ul className={styles.leftMenu} ref={listRef}>
      {menus.map(({ id, label }) => {
        const elementSelectionProps = {
          onMouseEnter: onToggleMenu,
          //onFocus:onToggleMenu,
          ["data-index"]: id,
          className: id === activeMenuId ? styles.activeCursor : "",
        };

        return (
          <li key={id} className={styles.leftMenuItem}>
            <a href="?movie" {...elementSelectionProps}>
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

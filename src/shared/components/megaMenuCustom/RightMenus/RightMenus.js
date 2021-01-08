import styles from "./RightMenus.module.scss";
import { useKeyboardNavigation, KEYS } from "../megaMenuCustomUtils";

import { useEffect, useRef } from "react";

export default function RightMenus({ menus, isLeftMenuActive }) {
  const items = useRef([]).current;
  const listRef = useRef(null);
  useEffect(() => {
    // Create linear list
    menus.forEach(({ id, innerMenus }) => {
      items.push({ id });
      items.push(...innerMenus);
    });
  }, [items, menus]);

  const { selectedItemId } = useKeyboardNavigation({
    items,
    isActive: !isLeftMenuActive,
    selectedClassName: styles.activeCursor,
    observingElement: listRef.current,
    keysToListen: [KEYS.ARROW_DOWN, KEYS.ARROW_UP, KEYS.TAB],
  });

  return (
    <section ref={listRef}>
      <div className={styles.rightNav}>
        {menus.map(({ id, label, innerMenus }) => {
          const selectedItemClassName =
            selectedItemId === id ? styles.activeCursor : "";
          return (
            <div key={id}>
              <label>
                <a href="?innerMenus&genre=0" className={selectedItemClassName}>
                  {label}
                </a>
              </label>
              <ul key={id}>
                {innerMenus.map(({ id, label }) => {
                  const selectedItemClassName =
                    selectedItemId === id ? styles.activeCursor : "";

                  return (
                    <li key={id}>
                      <a
                        href="?innerMenus&genre=0"
                        className={selectedItemClassName}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

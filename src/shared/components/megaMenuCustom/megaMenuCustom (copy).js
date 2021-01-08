import styles from "./megaMenuCustom.module.scss";
import { useRef, useEffect } from "react";

//https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys

// const subMenuOpenClass = styles["sub-nav-open"];
// const hasClass = (element, clsName) => {
//   return !!element.classList.contains(clsName);
// };

// const toggleClass = (element, clsName, toggleState) => {
//   return !!element.classList.toggle(clsName, toggleState);
// };

export default function MegaMenu() {
  const navMenuRef = useRef(null);
  const menuSentinelStart = useRef(null);
  const menuSentinelEnd = useRef(null);
  const nodeToRestore = useRef(null);

  //if (window){ window.navMenuRef = navMenuRef}

  useEffect(() => {
    const loopFocus = (event) => {
      // 9 = Tab
      if (event.keyCode !== 9) {
        return;
      }

      if (menuSentinelEnd.current === document.activeElement) {
        menuSentinelStart.current.focus();
      }

      if (
        event.shiftKey &&
        menuSentinelStart.current === document.activeElement
      ) {
        menuSentinelEnd.current.focus();
      }
    };

    document.addEventListener("keydown", loopFocus, true);
    nodeToRestore.current = document.activeElement;

    menuSentinelStart.current.focus();

    return () => {
      document.removeEventListener("keydown", loopFocus, true);
      if (nodeToRestore.current && nodeToRestore.current.focus) {
        nodeToRestore.current.focus();
      }

      nodeToRestore.current = null;
    };
  }, []);

  const handleMouseEnterNavMenu = (event) => {
    const allItems = document.querySelectorAll(`.${styles["sub-nav"]}`);
    allItems.forEach((divItem) => {
      const toggleState =
        divItem.dataset.index === event.currentTarget.dataset.index;
      //const divItem = item.querySelector("div")
      //toggleClass(divItem, subMenuOpenClass, toggleState)
      divItem.style.display = toggleState ? "block" : "none";
    });
  };

  return (
    <nav ref={navMenuRef}>
      <ul>
        <li>
          <button ref={menuSentinelStart}>Testing Menu Button</button>
        </li>
      </ul>

      <ul className={styles["nav-menu"]}>
        {Menus.map((menu, index) => {
          return (
            <li
              key={index}
              className={styles["nav-item"]}
              onMouseEnter={handleMouseEnterNavMenu}
              onFocus={handleMouseEnterNavMenu}
              data-index={index}
            >
              <a href="?movie">{menu.menu}</a>
            </li>
          );
        })}
      </ul>
      <div ref={menuSentinelEnd} tabIndex="0" />

      <section>
        {Menus.map((menu, index) => {
          return (
            <div key={index} className={styles["sub-nav"]} data-index={index}>
              {menu.subMenus.map((subMenus, index) => {
                return (
                  <ul key={index} className={styles["sub-nav-group"]}>
                    {subMenus.map((subMenu, index) => {
                      return (
                        <li key={index}>
                          <a href="?movie&genre=0">{subMenu}</a>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </section>
    </nav>
  );
}

const Menus = [
  {
    menu: "Movies",
    subMenus: [
      ["Action Adventure", "Children Family"],
      ["Dramas", "Foreign"],
      ["Musicals", "Romance"],
    ],
  },

  {
    menu: "TV Shows",
    subMenus: [
      ["Classic TV", "Crime TV"],
      ["Reality TV", "Foreign"],
      ["Musicals", "Romance"],
    ],
  },
];

// const ListItem = ({ item, active, setSelected, setHovered }) => (
//   <div
//     className={`item ${active ? "active" : ""}`}
//     onClick={() => setSelected(item)}
//     onMouseEnter={() => setHovered(item)}
//     onMouseLeave={() => setHovered(undefined)}
//   >
//     {item.name}
//   </div>
// );

// const useKeyPress = function (targetKey) {
//   const [keyPressed, setKeyPressed] = useState(false);

//   function downHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(true);
//     }
//   }

//   const upHandler = ({ key }) => {
//     if (key === targetKey) {
//       setKeyPressed(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", downHandler);
//     window.addEventListener("keyup", upHandler);

//     return () => {
//       window.removeEventListener("keydown", downHandler);
//       window.removeEventListener("keyup", upHandler);
//     };
//   });

//   return keyPressed;
// };

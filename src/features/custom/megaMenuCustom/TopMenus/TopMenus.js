import styles from "./TopMenus.module.scss";

export default function TopMenus({ menus, onToggleMenu }) {
  return (
    <ul className={styles.topMenu}>
      {menus.map(({ id, label }) => {
        return (
          <li key={id}>
            <button
              onClick={() => {
                onToggleMenu(id);
              }}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

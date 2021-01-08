import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menus}>
        <ul>
          {["Home", "Community"].map((menu) => {
            return (
              <li key={menu}>
                <a href="#">{menu}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.logo}>
        <div tabIndex="0" role="link">
          <span tabIndex="-1">SITE LOGO</span>
        </div>
      </div>
      <div className={styles.settings}>
        <ul>
          {["ic", "ic1", "Video"].map((setting) => {
            return (
              <li role="link" key={setting} tabIndex="0">
                <span tabIndex="-1">{setting}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

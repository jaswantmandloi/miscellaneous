import { useRef } from "react";
import styles from "../styles/home.module.css";

import ReactTooltip from "react-tooltip";

export default function Home() {
  const fooRef = useRef(null);

  return (
    <div className={styles.container}>
      <div>this is tesing</div>

      <div>
        This is testing
        <ReactTooltip></ReactTooltip>
        <span data-tip="tooltip" ref={(ref) => (fooRef.current = ref)}></span>
        <button
          onMouseEnter={() => {
            ReactTooltip.show(fooRef.current);
          }}
          onMouseLeave={() => {
            ReactTooltip.hide(fooRef.current);
          }}
        >
          Testing
        </button>
      </div>
    </div>
  );
}

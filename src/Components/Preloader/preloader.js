import { useEffect, useState } from "react";
import styles from "./preloader.module.css";

function Preloader() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <div className={`${styles.preload} ${!loading ? styles.loaded : ""}`}>
      <div className={styles.circle}></div>
      <p className={styles.text}>MTA BAKERY</p>
    </div>
  );
}

export default Preloader;

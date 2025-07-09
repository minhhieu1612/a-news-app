'use client';
import { useState } from "react";
import CategoryPopup from "./categoryPopup";
import styles from "./index.module.scss";
import Menu from "./menu";
import SearchForm from "./searchForm/searchForm";

export default function Header() {
  const [showMore, setShowMore] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <a href="/"></a>
        </div>
        <Menu showMore={showMore} setShowMore={setShowMore} />
        <CategoryPopup isVisible={showMore} />
        <SearchForm />
        <div className={`${styles.backdrop} ${showMore ? styles.active : ""}`}></div>
      </div>
    </header>
  );
}

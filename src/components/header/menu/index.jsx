import styles from "./index.module.scss";

export default function Menu({ showMore, setShowMore }) {
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
    const htmlEle = document.getElementsByTagName("html")[0];

    // stop the page from scrolling
    if (!showMore) {
      htmlEle.classList.add("overflow-hidden");
    } else {
      htmlEle.classList.remove("overflow-hidden");
    }
  };

  return (
    <nav className={styles.menu}>
      <ul>
        <li className={styles["menu-item"]}>
          <a href="/xuat-ban" title="Xuất bản">
            Xuất bản
          </a>
        </li>

        <li className={styles["menu-item"]}>
          <a href="/tac-gia" title="Tác giả">
            Tác giả
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/kinh-doanh" title="Kinh doanh">
            Kinh doanh
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/the-thao" title="Thể thao">
            Thể thao
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/cong-nghe" title="Công nghệ">
            Công nghệ
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/suc-khoe" title="Sức khỏe">
            Sức khỏe
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/doi-song" title="Đời sống">
            Đời sống
          </a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="/giai-tri" title="Giải trí">
            Giải trí
          </a>
        </li>
        <li
          className={`${styles.more} ${showMore ? styles.active : ""}`}
          onClick={handleToggleShowMore}
        >
          <span className={styles.dot}></span>
        </li>
      </ul>
    </nav>
  );
}

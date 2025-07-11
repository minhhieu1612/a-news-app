import styles from "./index.module.scss";

export default function TrendingTag(params) {
  return (
    <section className={styles["trending-tag"]}>
      <ul className={styles["tag-list"]}>
        <li className="tag-item">
          <a href="/tag/1" title="Tag 1">
            FIFA Club World Cup 2025
          </a>
        </li>
        <li className="tag-item">
          <a href="/tag/2" title="Tag 2">
            Người nổi tiếng quảng cáo hàng giả
          </a>
        </li>
        <li className="tag-item">
          <a href="/tag/3" title="Tag 3">
            Sáp nhập tỉnh thành
          </a>
        </li>
      </ul>
    </section>
  );
}

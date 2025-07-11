import ArticleItem from "../article-item";
import styles from "./index.module.scss";

export default function ArticleList({ list }) {
  return (
    <ul className={styles["article-list"]}>
      {list && list.length ? (
        list.map((item) => (
          <li key={item.id}>
            <ArticleItem item={item} hideDescription />
          </li>
        ))
      ) : (
        <li>No articles found</li>
      )}
    </ul>
  );
}

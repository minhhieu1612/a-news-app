import ArticleItem from "../article-item";
import styles from "./index.module.scss";

export default function GridThreeItems({ list }) {
  return (
    <div className={styles["grid-three-items"]}>
      {list
        .filter((_, idx) => idx < 3)
        .map((item, index) => (
          <div className={styles["grid-item"]} key={item.id}>
            <ArticleItem item={item} imgTop hideDescription={index !== 0} />
          </div>
        ))}
    </div>
  );
}

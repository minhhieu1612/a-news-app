import { articleMediaType } from "@/utils/enum";
import styles from "./index.module.scss";

export default function ArticleItem({
  item,
  imgTop,
  hideDescription,
  kind = "",
}) {
  return (
    <div
      key={item.id}
      className={`${styles["article-item"]} ${
        imgTop ? styles["img-top"] : ""
      } ${kind === articleMediaType.IMAGE ? styles["type-image"] : ""}`}
    >
      <a href={item.link}>
        <div className={styles["img-wrapper"]}>
          <img src={item.image} alt={item.title} />
        </div>
        <h3>{item.title}</h3>
        {!hideDescription && <p>{item.description}</p>}
      </a>
    </div>
  );
}

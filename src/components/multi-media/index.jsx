import { articleMediaType } from "@/utils/enum";
import ArticleItem from "../article-item";
import styles from "./index.module.scss";

export default function MultiMedia() {
  const list = [
    {
      id: 1,
      title: "FIFA Club World Cup 2025",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/mfnuy/2025_07_10/Thibaut_Courtois.JPG",
      link: "/news/fifa-club-world-cup-2025",
      kind: articleMediaType.IMAGE
    },
    {
      id: 2,
      title: "Celebrity Scandal",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/hfryz/2024_12_17/2024_12_15T234533Z_810346054_RC2JCBATCW2D_RTRMADP_3_FINTECH_CRYPTO_BITCOIN.JPG",
      link: "/news/celebrity-scandal",
      kind: articleMediaType.IMAGE
    },
    {
      id: 3,
      title: "City Mergers",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/yrfjpyesfly/2025_06_29/DSC_8126_2_znews_3.jpg",
      link: "/news/city-mergers",
      kind: articleMediaType.IMAGE
    },
    {
      id: 5,
      title: "FIFA Club World Cup 2025",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/mfnuy/2025_07_10/Thibaut_Courtois.JPG",
      link: "/news/fifa-club-world-cup-2025",
      kind: articleMediaType.IMAGE
    },
    {
      id: 6,
      title: "Celebrity Scandal",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/hfryz/2024_12_17/2024_12_15T234533Z_810346054_RC2JCBATCW2D_RTRMADP_3_FINTECH_CRYPTO_BITCOIN.JPG",
      link: "/news/celebrity-scandal",
      kind: articleMediaType.IMAGE
    },
  ];
  return (
    <section className={styles["multi-media"]}>
      <div className={styles["section-title"]}>
        <h3 className="category-title">MULTIMEDIA</h3>
        <ul>
          <li>
            <a href="/video">VIDEO</a>
          </li>
          <li>
            <a href="/series/vodcast.html">PODCAST</a>
          </li>
          <li>
            <a href="/series/long-form.html">LONGFORM</a>
          </li>
          <li>
            <a href="/series/zingstory.html">STORY</a>
          </li>
          <li>
            <a href="/series/trac-nghiem-quizz.html">QUIZZ</a>
          </li>
        </ul>
      </div>
      <div className={styles["section-content"]}>
        {list.map((item, index) => (
          <ArticleItem
            key={item.id}
            item={item}
            kind={item.kind}
            imgTop
            hideDescription={index !== 0}
          />
        ))}
      </div>
    </section>
  );
}

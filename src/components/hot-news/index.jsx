import ArticleList from "../article-list";
import GridThreeItems from "../grid-3-items";
import styles from "./index.module.scss";

export default function HotNews() {
  const list = [
    {
      id: 1,
      title: "FIFA Club World Cup 2025",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/mfnuy/2025_07_10/Thibaut_Courtois.JPG",
      link: "/news/fifa-club-world-cup-2025",
    },
    {
      id: 2,
      title: "Celebrity Scandal",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/hfryz/2024_12_17/2024_12_15T234533Z_810346054_RC2JCBATCW2D_RTRMADP_3_FINTECH_CRYPTO_BITCOIN.JPG",
      link: "/news/celebrity-scandal",
    },
    {
      id: 3,
      title: "City Mergers",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/yrfjpyesfly/2025_06_29/DSC_8126_2_znews_3.jpg",
      link: "/news/city-mergers",
    },
    {
      id: 5,
      title: "FIFA Club World Cup 2025",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/mfnuy/2025_07_10/Thibaut_Courtois.JPG",
      link: "/news/fifa-club-world-cup-2025",
    },
    {
      id: 6,
      title: "Celebrity Scandal",
      description:
        "Mẫu túi hình phao mới của Louis Vuitton gây tranh luận trên mạng. Người ví von túi giống bánh donut, người lại cho rằng hãng xa xỉ Pháp đang bán logo thay vì phải chất lượng.",
      image:
        "https://photo.znews.vn/w210/Uploaded/hfryz/2024_12_17/2024_12_15T234533Z_810346054_RC2JCBATCW2D_RTRMADP_3_FINTECH_CRYPTO_BITCOIN.JPG",
      link: "/news/celebrity-scandal",
    },
  ];

  return (
    <section className={styles["hot-news"]}>
      <div className={styles["news-featured"]}>
        <GridThreeItems list={list} />
      </div>
      <div className={styles["news-trending"]}>
        <ArticleList list={list} />
      </div>
    </section>
  );
}

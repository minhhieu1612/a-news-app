'use client';
import ArticleItem from "../article-item";
import Slider from "../slider";
import styles from "./index.module.scss";

export default function BookSection(params) {
  const list = [
    {
      id: 1,
      title: "Sự thật ít biết về nước Nhật qua nếm trải của một du khách",
      image:
        "https://photo.znews.vn/w360/Uploaded/dqmblcvo/2025_07_05/Chris_Broad.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 2,
      title: "Những công chúa Nga không bao giờ được gặp đàn ông",
      image:
        "https://photo.znews.vn/w360/Uploaded/znang2/2025_07_09/LmpwZw.jpeg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 3,
      title: "Tàng kinh các trong lòng tu viện ở TP.HCM",
      image:
        "https://photo.znews.vn/w360/Uploaded/yqdxwpujv/2025_07_07/thumbbookspace2.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 4,
      title: "Sự thật ít biết về nước Nhật qua nếm trải của một du khách",
      image:
        "https://photo.znews.vn/w360/Uploaded/dqmblcvo/2025_07_05/Chris_Broad.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 5,
      title: "Những công chúa Nga không bao giờ được gặp đàn ông",
      image:
        "https://photo.znews.vn/w360/Uploaded/znang2/2025_07_09/LmpwZw.jpeg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 6,
      title: "Tàng kinh các trong lòng tu viện ở TP.HCM",
      image:
        "https://photo.znews.vn/w360/Uploaded/yqdxwpujv/2025_07_07/thumbbookspace2.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 7,
      title: "Sự thật ít biết về nước Nhật qua nếm trải của một du khách",
      image:
        "https://photo.znews.vn/w360/Uploaded/dqmblcvo/2025_07_05/Chris_Broad.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 8,
      title: "Những công chúa Nga không bao giờ được gặp đàn ông",
      image:
        "https://photo.znews.vn/w360/Uploaded/znang2/2025_07_09/LmpwZw.jpeg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 9,
      title: "Tàng kinh các trong lòng tu viện ở TP.HCM",
      image:
        "https://photo.znews.vn/w360/Uploaded/yqdxwpujv/2025_07_07/thumbbookspace2.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
    {
      id: 10,
      title: "Sự thật ít biết về nước Nhật qua nếm trải của một du khách",
      image:
        "https://photo.znews.vn/w360/Uploaded/dqmblcvo/2025_07_05/Chris_Broad.jpg",
      link: "https://znews.vn/du-lich-nhat-ban-post1566313.html",
    },
  ];

  return (
    <section className={styles["book-section"]}>
      <div className={styles["section-title"]}>
        <h3 className="category-title">BOOKS</h3>
      </div>
      <div className={styles["section-content"]}>
        <Slider
          list={list}
          renderItem={(item) => (
            <ArticleItem item={item} imgTop hideDescription />
          )}
        />
      </div>
    </section>
  );
}

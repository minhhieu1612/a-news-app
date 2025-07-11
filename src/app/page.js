import TrendingTag from "@/components/trending-tag";
import styles from "./page.module.scss";
import HotNews from "@/components/hot-news";
import MultiMedia from "@/components/multi-media";
import BookSection from "@/components/book-section";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className="container">
        <TrendingTag />
        <HotNews />
        <BookSection />
        <MultiMedia />
      </div>
    </div>
  );
}

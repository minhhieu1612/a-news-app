import styles from "./index.module.scss";

export default function CategoryPopup({ isVisible }) {
  return (
    <div
      className={`${styles["category-popup"]} ${
        isVisible ? styles.active : ""
      }`}
    >
      <nav className={styles["category-menu"]}>
        <div className="container">
          <ul className={styles["normal-category"]}>
            <li className="category-title xuat-ban ">
              <a href="/xuat-ban" title="Xuất bản">
                Xuất bản
              </a>
            </li>

            <li className="category-title kinh-doanh-tai-chinh ">
              <a
                href="https://znews.vn/kinh-doanh-tai-chinh.html"
                title="Kinh doanh"
              >
                Kinh doanh
              </a>
            </li>

            <li className="category-title cong-nghe ">
              <a href="https://znews.vn/cong-nghe.html" title="Công nghệ">
                Công nghệ
              </a>
            </li>

            <li className="category-title doi-song ">
              <a
                href="https://lifestyle.znews.vn/doi-song.html"
                title="Đời sống"
              >
                Đời sống
              </a>
            </li>

            <li className="category-title tac-gia ">
              <a href="https://znews.vn/tac-gia.html" title="Tác giả">
                Tác giả
              </a>
            </li>

            <li className="category-title suc-khoe ">
              <a
                href="https://lifestyle.znews.vn/suc-khoe.html"
                title="Sức khỏe"
              >
                Sức khỏe
              </a>
            </li>

            <li className="category-title giai-tri ">
              <a href="https://znews.vn/giai-tri.html" title="Giải trí">
                Giải trí
              </a>
            </li>

            <li className="category-title the-thao ">
              <a href="https://znews.vn/the-thao.html" title="Thể thao">
                Thể thao
              </a>
            </li>

            <li className="category-title sach-hay ">
              <a href="https://znews.vn/sach-hay.html" title="Thế giới sách">
                Thế giới sách
              </a>
            </li>

            <li className="category-title du-lich ">
              <a href="https://lifestyle.znews.vn/du-lich.html" title="Du lịch">
                Du lịch
              </a>
            </li>

            <li className="category-title lifestyle ">
              <a
                href="https://lifestyle.znews.vn/lifestyle.html"
                title="Lifestyle"
              >
                Lifestyle
              </a>
            </li>

            <li className="category-title oto-xe-may ">
              <a href="https://lifestyle.znews.vn/oto-xe-may.html" title="Xe">
                Xe
              </a>
            </li>

            <li className="category-title cuon-sach-toi-doc ">
              <a
                href="https://znews.vn/cuon-sach-toi-doc.html"
                title="Cuốn sách tôi đọc"
              >
                Cuốn sách tôi đọc
              </a>
            </li>

            <li className="category-title van-hoa-doc ">
              <a href="https://znews.vn/van-hoa-doc.html" title="Văn hóa đọc">
                Văn hóa đọc
              </a>
            </li>

            <li className="category-title thoi-su ">
              <a href="https://znews.vn/thoi-su.html" title="Xã hội">
                Xã hội
              </a>
            </li>

            <li className="category-title thong-tin-cai-chinh ">
              <a
                href="https://znews.vn/thong-tin-cai-chinh.html"
                title="Cải chính"
              >
                Cải chính
              </a>
            </li>

            <li className="category-title nghien-cuu-xuat-ban ">
              <a
                href="https://znews.vn/nghien-cuu-xuat-ban.html"
                title="Nghiên cứu xuất bản"
              >
                Nghiên cứu xuất bản
              </a>
            </li>

            <li className="category-title phap-luat ">
              <a
                href="https://lifestyle.znews.vn/phap-luat.html"
                title="Pháp luật"
              >
                Pháp luật
              </a>
            </li>

            <li className="category-title the-gioi ">
              <a href="https://znews.vn/the-gioi.html" title="Thế giới">
                Thế giới
              </a>
            </li>

            <li className="category-title giao-duc ">
              <a
                href="https://lifestyle.znews.vn/giao-duc.html"
                title="Giáo dục"
              >
                Giáo dục
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles["channels-menu"]}>
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/series/vodcast.html">
                  <img
                    src="//static.znews.vn/images/channels/podcast_logo_white.svg"
                    alt="Podcast logo"
                  />
                </a>
              </li>
              <li className="longform-logo">
                <a href="/series/long-form.html">
                  <img
                    src="//static.znews.vn/images/channels/longform-logo-white_1.svg"
                    alt="Longform logo"
                  />
                </a>
              </li>
              <li className="chanels-story-logo">
                <a href="/series/zingstory.html">
                  <img
                    src="//static.znews.vn/images/channels/story-logo-white.svg"
                    alt="Story logo"
                  />
                </a>
              </li>
              <li className="lens-logo">
                <a href="/series/lens.html">
                  <img
                    src="//static.znews.vn/images/channels/lens-logo-white_1.svg"
                    alt="Lens logo"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

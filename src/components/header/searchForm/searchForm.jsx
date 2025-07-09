'use client';
import Image from "next/image";
import styles from "./index.module.scss";
import { useState } from "react";

export default function SearchForm() {
  const [isVisibleInput , setVisibleInput] = useState(false);

  return (
    <form
      className={`${styles["search-form"]} ${isVisibleInput ? styles["active"] : ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Nhập nội dung cần tìm..." />
      <button type="submit" onClick={() => setVisibleInput(!isVisibleInput)}>
        <Image width={20} height={20} src="/search.svg" alt="Search" />
      </button>
    </form>
  );
}

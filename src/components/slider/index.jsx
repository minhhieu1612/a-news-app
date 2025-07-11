"use client";
import { useRef, useState } from "react";
import styles from "./index.module.scss";

export default function Slider({ list, renderItem }) {
  const containerRef = useRef();
  const [shiftingPosition, setShiftingPosition] = useState(0);
  const listRef = useRef();

  const swipeLeft = () => {
    const newPosition = shiftingPosition - containerRef.current.clientWidth;

    if (newPosition <= 0) {
      setShiftingPosition(0);
    } else {
      setShiftingPosition(newPosition);
    }
  };

  const swipeRight = () => {
    const containerWidth = containerRef.current.clientWidth,
      listWidth = listRef.current.scrollWidth,
      newPosition = shiftingPosition + containerWidth;

    console.log(containerRef, listRef);
    if (newPosition + containerWidth >= listWidth) {
      setShiftingPosition(listWidth - containerWidth);
    } else {
      setShiftingPosition(newPosition);
    }
  };

  return (
    <div className={styles["slider"]}>
      <div className={styles["slider-container"]} ref={containerRef}>
        <ul
          className={styles["slider-list"]}
          ref={listRef}
          style={{ transform: `translateX(-${shiftingPosition}px)` }}
        >
          {list && list.length
            ? list.map((item) => (
                <li key={item.id} className={styles["slider-item"]}>
                  {renderItem(item)}
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div className={styles["slider-control"]}>
        <button
          className={styles["arrow-left"]}
          onClick={swipeLeft}
          disabled={shiftingPosition === 0}
        >
          {"<"}
        </button>
        <button
          className={styles["arrow-right"]}
          onClick={swipeRight}
          disabled={
            containerRef.current?.clientWidth &&
            listRef.current?.scrollWidth &&
            shiftingPosition + containerRef.current?.clientWidth >=
              listRef.current?.scrollWidth
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

"use client";

import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

export default function Result() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");

  if (search) {
    return (
      <div className={styles.resultMain}>
        <h4>No search result for '{search}'.</h4>
      </div>
    );
  }

  return null;
}
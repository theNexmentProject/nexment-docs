import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar"
import styles from "./page.module.css"
import Form from "next/form"
import Result from "./result"

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search the official Nexment documentation for guides, references, projects, and developer resources.",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Search() {
  return (
    <>
      <Navbar />
      <div className={styles.main} >
        <div className={styles.search} >
          <Form action="/search">
            <input name="query" type="text" placeholder="Search..." />
            <button type="submit" className={styles.searchIcon} ><i className="fa-solid fa-magnifying-glass"></i></button>
          </Form>
        </div>
        <Result />
      </div>
    </>
  );
}
import Navbar from "@/components/navbar/navbar"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.underMaintainence} >
        <h3>This website is under Active Development.</h3>
      </div>
    </>
  );
}

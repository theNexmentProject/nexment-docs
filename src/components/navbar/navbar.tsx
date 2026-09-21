import styles from "./navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={styles.main} >
      <div className={styles.left} >
        <img src="/logo.png" alt="Nexment Logo" />
        <div className={styles.divider} ></div>
        <h1>Nexment Docs</h1>
      </div>
      <div className={styles.right} >
        <Link className={styles.btn} href="/">Home</Link>
        <Link className={styles.btn} href="/search">Search</Link>
        <Link className={styles.cta} href="https://github.com/theNexmentProject"><i className="fa-brands fa-github" ></i> Github</Link>
        <Link className={styles.Smbtn} href="/"><i className="fa-solid fa-home"></i></Link>
        <Link className={styles.Smbtn} href="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
        <Link className={styles.Smcta} href="https://github.com/theNexmentProject"><i className="fa-brands fa-github" ></i></Link>
      </div>     
    </div>
  );
}
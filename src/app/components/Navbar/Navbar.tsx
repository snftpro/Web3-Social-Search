"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {

  return (
    <div className={styles.nav}>
  

    <Link href="https://snft.pro/market" >
          <Image
            src="/pic/h.png"
            width={35}
            height={35}
            alt="" 
            style={{ marginRight: "10px",  marginLeft: "100px" }}
          />
        </Link>

         <Link href="https://t.me/snftprobot/min" className={styles.gradientText}  >
          MINI
          </Link>
          </div>  
  );
}

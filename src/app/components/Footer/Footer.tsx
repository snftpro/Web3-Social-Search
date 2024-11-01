import Link from 'next/link';
import styles from "./Footer.module.css";
import Image from "next/image";
import React from "react";
export default function Footer() {
  return (


      <footer className={styles.footer}>


        <div className={styles.footerLeft}>
        <Link href="/" className={`${styles.homeLink} ${styles.footerLeft}`}>
        <Image 
        src="/snft.png"
        width={50}
        height={50}
        alt="SNFT" 
        />  

       </Link>
       <br/>
       <p className={styles.gradientText}>MultiChain: Marketplace, Launchpad, and Stakes<br/>Contact us: info@snft.pro</p>
        <p className={styles.gradientText}>SNFT &copy; {new Date().getFullYear()} - all Rights Reserved</p>
        </div>


 
  <div className={styles.footerMiddle}>

  <h3 className={styles.footertitle}>Products</h3>

<Link href="/pass" className={styles.gradientText} >
SNFT PASS
</Link>
<Link href="/spstake" className={styles.gradientText} >
SP Staking
</Link>
<Link href="/sstake" className={styles.gradientText} >
S Staking
</Link>
<Link href="/passstake" className={styles.gradientText}>
Pass Staking
</Link>
<Link href="https://game.snft.pro/" className={styles.gradientText} target="_blank" rel="noreferrer">
P2E Game  
</Link>
<Link href="/events" className={styles.gradientText} target="_blank" rel="noreferrer">
Events
</Link>
<Link href="https://t.me/snftprobot/min" className={styles.gradientText} target="_blank" rel="noreferrer">
Mini App
</Link>
<Link href="/freenft" className={styles.gradientText} target="_blank" rel="noreferrer">
Free NFTs
</Link>
  </div>


<div className={styles.footerMiddle}>
<h3 className={styles.footertitle}>Services</h3>

<Link href="/market" className={styles.gradientText}>
Marketplace
</Link>
<Link href="/launchpad" className={styles.gradientText} >
Launchpad
</Link>
<Link href="/pay" className={styles.gradientText}>
SNFT Pay
</Link>
<Link href="/ieo" className={styles.gradientText} >
Token Sale
</Link>
<Link href="/nftstakes" className={styles.gradientText} >
NFT Stakes    
</Link>
<Link href="/erc20stakes" className={styles.gradientText} >
Token Stakes
</Link>
<Link href="/faucets" className={styles.gradientText} >
EVM Faucets
</Link>
<Link href="https://sm.snft.pro/" className={styles.gradientText} >
Web3 Social Search
</Link>
  </div>

  <div className={styles.footerMiddle}>
<h3 className={styles.footertitle}>Explorers</h3>

<Link href="https://polygonscan.com/token/0x81773cfea4f68216c4f20bdaaaae8f73e7b16df9" className={styles.gradientText} target="_blank" rel="noreferrer">
S Token
</Link>
<Link href="https://polygonscan.com/address/0xD819aE315fDF5b22C63394848d9fEf8C7eA8dcEC" className={styles.gradientText} target="_blank" rel="noreferrer">
S Staking
</Link>
<Link href="https://polygonscan.com/token/0xd2e586df315238e01c152eb60f87c8ebcb2d8b70" className={styles.gradientText} target="_blank" rel="noreferrer">
SP Token
</Link>
<Link href="https://polygonscan.com/address/0x8d972005b8A9d93428Ca2EBbEbdE4e9EC63AD54B" className={styles.gradientText} target="_blank" rel="noreferrer">
SP Staking
</Link>
<Link href="https://polygonscan.com/token/0xDeC4f3EC151CeF3154659Bf8F43cC5332c533b93" className={styles.gradientText} target="_blank" rel="noreferrer">
SNFT Pass   
</Link>
<Link href="https://polygonscan.com/address/0xC582B99Ab9b3F59B5aBC059DeE3359F2F2eA7552" className={styles.gradientText} target="_blank" rel="noreferrer">
Pass Staking
</Link>

  </div>

<div className={styles.footerMiddle}>
<h3 className={styles.footertitle}>Documents</h3>

<Link href="https://docs.snft.pro/make-money" className={styles.gradientText} target="_blank" rel="noreferrer">
Make Money
</Link>
<Link href="https://docs.snft.pro/terms-and-conditions" className={styles.gradientText} target="_blank" rel="noreferrer">
Terms of use
</Link>
<Link href="https://docs.snft.pro/privacy-policy" className={styles.gradientText} target="_blank" rel="noreferrer">
Privacy Policy
</Link>
<Link href="https://docs.snft.pro/audit-reports" className={styles.gradientText} target="_blank" rel="noreferrer">
Audit Reports    
</Link>

  </div>
  <div className={styles.footerMiddle}>

<h3 className={styles.footertitle}>Help</h3>
<Link href="https://t.me/joseph178" className={styles.gradientText} target="_blank" rel="noreferrer">
Support
</Link>
<Link href="https://tally.so/r/n911bE" className={styles.gradientText} target="_blank" rel="noreferrer">
Open Ticket
</Link>
<Link href="https://tally.so/r/nrl7VL" className={styles.gradientText} target="_blank" rel="noreferrer">
Request Service
</Link>

</div>



       
        <div className={styles.footerRight}>

        <Link href="https://www.linkedin.com/company/snft/" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/pic/in.png"
              width={60}
              height={60}
              alt="" 
            />
          </Link>

          <Link href="https://x.com/snftpro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/pic/tw.png"
              width={40}
              height={40}
              alt="" 
            />
          </Link>

          <Link href="https://t.me/snftpro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/pic/tel.png"
              width={40}
              height={40}
              alt="" 
            />
          </Link>
          <Link href="https://github.com/snft-pro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/pic/gi.png"
              width={40}
              height={40}
              alt="" 
            />
          </Link>

          <Link href="https://drive.google.com/file/d/1DriR_biVmT3jvAeXM18024rzlJ4WKpNA/view"  className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer" >
            <Image
              src="/pic/andr2.jpg"
              width={40}
              height={40}
              
              
              alt="" 
            />
          </Link>
          
          </div>
       
        
      </footer>

  );
}

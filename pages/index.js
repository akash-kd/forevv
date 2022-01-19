import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Navbar from '../Components/navbar/navbar'
import bg from '../res/bg.svg'

export default function Home() {
  return (
    <div className={styles.cont}>
      <Navbar/>
      <div className={styles.sect}>
        <div className={styles.container}>
          <div className={styles.text}>
            <p className={styles.p1}>A Platform to visualise your <br/>life&apos;s memory lanes</p>
            <p className={styles.p2}>Capture memories in even more<br/> inclusive, immersive & innovative style.</p>
            <div className={styles.b_cont}>
              <button className={styles.button1}>Contact Us!</button>
              <button className={styles.button2}>Sign Up</button>
            </div>
            <div className={styles.c_cont}>
              <p className={styles.p_text}>Comming Soon!</p>
              <div className={styles.img_cont}>
                <div className={styles.app_store}><Image  src='/app_store.svg' layout="fixed" height={55} width={165} alt='app store'/></div>
                <div className={styles.play_store}><Image src='/play_store.svg' layout="fixed" height={55} width={165} alt='play store'/></div>
              </div>
            </div>
          </div>
          <Image src='/home.svg' width={824.5} height={490.57} layout='fixed' className={styles.image} alt='home image'/>
        </div>
        
      </div>
    </div>

  )
}

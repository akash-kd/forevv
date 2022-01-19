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
            <p className={styles.p1}>A Platform to visualise your life&apos;s memory lanes</p>
            <p className={styles.p2}>Capture memories in even more inclusive, immersive & innovative style.</p>
            <div className={styles.b_cont}>
              <button className={styles.button1}>Contact Us!</button>
              <button className={styles.button2}>Sign Up</button>
            </div>
            <div className={styles.c_cont}>
              <p className={styles.p_text}>Comming Soon!</p>
              <div>
                <Image className={styles.app_store} src='/app_store.svg' layout="fixed" height={100} width={100} alt='app store'/>
                <Image className={styles.play_store}src='/play_store.svg' layout="fixed" height={100} width={100} alt='play store'/>
              </div>
            </div>
          </div>
          <Image src='/home.svg' width={700} height={500} layout='fixed' className={styles.image} alt='home image'/>
        </div>
        
      </div>
    </div>

  )
}

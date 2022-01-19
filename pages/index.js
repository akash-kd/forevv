import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'
import Navbar from '../Components/navbar/navbar'
import bg from '../res/bg.svg'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.cont}></div>
    </div>

  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Nadvar from './Components/Nadvar/Nadvar'
import Portada from './Components/Portada/Portada'
import Footer from './Components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.son}>
        <Nadvar />
        <Portada />
        <Footer />
      </div>
    </div>
  )
}

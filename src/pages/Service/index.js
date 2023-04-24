import React from 'react'
import Nadvar from '../Components/Nadvar/Nadvar'
import Footer from '../Components/Footer/Footer'
import styles from './Service.module.css'
import Image from 'next/image'
import img from '../../assets/contabilidad.jpg'
import img1 from '../../assets/sistemas.jpg'
import img2 from '../../assets/general.jpg'
import Link from 'next/link'


const index = () => {
  return (
    <div className={styles.father}>
      <Nadvar />
      <div className={styles.Cards}>
        <div class={styles.container}>
          <div class={styles.card_box}>
            <span></span>
            <Link href={'/Contabilidad'}><Image src={img} className={styles.img}/></Link>
          </div>

          <div class={styles.card_box}>
            <span className={styles.sistemas}></span>
            <Link href={'/Sistemas'}><Image src={img1} className={styles.img}/></Link>
          </div>

          <div class={styles.card_box}>
            <span className={styles.serviciosgenerales}></span>          
            <Link href={'/Servicios_Generales'}><Image src={img2} className={styles.img}/></Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
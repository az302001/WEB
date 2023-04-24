import React from 'react'
import Nadvar_Interno from '../Components/Nadvar_Interno/Nadvar_Interno'
import styles from './contabilidad.module.css'
import Footer from '../Components/Footer/Footer'
import img1 from '../../assets/producto01.jpg'
import Image from 'next/image'
import img2 from '../../assets/producto02.jpg'
import img3 from '../../assets/producto03.jpg'
import img4 from '../../assets/producto04.jpg'
import img5 from '../../assets/producto05.jpg'
import img6 from '../../assets/producto06.jpg'
import img7 from '../../assets/producto07.jpg'




const index = () => {
  return (
    <div>
      <div className={styles.container}>
        <Nadvar_Interno />
        <div className={styles.data}>
          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img1} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Sistemas Integrados de Gestión</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img2} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Sistemas de Facturación Electrónica</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img3} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Sistemas para Instituciones Publicas y Privadas</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img4} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Paginas Web Personalizadas</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img5} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Sistemas Contables con Libros Electrónicos</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>

          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img6} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Sistemas de Planillas</p>           
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>

          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img7} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Sistemas de Comercio Electrónico</p>
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default index
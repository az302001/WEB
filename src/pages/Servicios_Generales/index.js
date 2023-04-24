import React from 'react'
import Nadvar_Interno from '../Components/Nadvar_Interno/Nadvar_Interno'
import img1 from '../../assets/General01.jpg'
import img2 from '../../assets/General02.jpg'
// import img3 from '../../assets/General03.jgp'
import img4 from '../../assets/General04.jpg'
import img5 from '../../assets/General05.jpg'
import img6 from '../../assets/General06.jpg'
import img7 from '../../assets/General07.jpg'
import Image from 'next/image'
import styles from './Servicios_General.module.css'
import Footer from '../Components/Footer/Footer'



const index = () => {
  return (

    <div>
      <div className={styles.container}>
        <Nadvar_Interno />
        <div className={styles.data}>
          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img1} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Tributos</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img2} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Constitución de Empresas</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          {/* <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img3} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Declaraciones de SUNAT</p>
              
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div> */}


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img4} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Planillas</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>


          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img5} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Fizcalización de SUNAT</p>
              {/* <p className={styles.text}>Here are the details of the card</p> */}
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>

          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img6} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Facturación Electrónica</p>
            </div>
            <button className={styles.button}>Mas informacion</button>
          </div>

          <div className={styles.card}>
            <div className={styles.contentimage}><Image src={img7} className={styles.imagen} /></div>
            <div className={styles.detail}>
              <p className={styles.title}>Libros Electrónicos</p>
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
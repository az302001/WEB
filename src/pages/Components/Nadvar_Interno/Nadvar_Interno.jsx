import React from 'react'
import styles from './Nadvar_Interno.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'




const Nadvar_Interno = () => {

  const router = useRouter()


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Bievenido a la tienda AOSC</h1>
        </div>
        <div className={styles.Buscador}>
          <div className={styles.continput}>
            <input type="text" placeholder='Buscar' className={styles.input} />
          </div>
          <div className={styles.contboton}>
            <button className={styles.boton}>Buscar</button>
          </div>
          <div className={styles.return}>
            {/* <Link href={'/Service'} ><button className={styles.retorno}>🡐 Regresar</button></Link> */}

            <button className={styles.retorno} onClick={()=>router.back()}>🡐 Regresar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nadvar_Interno
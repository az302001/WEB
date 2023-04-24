import React from 'react'
import image from '../../../assets/Imagen.jpg'
import styles from './Portada.module.css'
import Image from 'next/image'
import img01 from '../../../assets/mision.jpg'
import img02 from '../../../assets/valores.jpg' 
import img03 from '../../../assets/futuro.jpg' 


function Portada() {
  return (
    <div className={styles}>
      <div className={styles.contentImagen}>
        <Image src={image} className={styles.imagen} />
      </div>
      <div className={styles.ContainerMision}>
        {/* <h1 className={styles.mision}>¿Cual es nuestra mision?</h1> */}
        <div className={styles.datamision}>
          <div className={styles.text}>
          <h1 className={styles.mision}>¿Cual es nuestra mision?</h1>
            <p>Empresa orientada a brindar servicios de calidad, con el respaldo de nuestra experiencia en los Sistemas Informáticos, Contabilidad y Servicios Generales en el Sector Privado, Público y en General; ofreciendo las mejores soluciones con un Staff de profesionales altamente competentes y comprometidos con los estándares de calidad, seguridad y medio ambiente.</p>
            <Image src={img01} className={styles.imgdata} />
          </div>
        </div>

        <div className={styles.contentdata}>

          <div className={styles.containerVision}>
            <div className={styles.vision}> <h1>¿Cual es nuestra Vision?</h1></div>
            <div className={styles.datavision}>
              <p>Empresa orientada a brindar servicios de calidad, con el respaldo de nuestra experiencia en los Sistemas Informáticos, Contabilidad y Servicios Generales en el Sector Privado, Público y en General; ofreciendo las mejores soluciones con un Staff de profesionales altamente competentes y comprometidos con los estándares de calidad, seguridad y medio ambiente.</p>
              <Image src={img03} className={styles.imgvision} />
              </div>
          </div>

          <div className={styles.containerValores}>
            <div className={styles.Valores}> <h1>Nuestros Valores</h1></div>
            <div className={styles.dataValores}><b>HONESTOS:</b>Hacemos lo que decimos y decimos lo que hacemos. <b>SENCILLOS:</b> Creemos que las cosas buenas, mientras más simples sean, mejores son. TESONEROS: Trabajamos duro hasta alcanzar lo que queremos. <b>SERVICIALES:</b>Nos apasiona la idea de servir con amabilidad a los demás. <b>JUSTOS:</b> Procuramos tratar a otros como deseamos que nos traten a nosotros
            <Image src={img02} className={styles.imgvalores} />
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Portada

import React from 'react'
import  Services from '../../data/Services.json';
import styles from './Service.module.css';
import ServiceCard from './ServiceCard';

export const Service = () => {
  return (
    <div >
        <section className={styles.container}>
            <h1 className={styles.title} id='services'>Services</h1>
            <div className={styles.Services}>
                {
                    Services.map((service,id) => {
                        return(
                            <ServiceCard ked={id} service={service}/>
                        )
                    }
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Service

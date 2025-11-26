import "@fontsource/roboto";
import styles from './hero.module.css'
import { getImageUrl } from '../../util'
export const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Solve Your Problems With Us Professionals In Thier Field </h1>
            <p className={styles.description}><b>Message us </b> to find out how our handyMan Make your home the way you want </p>
            <div className={styles.buttons}>
              <button className={styles.btn}>Hire A Pro</button>
              <button className={styles.btn}>Book A Service</button>
            </div>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/Hero.png")} alt="" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </div>
  )
}


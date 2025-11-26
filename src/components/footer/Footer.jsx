import React from 'react'
import styles from './footer.module.css';
export const Footer = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.content}>
        <div className={styles.contentA}>
          <ul className={styles.contentAul}>
              <li><h3>The HandyFix happiness Guarantee</h3></li>
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help</li>
              <li>Contact Us</li>
              <li></li>
              <li></li>
              <li>Be a Professional</li>
              <li>Retail Partnerships</li>
          </ul>
        </div>
        <div className={styles.contentB}> 
          <ul className={styles.contentBul}>
             <li><h3>LOCATIONS</h3></li>
             <li>Hyderabad</li>
             <li>Bangaluru</li>
             <li>Mumbai</li>
             <li>Jaipur</li>
             <li>Pune</li>
             <li>Delhi</li>
             <li>Gurgaon</li>
             <li>Chennai</li>
             <li>Lucknow</li>
          </ul>
        </div>
        <div>
          <ul>
             <li><h3>POPULAR SERVICES</h3></li>
             <li>Cleaning</li>
             <li>Plumbing</li>
             <li>Electrical</li>
             <li>HandyMan</li>
             <li>Moving help</li>
             <li>Painting</li>
             <li>Furniture Assembly</li>
             <li>Tv mounting</li>
             <li>Hanging</li>
          </ul>
        </div>
      </div>
      <div className={styles.contentone}>
        <div className={styles.contentoneimgOne}>
        <img src="./footer/appdownload.png" alt="" />
        </div>
        <div className={styles.contentoneimg}>
          <img  src="./footer/twitter.png" title='Twitter' alt="twitter" />
          <img  src="./footer/fb.png" title='facebook' alt="facebook" />
          <img  src="./footer/insta.png" title='instagram' alt="instagram" />
          <img  src="./footer/linkdin.png" title='linkdin' alt="linkdin" />
          <img  src="./footer/wikiped.png" title='wikipedia' alt="wikipedia" />
        </div>
      </div>
      <hr  className={styles.hr}/>
      <div className={styles.contenttwo}>
        <div className={styles.contenthead}>
            <h3>Other HandyFix services</h3>
          </div>
        <div className={styles.contentother}>
          <div>
            <ul>
              <li>Best maid services in HYD</li>
              <li>Hyderabad cleaning services</li>
              <li>Cleaning services in Banglore</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Office cleaning services </li>
              <li>House Cleaning service near me</li>
              <li>House cleaning service tempa</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>housekeeping</li>
              <li>move out cleaning service</li>
              <li>Hyd office cleaning services</li>
            </ul>
          </div>
        </div>
      </div> 
      <hr  className={styles.hr}/>
      <div className={styles.contentthree}>
        <ul className={styles.contentthreeul}>
          <li>Contact</li>
          <li>Privacy</li>
          <li>CA Pre-collection Notice</li>
          <li>Don't Sell or share my personal Information</li>
          <li>Cookies</li>
          <li>Terms</li>
          <li>Cancellation Policy</li>
          <li>2025 HandyFix All Rights Reserved</li>
        </ul>
      </div>
      <div className={styles.contentfour}>
        <p>
          HandyFix by NITESH
        </p>
      </div>
    </footer>
  )
}

export default Footer


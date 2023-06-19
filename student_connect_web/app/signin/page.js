import './globals.css'
import styles from './page.module.css'
import Image from 'next/image'
import { Poppins, Lato, Manrope } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '600' })
const lato = Lato({ subsets: ['latin'], weight: '700' })
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '800'] })

export default function SigninPage() {
  function Validate() {
    console.log(50)
  }
    return (
    <>
      <div className={[styles.navbar, manrope.className].join(' ')}>
        <span>Manakula Vinayagar Institute of Technology</span>
      </div>
      <div className='container'>
        <div className={styles.login_box_split}>
          <div className={styles.login_box}>
            <div className={styles.login_box_head}>
              <span className={[styles.project_name, manrope.className].join(' ')}>Student's Connect</span>
              <span className={[styles.sign_text, lato.className].join(' ')}>Sign In</span>
              <span className={[styles.sign_bottom_text, manrope.className].join(' ')}>Enter your Enrolment ID and password to sign in</span>                
            </div>
            <form onSubmit={Validate()} className={styles.login_box_form}>
              <input id='enroll' name='enroll' type='text' placeholder='Enroll ID' className={poppins.className} required></input>
              <input id='password' name='password' type='password' placeholder='Password' className={poppins.className} required></input>
              <button className={manrope.className} type='submit'>Sign In</button>
            </form>
          </div>
          <div className={styles.login_box_banner}>
              <Image className='logo' alt='logo' src="/mvit.png" width="150" height="150" />
              <span className={[styles.banner_text, manrope.className].join(' ')}>Student's Connect Get Latest College Information and View your College Profile</span>
          </div>
        </div>
      </div>
      <div className={`${poppins.className} ${styles.footer}`}>
        <span className={styles.footer_name}>Student's Connect</span>
        <span className={styles.footer_creator}>Yuvaraja.M CSE-B Ist Year</span>
      </div>
    </>
    )
}

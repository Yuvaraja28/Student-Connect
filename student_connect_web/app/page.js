import './globals.css'
import Image from 'next/image'
import styles from './page.module.css'
import { Poppins, Manrope, Josefin_Sans} from 'next/font/google'
import SideMenu from '@/components/sidemenu'

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700', '800'] })
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })
const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['500', '600', '700'] })

function DegreeWrapper({heading, value}) {
  return (
    <div className={styles.degree_details}>
      <span className={[styles.degree_heading, poppins.className].join(' ')}>
        {heading}
      </span>
      <span className={[styles.degree_value, manrope.className].join(' ')}>
        {value}
      </span>
      </div>
  )
}

function SubjectWrapper({subname, substaff}) {
  return (
    <>
      <div className={styles.subject_box_inner}>
        <span className={[styles.subject_name, poppins.className, styles.gradient_text].join(' ')}>
          {subname}
        </span>
        <span className={[styles.subject_staff, manrope.className].join(' ')}>
          {substaff}
        </span>
      </div>
    </>
  )  
}

export default async function ProfilePage() {
  const user_data = await (await fetch('http://127.0.0.1:8000/', {cache: "no-store"})).json()
  return (
    <>
      <div className={styles.container}>
        <SideMenu />
        <div className={styles.main_page}>
          <span className={[josefin.className, styles.clg_name, styles.gradient_text].join(' ')}>
            Manakula Vinayagar Institute of Technology
          </span>
          <div className={styles.profile_bar}>
            <span className={[josefin.className, styles.welcome_msg].join(' ')}>
              Welcome, <span className={styles.gradient_text}>{user_data.name[0].toUpperCase() + user_data.name.slice(1)}</span>
            </span>
            <Image className={styles.profile_icon} src={'/avatars/' + user_data.profile_icon} width='55' height='55' alt='ProfileIcon' />
          </div>
          <div className={styles.degree_box}>
            <DegreeWrapper heading='Degree' value={'B.Tech ' + user_data.degree.toUpperCase()} />
            <DegreeWrapper heading='Year / Semester' value={user_data.year + ' / ' + user_data.semester} />
            <DegreeWrapper heading='Enrolment Number' value={user_data.enroll} />
          </div>
          <div className={styles.subject_box}>
            <span className={[styles.subject_box_heading, poppins.className].join(' ')}>Subjects</span>
            <div className={styles.subject_box_nested}>
              {user_data.subjects.map((sub) => <SubjectWrapper key={sub} subname={sub.name.split(' ').map((sub) => sub[0].toUpperCase() + sub.slice(1) + ' ')} substaff={sub.staff} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
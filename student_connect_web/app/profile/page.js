import '../globals.css'
import Image from 'next/image'
import styles from './page.module.css'
import { Poppins, Manrope, Josefin_Sans} from 'next/font/google'
import SideMenu from '@/components/sidemenu'

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700', '800'] })
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })
const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['500', '600', '700'] })

function ProfileWrapper({profilename, profilevalue}) {
  return (
    <>
      <div className={styles.profile_box_inner}>
        <span className={[styles.profile_name, poppins.className, styles.gradient_text].join(' ')}>
          {profilename}
        </span>
        <span className={[styles.profile_value, manrope.className].join(' ')}>
          {profilevalue}
        </span>
      </div>
    </>
  )  
}

export default async function SettingsPage() {
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
          <div className={styles.profile_box}>
            <span className={[styles.profile_box_heading, poppins.className].join(' ')}>
              Profile
            </span>
            <div className={styles.profile_box_nested}>
              <ProfileWrapper profilename="Enrolment Number" profilevalue={user_data.enroll} />
              <ProfileWrapper profilename="Degree" profilevalue="B.Tech" />
              <ProfileWrapper profilename="Course" profilevalue={user_data.degree.toUpperCase()} />
              <ProfileWrapper profilename="Class" profilevalue={user_data.class} />
              <ProfileWrapper profilename="Name" profilevalue={user_data.name[0].toUpperCase() + user_data.name.slice(1)} />
              <ProfileWrapper profilename="Gender" profilevalue={user_data.gender[0].toUpperCase() + user_data.gender.slice(1)} />
              <ProfileWrapper profilename="Year" profilevalue={user_data.year} />
              <ProfileWrapper profilename="Semester" profilevalue={user_data.semester} />
              <ProfileWrapper profilename="Blood Group" profilevalue={user_data.blood.toUpperCase()} />
              <ProfileWrapper profilename="Phone Number" profilevalue={user_data.phone} />
              <ProfileWrapper profilename="Email ID" profilevalue={user_data.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
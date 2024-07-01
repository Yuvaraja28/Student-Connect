import '../globals.css'
import Image from 'next/image'
import styles from './page.module.css'
import { Poppins, Manrope, Josefin_Sans} from 'next/font/google'
import SideMenu from '@/components/sidemenu'

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700', '800'] })
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '600', '700', '800'] })
const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['500', '600', '700'] })

function NoticeWrapper({noticename, noticevalue}) {
  return (
    <>
      <div className={styles.notice_box_inner}>
        <span className={[styles.notice_name, poppins.className, styles.gradient_text].join(' ')}>
          {noticename}
        </span>
        <span className={[styles.notice_value, manrope.className].join(' ')}>
          {noticevalue}
        </span>
      </div>
    </>
  )  
}

export default async function NoticePage() {
  const user_data = await (await fetch('http://127.0.0.1:8000/', {cache: "no-store"})).json()
  const notice_data = await (await fetch('http://127.0.0.1:8000/notice', {cache: "no-store"})).json()
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
              Welcome, <span className={styles.gradient_text}>{user_data.name}</span>
            </span>
            <Image className={styles.profile_icon} src={'/avatars/' + user_data.profile_icon} width='55' height='55' alt='ProfileIcon' />
          </div>
          <div className={styles.notice_box}>
            <span className={[styles.notice_box_heading, poppins.className].join(' ')}>
              Recent Annoucement
            </span>
            <div className={styles.notice_box_nested}>
              {notice_data.map((notice_data) => <NoticeWrapper key={notice_data.sender} noticename={notice_data.sender} noticevalue={notice_data.data} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
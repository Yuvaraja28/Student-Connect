import Link from "next/link"
import { FiHome } from "react-icons/fi";
import { GrAnnounce } from "react-icons/gr";
import { RiAccountCircleLine } from "react-icons/ri";
import styles from '@/app/page.module.css'

export default function SideMenu() {
  return (
    <div className={styles.side_menu}>
      <div className={styles.side_menu_inner}>
        <Link href='/'>
          <FiHome size={20} />
        </Link>
        <Link href='/notice'>
          <GrAnnounce size={20} />
        </Link>
        <Link href='/profile'>
          <RiAccountCircleLine size={20} />
        </Link>
      </div>
    </div>
  )
}
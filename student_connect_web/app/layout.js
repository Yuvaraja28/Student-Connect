import './globals.css'
import { Poppins, Lato, Manrope } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['700', '500', '600'] })
const lato = Lato({ subsets: ['latin'], weight: '700' })
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '800'] })

export const metadata = {
  title: 'Student Connect',
  description: "Student's Connect - Created by Yuvaraja.M, Manakula Vinayagar Institute of Technology",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

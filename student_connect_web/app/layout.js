import './globals.css'

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

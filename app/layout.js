import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Megaexe.com',
  description: 'Deploy your App, MVP and software products all with a unified IT pack tailored to your business.',
  image: "/public/logo.png",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}</body>
    </html>
  )
}

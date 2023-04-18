import { Inter } from 'next/font/google'

import Samp from "@components/samp/ComponentE"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Samp country="ph" number="1234"/>
    </div>
  )
}
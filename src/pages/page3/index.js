import { Inter } from 'next/font/google'
import Foot from "@components/foot/ComponentC"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Foot year="2022-2023" section="4-4"/>
    </div>
  )
}
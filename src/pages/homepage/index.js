import Ads from "@components/ads/ComponentA"
import Button from "@components/button/ComponentB"
import Foot from "@components/foot/ComponentC"
import Head from "@components/head/ComponentD"
import Samp from "@components/samp/ComponentE"
import styles from '@styles/Home.module.css'


export default function App(){
  return (
      <div>
          <Ads name="Jemmalyn" information="im a girl"/>
          <Button age="22" address="123 teresa St. Sta Mesa Manila"/>
          <Foot year="2022-2023" section="4-4"/>
          <Head school="PUP" mall="MEGAMALL "/>
          <Samp country="ph" number="1234"/>
      </div>
  )
}
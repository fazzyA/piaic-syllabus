import * as React from "react";
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Hero from '../components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
             {/* <Head>
        <title>Syllabus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <div >
          <Header />
          <Hero />
          <Navigation />
        </div>
        <div className={styles.center}>
        </div>
      </main>
    </>
  )
}

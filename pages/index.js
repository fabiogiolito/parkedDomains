import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import styles from '../styles/Home.module.css'

export default function Home() {

  const { protocol, host } = absoluteUrl(req)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {host}!
        </h1>
      </main>

    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Test() {
  const router = useRouter()
  const { id } = router.query

  if (!id) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Test Next.js Export</title>
                <meta name="description" content="Edited from create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Loading...
                </h1>
            </main>
      </div>
    )
  }

  const tryParse = parseInt(id as string, 10)
  const followingId = isNaN(tryParse) ? `${id}_more` : tryParse + 1

    return (
        <div className={styles.container}>
            <Head>
                <title>Test Next.js Export</title>
                <meta name="description" content="Edited from create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Test ID {id}
                </h1>

                <div className={styles.grid}>
                    <Link href={`/test/${followingId}`}>
                        <a className={styles.card}>
                            <h2>ID {followingId} &rarr;</h2>
                            <p>The next id</p>
                        </a>
                    </Link>

                    <Link href="/test">
                        <a className={styles.card}>
                            <h2>Test &rarr;</h2>
                            <p>The test page</p>
                        </a>
                    </Link>

                    <Link href="/">
                        <a className={styles.card}>
                            <h2>Back Home &rarr;</h2>
                        </a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Testing{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

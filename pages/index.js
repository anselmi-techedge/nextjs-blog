import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm <strong>Shu</strong>. I'm a software enginer and
                    a translator (English/Japanese). You can contact me on{' '}
                    <a href="https://twitter.com/" target="_blank">
                        Twitter
                    </a>
                    .
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn" target="_blank">
                        our Next.js tutorial
                    </a>
                    .)
                </p>
                <p>
                    Go to the{' '}
                    <Link href="/posts/first-post">
                        <a>first post</a>
                    </Link>
                    !
                </p>
            </section>
        </Layout>
    )
}

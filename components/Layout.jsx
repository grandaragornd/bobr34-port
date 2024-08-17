import Head from 'next/head'
export default function Layout ({ children, title = 'BOBR34' }) {
    return (
      <>
        <Head>
        <title>{title}</title>
        <meta name="Bobr34" content="Bobr34 website" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <main>
        {children}
      </main>
    </>
  )
}
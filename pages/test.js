import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Test() {
  return (
    <div className="container">
      <Head>
        <title>Test page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Testing test page" />
        <p className="description">
          Get started by testing this.
        </p>
      </main>

      <Footer />
    </div>
  )
}

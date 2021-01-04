import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="" content=""/>
        </Head>
        <body className="bg-blue-100"> 
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
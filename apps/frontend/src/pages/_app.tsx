import Layout from '@components/Layout'
import SEO from '@components/SEO'
import '@styles/scss/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO 
        title ={"freelamed"}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

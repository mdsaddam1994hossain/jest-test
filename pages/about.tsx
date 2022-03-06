import Link from 'next/link'
import Layout from '@components/Layout'
import HotelList from '@hotel/HotelList'

const AboutPage = () => (


  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>

    <HotelList />
   
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>

  </Layout>
)

export default AboutPage

import Layout from '../../components/Layout'
import IntroSection from '../../components/IntroSection'
import WishingMessagesSection from '../../components/WishingMessagesSection'
import PhotoGallerySection from '../../components/PhotoGallerySection'
import MemoriesSection from '../../components/MemoriesSection'
import ClosingSection from '../../components/ClosingSection'
import Footer from '../../components/Footer'

export default function Home({ params }: { params: { name: string } }) {
  const { name } = params

  return (
    <Layout>
      <IntroSection name={name} />
      <WishingMessagesSection name={name} />
      <PhotoGallerySection />
      <MemoriesSection name={name} />
      <ClosingSection name={name} />
      <Footer />
    </Layout>
  )
}


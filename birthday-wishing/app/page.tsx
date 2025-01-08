import Layout from '../components/Layout'
import IntroSection from '../components/IntroSection'
import WishingMessagesSection from '../components/WishingMessagesSection'
import PhotoGallerySection from '../components/PhotoGallerySection'
import MemoriesSection from '../components/MemoriesSection'
import ClosingSection from '../components/ClosingSection'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <IntroSection name="Raajesh" />
      <WishingMessagesSection name="Raajesh" />
      <PhotoGallerySection />
      <MemoriesSection name="Raajesh" />
      <ClosingSection name="Raajesh" />
    </Layout>
  )
}


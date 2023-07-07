import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ChartLineUp } from 'phosphor-react'
import { PopularBooks } from '@/components/PopularBooks'
import { HomePageContainer } from '@/components/HomePage/styles'
import { LatestBookReviews } from '@/components/LastestBookReview'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomePageContainer>
      <h1>
        <ChartLineUp size="32" />
        Início
      </h1>

      <div>
        <LatestBookReviews />
        <PopularBooks />
      </div>
    </HomePageContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage

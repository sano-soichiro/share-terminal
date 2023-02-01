import { NextPage } from 'next'
import Header from './component/header'
import Comment from './component/top/comment'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Comment />
    </>
  )
}

export default Home

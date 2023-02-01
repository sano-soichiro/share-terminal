import { NextPage } from 'next'
import Header from '../component/header'
import Communities from '../component/community/communities'

const Name: NextPage = () => {
  return (
    <>
      <Header />
      <Communities />
      <h2>コミュニティ名</h2>
    </>
  )
}

export default Name

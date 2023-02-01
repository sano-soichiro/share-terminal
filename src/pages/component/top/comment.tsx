import { NextPage } from 'next'
import Follow from './follow'
import Profile from './profile'
import Threads from './threads'
import Likes from './likes'
import Views from './Views'

const Comment: NextPage = () => {
  return (
    <>
      <section>
        <div>
          <Profile />
          <Follow />
        </div>
        <div>
          <p>投稿内容</p>
        </div>
        <div>
          <Threads />
          <Likes />
          <Views />
        </div>
      </section>
    </>
  )
}

export default Comment

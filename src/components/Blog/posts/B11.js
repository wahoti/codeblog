import cake from './imgs/B11/cake.jpg'
import mom from './imgs/B11/mom.jpg'
import bkfst from './imgs/B11/bkfst.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={cake} alt="cake" blurb="Raspbery Lemon Poppyseed" />
    <Img src={mom} alt="mom" blurb="happy birthday mom!" />
    <Img src={bkfst} alt="bkfst" blurb="Breakfast" />
  </>
)

export default Post

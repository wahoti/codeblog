import bagels from './imgs/B7/bagels.jpg'
import sando from './imgs/B7/sando.jpg'
import bkfst from './imgs/B7/bkfst.jpg'
import curry from './imgs/B7/curry.jpg'
import soup from './imgs/B7/soup.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={bagels} alt="bagels" blurb="bagels" />
    <Img src={sando} alt="sando" blurb="sando" />
    <Img src={bkfst} alt="bkfst" blurb="breakfast" />
    <Img src={curry} alt="curry" blurb="curry" />
    <Img src={soup} alt="soup" blurb="barley soup" />
  </>
)

export default Post

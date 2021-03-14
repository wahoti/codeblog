import curry from './imgs/B9/curry.jpg'
import noodles from './imgs/B9/noodles.jpg'
import thaitea from './imgs/B9/thaitea.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={curry} alt="curry" blurb="curry" />
    <Img src={noodles} alt="noodles" blurb="noodles" />
    <Img src={thaitea} alt="thaitea" blurb="thaitea" />
  </>
)

export default Post

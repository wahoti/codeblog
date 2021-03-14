import yum from './imgs/B3/yum.jpg'
import nan from './imgs/B3/nan.jpg'
import bkfst from './imgs/B3/bkfst.jpg'
import sando from './imgs/B3/sando.jpg'
import sasag from './imgs/B3/sasag.jpg'
import chaiwip from './imgs/B3/chaiwip.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={yum} alt="yum" blurb="yum" />

    <Img src={nan} alt="nan" blurb="nan" />

    <Img src={bkfst} alt="bkfst" blurb="breakfast" />

    <Img src={sando} alt="sando" blurb="sando" />

    <Img src={sasag} alt="sasag" blurb="sasag" />

    <Img src={chaiwip} alt="chaiwip" blurb="chaiwip" />
  </>
)

export default Post

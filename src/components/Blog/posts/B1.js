import katsu from './imgs/B1/katsu.jpg'
import schwarma from './imgs/B1/schwarma.jpg'
import kabuli from './imgs/B1/kabuli.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={katsu} alt="katsu" blurb="katsu" />

    <Img src={schwarma} alt="schwarma" blurb="schwarma" />

    <Img src={kabuli} alt="kabuli" blurb="kabuli" />
  </>
)

export default Post

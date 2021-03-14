import turkey from './imgs/B2/turkey.jpg'
import pietea from './imgs/B2/pietea.jpg'
import chaiwip from './imgs/B2/chaiwip.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={turkey} alt="turkey" blurb="turkey!" />

    <Img src={pietea} alt="pietea" blurb="tea time" />

    <Img src={chaiwip} alt="chaiwip" blurb="chai wip" />
  </>
)

export default Post

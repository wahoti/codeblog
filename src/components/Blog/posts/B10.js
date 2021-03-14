import meatbol from './imgs/B10/meatbol.jpg'
import noodle from './imgs/B10/noodle.jpg'
import sauce from './imgs/B10/sauce.jpg'
import wip from './imgs/B10/wip.jpg'
import salad from './imgs/B10/salad.jpg'
import ready from './imgs/B10/ready.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={meatbol} alt="meatbol" blurb="meatbol" />
    <Img src={noodle} alt="noodle" blurb="noodle" />
    <Img src={sauce} alt="sauce" blurb="sauce" />
    <Img src={wip} alt="wip" blurb="wip" />
    <Img src={salad} alt="salad" blurb="salad" />
    <Img src={ready} alt="ready" blurb="ready" />
  </>
)

export default Post

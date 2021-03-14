import ingredients from './imgs/B8/ingredients.jpg'
import pattys from './imgs/B8/pattys.jpg'
import wip from './imgs/B8/wip.jpg'
import grillin from './imgs/B8/grillin.jpg'
import salad from './imgs/B8/salad.jpg'
import ready from './imgs/B8/ready.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={ingredients} alt="ingredients" blurb="ingredients" />
    <Img src={pattys} alt="pattys" blurb="pattys" />
    <Img src={grillin} alt="grillin" blurb="grillin" />
    <Img src={wip} alt="wip" blurb="wip" />
    <Img src={salad} alt="salad" blurb="salad" />
    <Img src={ready} alt="ready" blurb="ready" />
  </>
)

export default Post

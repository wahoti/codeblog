import salmon from './imgs/B5/salmon.jpg'
import sauce from './imgs/B5/sauce.jpg'
import sauced from './imgs/B5/sauced.jpg'
import ready from './imgs/B5/ready.jpg'


import Img from '../Img'

const Post = () => (
  <>
    <Img src={salmon} alt="salmon" blurb="salmon" />
    <Img src={sauce} alt="sauce" blurb="sauce" />
    <Img src={sauced} alt="sauced" blurb="sauced" />
    <Img src={ready} alt="ready" blurb="ready" />
  </>
)

export default Post

import din1 from './imgs/B6/din1.jpg'
import din2 from './imgs/B6/din2.jpg'
import din3 from './imgs/B6/din3.jpg'
import din4 from './imgs/B6/din4.jpg'
import thai from './imgs/B6/thai.jpg'
import cutie from './imgs/B6/cutie.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={din1} alt="din1" blurb="din1" />
    <Img src={din2} alt="din2" blurb="din2" />
    <Img src={din3} alt="din3" blurb="din3" />
    <Img src={din4} alt="din4" blurb="din4" />
    <Img src={thai} alt="thai" blurb="thai" />
    <Img src={cutie} alt="cutie" blurb="cutie" />
  </>
)

export default Post

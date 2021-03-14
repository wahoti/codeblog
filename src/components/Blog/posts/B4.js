import cookie1 from './imgs/B4/cookie1.jpg'
import cookie2 from './imgs/B4/cookie2.jpg'
import cookie3 from './imgs/B4/cookie3.jpg'
import cookie4 from './imgs/B4/cookie4.jpg'
import dinner from './imgs/B4/dinner.jpg'
import turkey from './imgs/B4/turkey.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <Img src={cookie1} alt="cookie1" blurb="cookie1" />

    <Img src={cookie2} alt="cookie2" blurb="cookie2" />

    <Img src={cookie3} alt="cookie3" blurb="cookie3" />

    <Img src={cookie4} alt="cookie4" blurb="cookie4" />

    <Img src={dinner} alt="dinner" blurb="dinner" />

    <Img src={turkey} alt="turkey" blurb="turkey" />
  </>
)

export default Post

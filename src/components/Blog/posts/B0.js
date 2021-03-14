import fruityBkfst from './imgs/B0/fruity-bkfst.jpg'
import pancakeBkfst from './imgs/B0/pancake-bkfst.jpg'
import egghole from './imgs/B0/egghole.jpg'
import eggholeBacon from './imgs/B0/egg-hole-bacon.jpg'
import bkfst from './imgs/B0/bkfst-1.jpg'
import cinabun from './imgs/B0/cinabun.jpg'
import chaiCouple from './imgs/B0/chai-couple.jpg'

import Img from '../Img'

const Post = () => (
  <>
    <p>Hi welcome to my food blog :)</p>
    <p>To get things started will show some nice breakfasts.</p>

    <Img src={fruityBkfst} alt="fruity-bfkst" blurb="fruity breakfast" />

    <Img src={chaiCouple} alt="chai-couple" blurb="chai for two" />

    <Img src={pancakeBkfst} alt="pancake-bfkst" blurb="pancake breakfast" />

    <Img src={bkfst} alt="bkfst" blurb="egghole breakfast" />

    <Img src={egghole} alt="egghole" blurb="egg hole" />

    <Img src={eggholeBacon} alt="eggholeBacon" blurb="egg hole & turkey bacon" />

    <Img src={cinabun} alt="cinabun" blurb="cinabun!" />
  </>
)

export default Post

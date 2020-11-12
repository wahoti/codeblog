import fruityBkfst from './imgs/B0/fruity-bkfst.jpg'
import pancakeBkfst from './imgs/B0/pancake-bkfst.jpg'
import egghole from './imgs/B0/egghole.jpg'
import eggholeBacon from './imgs/B0/egg-hole-bacon.jpg'
import bkfst from './imgs/B0/bkfst-1.jpg'

import cinabun from './imgs/B0/cinabun.jpg'
import chaiCouple from './imgs/B0/chai-couple.jpg'

// import katsu from './imgs/B0/katsu.jpg'
// import schwarma from './imgs/B0/schwarma.jpg'

const Post = () => (
  <div className="post-wrapper">
    <h3 className="primaryColor">Thu Nov 12 2020</h3>
    <h3 className="primaryColor">First post! introduction</h3>

    <p>Hi welcome to my food blog :)</p>
    <p>To get things started will show some nice breakfasts the past couple months.</p>

    <div className="img-wrapper">
      <img src={fruityBkfst} alt="fruity-bfkst" />
      <div className="img-blurb"><p>fruity breakfast</p></div>
    </div>

    <div className="img-wrapper">
      <img src={chaiCouple} alt="chai-couple" />
      <div className="img-blurb"><p>chai for two</p></div>
    </div>

    <div className="img-wrapper">
      <img src={pancakeBkfst} alt="pancake-bfkst" />
      <div className="img-blurb"><p>pancake breakfast</p></div>
    </div>

    <div className="img-wrapper">
      <img src={bkfst} alt="bfkst" />
      <div className="img-blurb"><p>breakfast</p></div>
    </div>

    <div className="img-wrapper">
      <img src={egghole} alt="egghole" />
      <div className="img-blurb"><p>egg hole</p></div>
    </div>

    <div className="img-wrapper">
      <img src={eggholeBacon} alt="eggholebacon" />
      <div className="img-blurb"><p>egg hole & turkey bacon</p></div>
    </div>

    <div className="img-wrapper">
      <img src={cinabun} alt="cinabun" />
      <div className="img-blurb"><p>cinabun!</p></div>
    </div>
  </div>
)

export default Post

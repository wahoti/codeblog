import katsu from './imgs/B0/katsu.jpg'
import schwarma from './imgs/B0/schwarma.jpg'
import kabuli from './imgs/B0/kabuli.jpg'

const Post = () => (
  <div className="post-wrapper">
    <h3 className="primaryColor">Thu Nov 12 2020</h3>
    <h3 className="primaryColor">Second post! lunches</h3>

    <div className="img-wrapper">
      <img src={katsu} alt="katsu" />
      <div className="img-blurb"><p>katsu</p></div>
    </div>

    <div className="img-wrapper">
      <img src={schwarma} alt="schwarma" />
      <div className="img-blurb"><p>schwarma</p></div>
    </div>

    <div className="img-wrapper">
      <img src={kabuli} alt="kabuli" />
      <div className="img-blurb"><p>kabuli</p></div>
    </div>
  </div>
)

export default Post

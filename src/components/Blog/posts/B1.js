import katsu from './imgs/B1/katsu.jpg'
import schwarma from './imgs/B1/schwarma.jpg'
import kabuli from './imgs/B1/kabuli.jpg'

const Post = () => (
  <>
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
  </>
)

export default Post

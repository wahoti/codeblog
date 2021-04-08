import React from 'react'

const Img = ({ src, alt, blurb }) => (
  <div className="img-wrapper">
    <img src={src} alt={alt} />
    <div className="img-blurb">
      <p>{blurb}</p>
    </div>
  </div>
)

export default Img

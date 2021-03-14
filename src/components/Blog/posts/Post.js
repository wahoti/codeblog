const Post = ({ title, date, children }) => (
  <div className="post-wrapper">
    <h3 className="primaryColor">{date}</h3>
    <h3 className="primaryColor">{title}</h3>
    {children}
  </div>
)

export default Post
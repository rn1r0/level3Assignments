import PropTypes from 'prop-types';

const BlogPost = ({ title, subTitle, author, date }) => (
  <div className="post-preview">
    <a href="post.html">
      <h2 className="post-title">{title}</h2>
      <h3 className="post-subtitle">{subTitle}</h3>
    </a>
    <p className="post-meta">Posted by
      <a href="#">{author}</a>
      on {date}</p>
  </div>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogPost;


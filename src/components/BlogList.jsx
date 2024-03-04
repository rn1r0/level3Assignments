import BlogPost from './BlogPost.jsx';
import data from '../data.jsx';

const BlogList = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        {data.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  </div>
);

export default BlogList;

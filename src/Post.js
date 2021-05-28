import React from "react";
import PropTypes from 'prop-types';

function Post({ id, title, removePost }) {
  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => removePost(id)}>
        X
      </button>
      <div className="Post__title">{title}</div>
      <img
        className="Post__image"
        src={`https://source.unsplash.com/random?sig=${id}`}
      />
    </div>
  );
}

Post.propTypes = {
  id : PropTypes.number,
  title : PropTypes.string,
  removePost : PropTypes.func,
}

export default Post;

import React from "react";

import Image from "next/image";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts
        .map((post) => (
          <div key={post.id}>
            <div className="presscoverage-main-frame-middle blog-main-middle">
              <div className="presscoverage-main-frame-middle-left">
                <div className="presscoverage-main-frame-middle-left-heading">
                  
                  <h2>{post.title}</h2>
                </div>
                <div className="presscoverage-main-frame-middle-left-heading-middle">
                 
                 
                  <p>{post.title}</p>
                </div>
                <div className="track-your-college-left-link">
                
                </div>
              </div>
        
            </div>
          </div>




        ))
        .reverse()}
    </>
  );
};

export default Posts;

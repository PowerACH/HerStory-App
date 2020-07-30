import React from 'react';

const PostFormat = (post) => {
    return (
        <article className = "photoContainer">
                <header>
                    <div className = "postUser">
                        <div className = "postProfileImg">
                            <img src={post.userImage} alt="profile" />
                        </div>
                        <div className = "postUserName">
                            {post.username}
                        </div>
                    </div>
                </header>
                <div className = "imagePost">
                    <div className = "imagePostImage">
                        <img src={post.postImage} alt="Post"/>
                    </div>
                </div>
                <div className = "caption">
                    <strong>{post.username}</strong>  {post.imageCaption}
                </div>
            </article>
    )
}

export default PostFormat;
import React from "react";
import './Post.css';
import PostFormat from './PostFormat'

    
// export default class Post extends React.Component {
const Post = ({posts}) => {

    // render() {
        return (
            <div>
                {
                    posts.map(post => {
                        console.log(post.userImage)
                    return (
                        <div>
                        {/* <div>{post.username}</div> */}
                    <PostFormat post={post} key={post.id} />
                    </div>
                    )
                })}
            </div>
        )
    // }
}

export default Post;
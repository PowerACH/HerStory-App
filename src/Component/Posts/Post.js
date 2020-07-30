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
                    return (
                    <PostFormat post={post} key={post.id} />
                    )
                })}
            </div>
        )
    // }
}

export default Post;
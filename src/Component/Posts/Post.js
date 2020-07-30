import React from "react";
import './Post.css';
import PostData from './data.json'

    
// export default class Post extends React.Component {
const Post = (posts) => {

    // render() {
        return (
            <div>
        {posts && posts.map((post, i) => {
            return 
            <article className = "photoContainer" key={i}>
                <header>
                    <div className = "postUser">
                        <div className = "postProfileImg">
                            <img src={details.userImage} alt="profile" />
                        </div>
                        <div className = "postUserName">
                            {details.username}
                        </div>
                    </div>
                </header>
                <div className = "imagePost">
                    <div className = "imagePostImage">
                        <img src={details.postImage} alt="Post"/>
                    </div>
                </div>
                <div className = "caption">
                    <strong>{details.username}</strong>  {details.imageCaption}
                </div>
            </article>
        })}
            </div>
        )
    // }
}
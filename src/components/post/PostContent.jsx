import React from 'react';
import PostImage from '../../../src/images/postImage.png'
import myPost from './post.module.css'

const PostContent = () => {
    return (
        <div className={myPost.content_container}>
            <div className={myPost.post_text}>
                Hey everyone!
                Today, I'd like to share my recent experience with optimizing algorithms for large datasets.
                I recently encountered efficiency issues in my project and decided to explore new approaches to memory management.
                After several experiments, I managed to significantly speed up the data processing, leading to a noticeable improvement in the application's performance.
                I'm eager to hear your thoughts and experiences on this topic!
            </div>
            <div className={"post_image_container"}>
                <img className={"post_image"} src={PostImage} alt={''}/>
            </div>
        </div>
    );
};

export default PostContent;
import React from 'react';
import PostAuthor from '../../../src/images/AuthorDefault.png'
import myPost from './post.module.css'
const PostData = () => {
    return (
        <div className={myPost.post_data_container}>
            <div className={"author_img"}>
                <img src={PostAuthor} alt={PostAuthor}/>
            </div>
            <div className={myPost.post_data_info_container}>
                <div className={"author_name"}>Alex Pidors</div>
                <div className={myPost.post_time}>15:38 &#183; Today</div>
            </div>
        </div>
    );
};

export default PostData;
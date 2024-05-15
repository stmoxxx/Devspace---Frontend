import React from 'react';
import PostData from "./PostData";
import PostContent from "./PostContent";
import myPost from './post.module.css'

const PostItem = () => {
    return (
        <div className={"container post d-flex justify-content-center mt-5 ps-5"}>
            <div className={myPost.post_container}>
                <PostData/>
                <PostContent/>
            </div>
        </div>
    );
};

export default PostItem;
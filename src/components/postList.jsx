import React from 'react';
import PostItem from './postItem';
import {Card, Space} from 'antd';

const PostList = ({posts, remove, update}) => {
    return (
        <div>
            {posts.map((post) => {
                return <Space className="todo-container">
                    <Card className="todo-posts">
                        <PostItem update={update} remove={remove} post={post} key={post.id} id={post.id}/>
                    </Card>
                </Space>
            })}
        </div>

    );
};

export default PostList;
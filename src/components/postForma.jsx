import React from 'react';
import { Input } from 'antd';

const PostForm = ({ create, title, onChange }) => {
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: title,
        };
        create(newPost);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addNewPost(event);
        }
    };

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <Input
                value={title}
                className="new-todo"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="What you need?"
            />
        </div>
    );
};

export default PostForm;
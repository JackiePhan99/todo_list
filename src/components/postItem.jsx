import React, { useState } from 'react';
import { Button, Input, Checkbox  } from 'antd';

const PostItem = ({ post, update, remove, id }) => {
    const [isChecked, setIsChecked] = useState(post.isChecked);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(post.title);

    const handleCheckboxChange = () => {
        setIsChecked((prevChecked) => !prevChecked);
        const updatedPost = { ...post, id, isChecked: !isChecked };
        update(id, updatedPost);
    };

    const handleEditClick = () => {
        setIsEditing((prevEditing) => !prevEditing);
    };

    const handleInputChange = (e) => {
        setEditedContent(e.target.value);
    };

    const handleSaveClick = () => {
        const updatedPost = { ...post, id, title: editedContent };
        update(id, updatedPost);
        setIsEditing(false);
    };

    const removePost = () => {
        remove(id);
    };

    return (
        <div>
            <ul className="todo-list">
                <li className="todo-block">
                    <div className={`todo-item`}>
                        <Checkbox
                            className="todo-checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        {isEditing ? (
                            <Input
                                className="todo-edit-input"
                                type="text"
                                value={editedContent}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <div className={`todo-content ${isChecked ? 'completed' : ''}`}>{post.title}</div>
                        )}
                    </div>
                    <div className="post-btn">
                        {isEditing ? (
                            <Button className="todo-save" onClick={() => handleSaveClick()}>
                                Save
                            </Button>
                        ) : (
                            <Button className="todo-edit" onClick={handleEditClick}>
                                Edit
                            </Button>
                        )}
                        <Button className="todo-delete" onClick={removePost} type="primary" danger>
                            delete
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default PostItem;
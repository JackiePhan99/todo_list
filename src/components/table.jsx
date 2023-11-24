import React, {useState} from 'react';
import {Button, Space, Table, Tag, Modal, Input} from 'antd';

const Tables = ({posts, update, remove}) => {

    const [editedContent, setEditedContent] = useState('');
    const [isChecked, setIsChecked] = useState('');
    const [isId, setIsId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = ({title, id, isChecked}) => {
        setIsModalOpen(true);
        setIsId(id);
        setIsChecked(isChecked);
        setEditedContent(title)
    };

    const handleInputChange = (e) => {
        setEditedContent(e.target.value);
    };

    const handleSaveClick = () => {
        const updatedPost = { id: isId, title: editedContent, isChecked:isChecked};
        console.log('updatedPost:', updatedPost);
        update( isId, updatedPost);
        setIsModalOpen(false);
    };

    const removePost = (id) => {
        remove(id);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: 100,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: 200,
        },
        {
            title: 'Status',
            dataIndex: 'isChecked',
            key: 'tags',
            width: 100,
            render: (val) => {
                const color = val ? 'green' : 'red';
                return <Tag color={color}>
                    {val ? 'Completed' : 'Active'}
                </Tag>
            }
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            render: (text, record) => {
                return (<Space size="middle">
                    <Button className="todo-edit" onClick={() => handleEditClick(text)}>
                        Edit
                    </Button>
                    <Button className="todo-delete" onClick={() => removePost(text.id)} type="primary" danger>Delete</Button>
                </Space>);
            }
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={posts}/>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleSaveClick} onCancel={handleCancel}>
                <Input
                    className="todo-edit-input"
                    type="text"
                    value={editedContent}
                    onChange={handleInputChange}
                />
            </Modal>
        </div>
    )
};
export default Tables;
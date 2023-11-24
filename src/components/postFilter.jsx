import React from 'react';
import { Button, Card } from 'antd';

const PostFilter = ({ handleFilter }) => {
    return (
        <Card className="post_filter">
            <Button type="text" onClick={() => handleFilter('all')}>all</Button>
            <Button type="text" onClick={() => handleFilter('active')}>active</Button>
            <Button type="text" onClick={() => handleFilter('completed')}>completed</Button>
        </Card>
    );
};

export default PostFilter;
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostForm from '../components/postForma';
import PostList from "../components/postList";
import PostFilter from "../components/postFilter";
import Navbar from '../components/navbar';
import '../styles/App.css';
import {getPosts, createPost, updatePost, deletePost} from '../mockapi/api';
import Table from "../components/table";
import {paths} from "../constants/paths";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState('all');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const handleCreatePost = async () => {
        const postData = {
            title: title,
        }
        try {
            const createdPost = await createPost(postData);
            setTitle('');
            setPosts((prevPosts) => [...prevPosts, createdPost.data]);
            console.log('Created post:', createdPost);
        } catch (error) {
            console.error('Error creating post:', error)
        }
    };

    const handleUpdatePost = async (postId, updatedPost) => {
        try {
            const response = await updatePost(postId, updatedPost);
            setPosts((prevPosts) =>
                prevPosts.map((post) => (post.id === postId ? updatedPost : post))
            );
            console.log(response)
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            const response = await deletePost(postId);
            console.log(response);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleFilter = (type) => {
        setFilter(type);
    }

    const filteredData = () => {
        switch (filter) {
            case 'all':
                return posts;
            case 'active':
                return (posts.filter((post) => post.isChecked === false));
            case 'completed':
                return (posts.filter((post) => post.isChecked === true));
            default:
        }
    }

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Todo-List</h1>
                </header>
                <Navbar />
                <main className="App-main">
                    <Routes>
                        <Route exact path={paths.home} element={<PostForm create={handleCreatePost} title={title} onChange={setTitle}/>} />
                        <Route path={paths.posts} element={<PostList update={handleUpdatePost} remove={handleDeletePost} posts={filteredData()}/>} />
                        <Route path={paths.table} element={<Table update={handleUpdatePost} remove={handleDeletePost} posts={filteredData()}/>} />
                    </Routes>
                </main>
                <footer>
                    <PostFilter handleFilter={handleFilter} />
                </footer>
            </div>
        </Router>
    );
};

export default Posts;
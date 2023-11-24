import axios from 'axios';

const API_BASE_URL = 'https://65532dd65449cfda0f2e424f.mockapi.io/api/v1/todolist'; // Замените на вашу базовую URL-адрес API

export const getPosts = () => {
    return axios.get(`${API_BASE_URL}`);
};

export const createPost = (postData) => {
    return axios.post(`${API_BASE_URL}`, postData);
};

export const updatePost = (postId, updatedPostData) => {
    return axios.put(`${API_BASE_URL}/${postId}`, updatedPostData);
};

export const deletePost = (postId) => {
    return axios.delete(`${API_BASE_URL}/${postId}`);
};
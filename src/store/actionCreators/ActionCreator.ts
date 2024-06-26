import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (url: string) => {
    const response = await axios.get(url);

    return response.data;
  },
);
//
// export const removePost = createAsyncThunk(
//   'news/removePost',
//   async (postId: string, thunkApi) => {
//     await axios.delete(`http://localhost:3000/news/${postId}`);
//
//     return postId;
//   },
// );
//
// export const addPost = createAsyncThunk(
//   'news/addPost',
//   async (articleData: User, thunkApi) => {
//     await axios.post('http://localhost:3000/news', articleData);
//
//     return articleData;
//   },
// );

import { createSlice } from '@reduxjs/toolkit';
import { User } from '../models/User';
import { fetchPositions, fetchUsers } from '../actionCreators/ActionCreator';
import { Position } from '../models/Position';

interface UsersState {
    users: User[];
    isLoadingUsers: boolean;
    error: string;
    currentPage: number;
    totalPages: number;
    nextUrl: string;
    positions: Position[];
}

const initialState: UsersState = {
  users: [],
  isLoadingUsers: false,
  error: '',
  currentPage: 0,
  totalPages: 0,
  nextUrl: '',
  positions: [],
};

export const usersSlice = createSlice({
  initialState,
  name: 'news',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const existingUserIds = new Set(state.users.map((user) => user.id));
      const newUsers = action.payload.users.filter((user: User) => !existingUserIds.has(user.id));

      state.isLoadingUsers = false;
      state.error = '';
      state.users = [...state.users, ...newUsers];
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.nextUrl = action.payload.links.next_url;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoadingUsers = true;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoadingUsers = false;
      state.error = action.error.message || 'Failed to fetch users';
    });
    builder.addCase(fetchPositions.fulfilled, (state, action) => {
      state.positions = action.payload.positions;
    });
  },
});
export default usersSlice.reducer;

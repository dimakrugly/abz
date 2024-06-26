import { createSelector } from '@reduxjs/toolkit';
// import { User } from '../models/User';
import { RootState } from '../store';
//

export const selectUsers = (state: RootState) => state.usersReducer.users;
// export const selectQuery = (state: RootState) => state.newsReducer.query;
// export const selectArticleById = createSelector(
//   [selectNews, selectArticleId],
//   (news, articleId) => news.find((article) => article.id === articleId),
// );
//
// export const selectFilteredData = createSelector(
//   [selectQuery, selectNews],
//   (query, data) => {
//     if (query) {
//       const regex = new RegExp(query, 'i');
//       return data.filter((item) => regex.test(item.title) || regex.test(item.content));
//     }
//
//     return data;
//   },
// );

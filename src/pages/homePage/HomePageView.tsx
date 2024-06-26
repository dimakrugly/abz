import React from 'react';
import { HomePageViewProps } from './HomePageTypes';
import { Header } from '../../components/header/Header';
import { Field } from './sections/field/Field';
import { List } from './sections/list/List';
import { PostForm } from './sections/postForm/PostForm';

export const HomePageView :React.FC<HomePageViewProps> = ({
  users,
  handleLoadNextPage,
  isLoadingUsers,
  isLastPage,
  positions,
}) => (
  <>
    <Header />
    <Field />
    <List
      users={users}
      handleLoadNextPage={handleLoadNextPage}
      isLoadingUsers={isLoadingUsers}
      isLastPage={isLastPage}
    />
    <PostForm positions={positions} />
  </>
);

import { Header } from '../../components/header/Header';
import { Field } from './sections/field/Field';
import { List } from './sections/list/List';
import { PostForm } from './sections/postForm/PostForm';

export const HomePageView = () => (
  <>
    <Header />
    <Field />
    <List />
    <PostForm />
  </>
);

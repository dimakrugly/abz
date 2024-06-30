import React from 'react';
import './List.scss';
import { ListItem } from '../../../../components/itemList/ListItem';
import { Button } from '../../../../components/button/Button';
import { ListProps } from './ListTypes';
import { Preloader } from '../../../../components/preloader/Preloader';

export const List:React.FC<ListProps> = ({
  users,
  handleLoadNextPage,
  isLoadingUsers,
  isLastPage,
}) => (
  <section className="list">
    <h1 className="list__title">Working with GET request</h1>
    <ul className="list__items">
      {users.map((user) => (
        <ListItem user={user} key={user.id} />
      ))}
    </ul>
    <div className="list__button">

      {isLoadingUsers ? <Preloader /> : (
        <Button
          text="Show more"
          onClick={handleLoadNextPage}
          disabled={isLastPage}
        />
      )}
    </div>
  </section>
);

import React from 'react';
import { ListItemProps } from './listItemTypes';
import './ListItem.scss';

export const ListItem: React.FC<ListItemProps> = ({ user }) => (
  <div className="listItem">
    <img
      src={user.photo}
      alt="user_photo"
      className="listItem__photo"
    />
    <p className="listItem__name">{user.name}</p>
    <div className="listItem__info">
      <p>{user.position}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  </div>
);

import './List.scss';
import { ListItem } from '../../../../components/itemList/ListItem';
import { Button } from '../../../../components/button/Button';

const users = [
  {
    id: '30',
    name: 'Angel',
    email: 'angel.williams@example.com',
    phone: '+380496540023',
    position: 'Designer',
    position_id: '4',
    registration_timestamp: 1537777441,
    photo: 'https://frontend-test-assignment-api.abz.agency/images/users/667ae017d151522303.jpeg',
  },
  {
    id: '29',
    name: 'Mattie',
    email: 'mattie.lee@example.com',
    phone: '+380204819073',
    position: 'Designer',
    position_id: '4',
    registration_timestamp: 1537691099,
    photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1245cc29.jpeg',
  },
  {
    id: '36',
    name: 'Joshua',
    email: 'joshua.dean@example.com',
    phone: '+380542161925',
    position: 'Designer',
    position_id: '4',
    registration_timestamp: 1537661281,
    photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1e527036.jpeg',
  },
  {
    id: '37',
    name: 'Lisa',
    email: 'lisa.medina@example.com',
    phone: '+380564753087',
    position: 'Security',
    position_id: '3',
    registration_timestamp: 1537639019,
    photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba20bd9537.jpeg',
  },
  {
    id: '42',
    name: 'Lorraine',
    email: 'lorraine.morris@example.com',
    phone: '+380945198009',
    position: 'Designer',
    position_id: '4',
    registration_timestamp: 1537629182,
    photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg',
  },
  {
    id: '422',
    name: 'Lorraine',
    email: 'lorraine.morris@example.com',
    phone: '+380945198009',
    position: 'Designer',
    position_id: '4',
    registration_timestamp: 1537629182,
    photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg',
  },
];

export const List = () => (
  <section className="list">
    <h1 className="list__title">Working with GET request</h1>
    <ul className="list__items">
      {users.map((user) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <ListItem user={user} key={user.id} />
      ))}
    </ul>
    <div className="list__button">
      <Button text="Show more" />
    </div>
  </section>
);

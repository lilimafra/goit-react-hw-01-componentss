import PropTypes from 'prop-types';

import css from './Friends.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  // console.log(id, avatar, name, isOnline);
  return (
    <li className={css.item}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.offline}`
        }
      ></span>

      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

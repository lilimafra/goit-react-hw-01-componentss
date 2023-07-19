import PropTypes from 'prop-types';
import styledp from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styledp.profile}>
      <div className={styledp.description}>
        <img src={avatar} alt="User avatar" className={styledp.avatar} />
        <p className={styledp.name}>{username}</p>
        <p className={styledp.tag}>@{tag}</p>
        <p className={styledp.location}>{location}</p>
      </div>

      <ul className={styledp.stats}>
        <li>
          <span className={styledp.label}>Followers</span>
          <span className={styledp.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styledp.label}>Views</span>
          <span className={styledp.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styledp.label}>Likes</span>
          <span className={styledp.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

import PropTypes from 'prop-types';
import styleS from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styleS.statistics}>
      {title ? <h2 className={styleS.title}>{title}</h2> : null}
      <ul className={styleS.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={styleS.item} key={id}>
              <span className={styleS.label}>{label}</span>
              <span className={styleS.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

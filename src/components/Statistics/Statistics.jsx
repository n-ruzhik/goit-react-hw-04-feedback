import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <h2 className={css.label}>Statistics</h2>
      <ul className={css.btnValueList}>
        {Object.keys(options).map(name => (
          <li key={name} className={css[name]}>
            <p>
              {name}: {options[name]}
            </p>
          </li>
        ))}
      </ul>
      <ul className={css.calcDataList}>
        <li className={css.total}>
          <p className={css.text}>Total: {total}</p>
        </li>
        <li className={css.positivePercentage}>
          <p className={css.text}>Positive feedback: {positivePercentage}</p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

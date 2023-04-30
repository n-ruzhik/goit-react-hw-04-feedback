import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, names }) => (
  <ul className={css.button__list}>
    {names.map((name) => (
      <li key={name}>
        <button
          type="button"
          className={css.glowButton}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
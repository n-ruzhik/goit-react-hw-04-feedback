import css from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({message}) => {
    return <p className={css.notificationText}>{message}</p>;
}

export default Notification;


Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
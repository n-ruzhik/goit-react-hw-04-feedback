import css from "./Section.module.css";
import PropTypes from 'prop-types';


const Section = ({ title='', children }) => {
    return (
        <section className={css.section}>
            {title && (
                <h1 title='Please leave feedback' className={css.title}>{title}</h1>)}
            {children}
        </section>
    )
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
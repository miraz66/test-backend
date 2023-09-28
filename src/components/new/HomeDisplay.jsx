import PropTypes from "prop-types";
import BodySvg from "./BodySvg";

function HomeDisplay({ children, css }) {
  return (
    <div className={css}>
      <BodySvg />
      {children}
    </div>
  );
}

HomeDisplay.propTypes = {
  children: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
};

export default HomeDisplay;

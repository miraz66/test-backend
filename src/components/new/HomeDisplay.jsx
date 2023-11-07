import PropTypes from "prop-types";
import BodySvg from "../BodySvg";

function HomeDisplay({ children, className, svgHeight }) {
  return (
    <div>
      <BodySvg className={svgHeight} />
      <div className={className}>{children}</div>
    </div>
  );
}

HomeDisplay.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  svgHeight: PropTypes.string.isRequired,
};

export default HomeDisplay;

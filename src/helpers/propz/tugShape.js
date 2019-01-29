import PropTypes from 'prop-types';

const tugShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  mmsi: PropTypes.number.isRequired,
  homeport: PropTypes.string,
  currentLat: PropTypes.number,
  currentLon: PropTypes.number,
  speed: PropTypes.number,
  captain: PropTypes.string.isRequired,
  inEdit: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default {
  tugShape,
};

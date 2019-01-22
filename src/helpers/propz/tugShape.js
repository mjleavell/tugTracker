import PropTypes from 'prop-types';

const tugShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  mmsi: PropTypes.number.isRequired,
  homeport: PropTypes.string.isRequired,
  homeportLat: PropTypes.number.isRequired,
  homeportLon: PropTypes.number.isRequired,
  captain: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default {
  tugShape,
};

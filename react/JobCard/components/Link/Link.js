import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ link, children, id, payload, ...restProps }) => {
  return (<a href={link} onClick={() => console.log(id, payload)} {...restProps}>{children}</a>);
};

export default Link;
Link.propTypes = {
  link: PropTypes.string,
  id: PropTypes.string,
  payload: PropTypes.object,
  children: PropTypes.node
};

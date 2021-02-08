import React from 'react';
import PropTypes from 'prop-types';

function Techitem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

Techitem.defaultProps = {
  tech: ''
}
Techitem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Techitem;
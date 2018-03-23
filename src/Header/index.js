import React from 'react'
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.app_name ? this.props.app_name : 'Super Cool App'}</h2>
      </div>
    )
  }
}

Header.propTypes = {
  app_name: PropTypes.string
}

export default Header

import React from "react";

export default React.createClass({
  propTypes: {
    src: React.PropTypes.string
  },
  render: function() {
    return (<iframe width="100%" height="520" frameBorder="0" src={this.props.src} allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>);
  }
});

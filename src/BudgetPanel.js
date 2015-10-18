import React from "react";
import CartoDBView from "./CartoDBView";
import {Panel} from "react-bootstrap";

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render: function() {

    const title = (
      <h3>{this.props.title}</h3>
    );

    let content = (
      <span>Panel content of style {this.props.type}</span>
    );

    if(this.props.type === "cartoDB"){
      content = (<CartoDBView src={this.props.dataset} />);
    }

    return (
      <div>
        <Panel header={title}>
          {content}
        </Panel>
      </div>
    );
  },
});

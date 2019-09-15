import React from 'react'
import PropTypes from 'prop-types';
import classnames from "classnames";

class Collapsible extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {
    isExpanded: false,
    height: 0
  }

  bodyRef = React.createRef();

  handleToggle = e => {
    e.preventDefault();
    this.setState(prevState => {
      if (!prevState.isExpanded) {
        return {
          isExpanded: true,
          height: this.bodyRef.current.clientHeight
        }
      }

      return {
        isExpanded: false
      }
    });
  }

  render() {
    const { isExpanded, height } = this.state;
    const { title, children } = this.props;

    const panelClasses = classnames(
      "panel",
      { "panel--expanded": isExpanded }
    );

    const currentHeight = isExpanded ? height : 0;

    return (
      <div className={panelClasses}>
        <div className="panel-heading" onClick={this.handleToggle}>
          <h2>{title}</h2>
        </div>
        <div
          className="panel-collapse"
          style={{ height: currentHeight }}
        >
          <div
            className="panel-body"
            ref={this.bodyRef}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapsible

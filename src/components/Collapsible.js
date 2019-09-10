import React from 'react'
import PropTypes from 'prop-types';
import classnames from "classnames";

class Collapsible extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {
    isExpanded: true,
    height: null
  }

  collapsibleRef = React.createRef();

  handleToggle = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }))
  }

  componentDidMount() {
    this.setState({
      isExpanded: false,
      height: this.collapsibleRef.current.clientHeight
    })
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
          ref={this.collapsibleRef}
        >
          <div className="panel-body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapsible

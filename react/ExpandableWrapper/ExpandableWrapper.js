import styles from './ExpandableWrapper.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'seek-asia-style-guide/react';
import classnames from 'classnames';

export default class ExpandableWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPanelOpened: false,
      component: this.props.component,
      lblExpand: this.props.lblExpand,
      lblShrink: this.props.lblShrink,
      panelExpandHeight: {
        maxHeight: `${this.props.maxHeight}px`
      },
      panelShrinkHeight: {
        maxHeight: `${this.props.shrinkHeight}px`
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //console.log('Stateful component successfully mounted.');
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isPanelOpened: !this.state.isPanelOpened
    });
  }

  render() {
    return (
      <div className={classnames({ [styles.root]: true })} >
        <div className={classnames(styles.panel)} style={this.state.isPanelOpened ? this.state.panelExpandHeight : this.state.panelShrinkHeight}>{this.state.component}</div>
        <div><Button color='callToAction' onClick={this.handleClick}>{this.state.isPanelOpened ? this.lblShrink : this.props.lblExpand}</Button></div>
      </div>
    );
  }
}

ExpandableWrapper.propTypes = {
  component: PropTypes.function,
  shrinkHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  lblExpand: PropTypes.string,
  lblShrink: PropTypes.string
};

ExpandableWrapper.defaultProps = {
  shrinkHeight: 50,
  maxHeight: 1000,
  lblExpand: 'Show more',
  lblShrink: 'Show less'
};

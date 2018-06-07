import styles from './ShowMore.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ChevronIcon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';
export default class ShowMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      component: this.props.component,
      lblShowMore: this.props.lblShowMore,
      lblShowLess: this.props.lblShowLess,
      showLessHeight: this.props.showLessHeight,
      contentHeight: 0,
      styleShowLessHeight: {
        maxHeight: `${this.props.showLessHeight}px`
      },
      isPanelOpened: false,
      showButton: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const cHeight = document.getElementById(this.state.id).clientHeight;

    this.setState({
      styleShowMoreHeight: {
        maxHeight: `${cHeight}px`
      },
      contentHeight: cHeight,
      showButton: cHeight > this.state.showLessHeight
    });
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
        <div className={classnames(styles.panel)} style={this.state.isPanelOpened ? this.state.styleShowMoreHeight : this.state.styleShowLessHeight}>
          <div id={this.state.id}>{this.state.component}</div>
        </div>
        {this.state.showButton && <Button id='btnShowMore' color='hyperlink' className={classnames(styles.button)} onClick={this.handleClick}>
          <span>
            {this.state.isPanelOpened ? this.props.lblShowLess : this.props.lblShowMore}  </span>
          <span>
            <ChevronIcon direction={this.state.isPanelOpened ? 'up' : 'down'} />
          </span>
        </Button>
        }
      </div>
    );
  }
}

ShowMore.propTypes = {
  id: PropTypes.string.isRequired,
  component: PropTypes.function,
  showLessHeight: PropTypes.number,
  lblShowMore: PropTypes.string,
  lblShowLess: PropTypes.string
};

ShowMore.defaultProps = {
  showLessHeight: 50,
  lblShowMore: 'Show more',
  lblShowLess: 'Show less'
};

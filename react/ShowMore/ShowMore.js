import styles from './ShowMore.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ChevronIcon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';

export default class ShowMore extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    component: PropTypes.function,
    showLessHeight: PropTypes.number,
    lblShowMore: PropTypes.string,
    lblShowLess: PropTypes.string,
    disable: PropTypes.boolean
  };

  static defaultProps = {
    showLessHeight: 50,
    lblShowMore: 'Show more',
    lblShowLess: 'Show less'
  };

  constructor(props) {
    super(props);

    this.state = {
      contentHeight: 0,
      isPanelOpened: false
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
    this.setState({
      contentHeight: document.getElementById(this.props.id).clientHeight
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isPanelOpened: !this.state.isPanelOpened
    });
  }

  render() {
    const panelHeight = (this.state.isPanelOpened || this.props.disable) ? this.state.contentHeight : this.props.showLessHeight;
    return (
      <div className={classnames({ [styles.root]: true })}>
        <div
          className={classnames(styles.panel)}
          style={{ maxHeight: `${panelHeight}px` }} >
          <div id={this.props.id}>{this.props.component}</div>
        </div>
        {
          this.props.disable ? false : this.state.contentHeight > this.props.showLessHeight && (
            <Button
              id='btnShowMore'
              color='hyperlink'
              className={classnames(styles.button)}
              onClick={this.handleClick} >
              <span>
                {this.state.isPanelOpened ? this.props.lblShowLess : this.props.lblShowMore}
              </span>
              <span>
                <ChevronIcon
                  direction={this.state.isPanelOpened ? 'up' : 'down'}
                />
              </span>
            </Button>
          )
        }
      </div >
    );
  }
}

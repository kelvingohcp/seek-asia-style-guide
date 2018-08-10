import styles from './ShowMore.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ChevronIcon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';

export default class ShowMore extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    showLessHeight: PropTypes.number.isRequired,
    lblShowMore: PropTypes.string,
    lblShowLess: PropTypes.string,
    disable: PropTypes.bool,
    onPanelOpen: PropTypes.func
  };

  static defaultProps = {
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
    this.myRef = React.createRef();
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
      contentHeight: this.myRef.current.clientHeight
    });
  }

  handleClick(e) {
    const { onPanelOpen = () => {} } = this.props;
    e.preventDefault();

    if (!this.state.isPanelOpened) {
      onPanelOpen();
    }

    this.setState({
      isPanelOpened: !this.state.isPanelOpened
    });
  }

  render() {
    const { isPanelOpened, contentHeight } = this.state;
    const { disable, showLessHeight, children, lblShowLess, lblShowMore } = this.props;

    const panelHeight = (isPanelOpened || disable) ? contentHeight : showLessHeight;
    return (
      <div>
        <div
          className={styles.panel}
          style={{ maxHeight: `${panelHeight}px` }} >
          <div ref={this.myRef}>{children}</div>
        </div>
        {
          !disable && contentHeight > showLessHeight && (
            <div className={classnames({ [styles.outCanvasGradientMaskTop]: !isPanelOpened })}>
              <Button
                id='btnShowMore'
                color='hyperlink'
                className={styles.button}
                onClick={this.handleClick} >
                <span>
                  {isPanelOpened ? lblShowLess : lblShowMore}
                </span>
                <span> <span><ChevronIcon direction={isPanelOpened ? 'up' : 'down'} /></span></span>
              </Button>
            </div>
          )
        }
      </div>
    );
  }
}

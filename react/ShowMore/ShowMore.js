import styles from './ShowMore.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ChevronIcon } from 'seek-asia-style-guide/react';
import classnames from 'classnames';

const COLOR_GREY = 'grey';
const COLOR_WHITE = 'white';
const POSITION_CENTER = 'center';
const POSITION_LEFT = 'left';

export default class ShowMore extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    showLessHeight: PropTypes.number.isRequired,
    lblShowMore: PropTypes.string,
    lblShowLess: PropTypes.string,
    disable: PropTypes.bool,
    position: PropTypes.oneOf([POSITION_LEFT, POSITION_CENTER]),
    color: PropTypes.oneOf([COLOR_WHITE, COLOR_GREY]),
    onPanelOpen: PropTypes.func,
    onPanelToggle: PropTypes.func
  };

  static defaultProps = {
    lblShowMore: 'Show more',
    lblShowLess: 'Show less',
    color: COLOR_WHITE,
    position: POSITION_CENTER
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
    const { isPanelOpened } = this.state;
    const { onPanelOpen, onPanelToggle = () => {} } = this.props;
    e.preventDefault();

    if (!isPanelOpened) {
      if (typeof onPanelOpen === 'function') {
        console.warn('Property of onPanelOpen has been deprecated. Use onPanelToggle instead.');
        onPanelOpen();
      }
    }

    onPanelToggle({ status: (!isPanelOpened ? 'open' : 'close') });

    this.setState({
      isPanelOpened: !isPanelOpened
    });
  }

  render() {
    const { isPanelOpened, contentHeight } = this.state;
    const { disable, color, showLessHeight, children, lblShowLess, lblShowMore, position } = this.props;

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
            <div
              className={classnames({
                [styles.outCanvasGradientMaskTopWhite]: !isPanelOpened && color === COLOR_WHITE,
                [styles.outCanvasGradientMaskTopGrey]: !isPanelOpened && color === COLOR_GREY
              })}>
              <Button
                id='btnShowMore'
                color='hyperlink'
                className={classnames(styles.button, {
                  [styles.buttonGrey]: color === COLOR_GREY,
                  [styles.buttonWhite]: color === COLOR_WHITE,
                  [styles.buttonLeft]: position === POSITION_LEFT
                })}
                onClick={this.handleClick}>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageSlider.less';
import Indicator from './components/ImageSliderIndicator/ImageSliderIndicator';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import Wrapper from './components/ImageSliderWrapper/ImageSliderWrapper';
import classnames from 'classnames';

export default class ImageSlider extends Component {
  constructor() {
    super();

    this.state = {
      position: 0,
      direction: 'next',
      sliding: false
    };
  }

  componentDidMount() {
    if (this.props.autoSlide) {
      this.timerID = setInterval(() => this.nextSlide(),
        this.props.timerDuration);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  stopAutoSlide(thisTimerID) {
    clearInterval(thisTimerID);
  }

  resumeAutoSlide() {
    if (this.props.autoSlide) {
      this.timerID = setInterval(() => this.nextSlide(),
        this.props.timerDuration);
    }
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 50);
  }

  prevSlide = () => {
    const { position } = this.state;
    const { items } = this.props;
    const numItems = items.length;
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  nextSlide = () => {
    const { position } = this.state;
    const { items } = this.props;
    const numItems = items.length || 1;
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  }

  render() {
    const storedDirection = this.state.direction;
    const storedSliding = this.state.sliding;
    const storedPosition = this.state.position;
    const { className, items, onFeatureCompanyClick, LinkComponent } = this.props;

    return (
      <div
        onMouseOver={() => this.stopAutoSlide(this.timerID)}
        onMouseOut={() => this.resumeAutoSlide()}
        className={classnames({
          [styles.slider]: true,
          [className]: className
        })} >
        <div className={styles.arrowLeftDiv} onClick={() => this.prevSlide()}>
          <ChevronIcon direction="left" className={styles.arrowLeft} />
        </div>
        <div className={styles.containerDiv}>
          <Wrapper
            onFeatureCompanyClick={onFeatureCompanyClick}
            LinkComponent={LinkComponent}
            items={items}
            direction={storedDirection}
            sliding={storedSliding}
            statePosition={storedPosition}
          />
        </div>
        <div className={styles.arrowRightDiv} onClick={() => this.nextSlide()}>
          <ChevronIcon direction="right" className={styles.arrowRight} />
        </div>
        <div className={styles.indicatorDiv}>
          <Indicator length={items.length} position={storedPosition} />
        </div>
      </div>
    );
  }
}

ImageSlider.propTypes = {
  items: PropTypes.array.isRequired,
  timerDuration: PropTypes.number,
  autoSlide: PropTypes.bool,
  className: PropTypes.string,
  onFeatureCompanyClick: PropTypes.func,
  LinkComponent: PropTypes.func
};

ImageSlider.defaultProps = {
  items: [],
  timerDuration: 5000,
  autoSlide: false,
  className: ''
};

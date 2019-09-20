import styles from './Alert.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Section from '../Section/Section';
import Text from '../Text/Text';
import TickCircleIcon from '../TickCircleIcon/TickCircleIcon';
import InfoIcon from '../InfoIcon/InfoIcon';
import CriticalIcon from '../CriticalIcon/CriticalIcon';
import HelpIcon from '../HelpIcon/HelpIcon';
import { TONE, LEVEL } from '../Section/Section';
import getTenant from '../private/tenant';
import { StyleGuideContext } from '../StyleGuideProvider/StyleGuideProvider';
import Icon from '../Icon/Icon';

const ICONS = {
  [TONE.POSITIVE]: TickCircleIcon,
  [TONE.INFO]: InfoIcon,
  [TONE.CRITICAL]: CriticalIcon,
  [TONE.HELP]: HelpIcon
};

export default class Alert extends Component {
  static displayName = 'Alert';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    hideIcon: PropTypes.bool,
    level: PropTypes.oneOf(LEVEL).isRequired,
    message: PropTypes.node,
    onClose: PropTypes.func,
    tone: PropTypes.oneOf(TONE).isRequired,
  };

  static defaultProps = {
    className: '',
    hideIcon: false,
    onClose: null,
    compact: false
  };

  handleClose = event => this.props.onClose(event);

  renderContents = () => {
    const { tone, message, hideIcon, onClose, children, compact } = this.props;

    const Icon1 = tone ? ICONS[tone] : null;

    return (
      <div className={styles.alert}>
        {(!hideIcon && Icon1) && <Icon1 className={styles.icon} />}
        <div className={styles.text}>
          {message && (<Text raw baseline={false} intimate={compact}>{message}</Text>)}
          {children}
        </div>
        {onClose && (
          <button className={styles.close} onClick={this.handleClose}>
            <Icon type="exit" size="small" />
          </button>
        )}
      </div>
    );
  }

  render() {
    const { children, className, compact, hideIcon, onClose, tone, level, ...restProps } = this.props;

    const additionalProps = omit(restProps, 'message');

    const isTertiary = level === LEVEL.TERTIARY;

    const toneStyle = {
      [TONE.POSITIVE]: styles.positive,
      [TONE.INFO]: styles.info,
      [TONE.CRITICAL]: styles.critical,
      [TONE.HELP]: styles.help
    }[tone];

    return (
      <StyleGuideContext.Consumer>
        {({ tenant }) => {
          const { isJobsDB, isJobStreet } = getTenant(tenant);
          const rootClasses = classnames({
            [styles.root]: true,
            [styles.compact]: compact,
            [toneStyle]: tone && isTertiary,
            [styles.jobsDB]: isJobsDB,
            [styles.jobStreet]: isJobStreet
          });
          return isTertiary ? (
            <div className={rootClasses} {...additionalProps}>
              {this.renderContents()}
            </div>
          ) : (
            <Section
              tone={tone}
              level={level}
              className={rootClasses}
              {...additionalProps}>
              {this.renderContents()}
            </Section>
          );
        }}
      </StyleGuideContext.Consumer>
    );
  }
}

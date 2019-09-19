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
import CrossIcon from '../CrossIcon/CrossIcon';
import { TONE, LEVEL } from '../Section/Section';
import getTenant from '../private/tenant';
import { StyleGuideContext } from '../StyleGuideProvider/StyleGuideProvider';

const ICONS = {
  [TONE.POSITIVE]: TickCircleIcon,
  [TONE.INFO]: InfoIcon,
  [TONE.CRITICAL]: CriticalIcon,
  [TONE.HELP]: HelpIcon
};

export default class Alert extends Component {
  static displayName = 'Alert';

  static propTypes = {
    tone: PropTypes.oneOf([TONE.POSITIVE, TONE.INFO, TONE.CRITICAL, TONE.HELP]).isRequired,
    level: PropTypes.oneOf([LEVEL.PRIMARY, LEVEL.SECONDARY, LEVEL.TERTIARY]).isRequired,
    message: PropTypes.node,
    hideIcon: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    hideIcon: false,
    onClose: null
  };

  handleClose = event => this.props.onClose(event);

  renderContents = () => {
    const { tone, message, hideIcon, onClose, children } = this.props;

    const Icon = tone ? ICONS[tone] : null;

    return (
      <div className={styles.alert}>
        {(!hideIcon && Icon) && <Icon className={styles.icon} />}
        <div className={styles.text}>
          {message && (<Text raw baseline={false}>{message}</Text>)}
          {children}
        </div>
        {onClose && (
          <button className={styles.close} onClick={this.handleClose}>
            <CrossIcon />
          </button>
        )}
      </div>
    );
  }

  render() {
    const { hideIcon, onClose, tone, level, ...restProps } = this.props;

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
              pullout={pullout}
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

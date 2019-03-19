import styles from './Header.less';
import brandStyle from './Header.css.js';

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { PageBlock, Card, Section, Text, StyleGuideContext, Constants } from 'seek-asia-style-guide/react';
import Logo from './Logo/Logo';
import demoSpecExports from '../../../../../react/*/*.demo.js';
import jobStreetDemoExports from '../../../../../jobStreet/*/*.demo.js';
import jobsDBDemoExports from '../../../../../jobsDB/*/*.demo.js';
const skDemoSpecs = demoSpecExports
  .map(x => x.default)
  .filter(sk => sk.seekComponent === true);
const saDemoSpecs = demoSpecExports
  .concat(jobStreetDemoExports, jobsDBDemoExports)
  .map(x => x.default)
  .filter(function(el) {
    return skDemoSpecs.indexOf(el) < 0;
  });

const { SEEKASIA, JOBSDB, JOBSTREET } = Constants;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggle = event => {
    this.setState({ menuOpen: event.target.checked });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { changeTenant } = this.props;
    const { menuOpen } = this.state;

    const headerClasses = classnames({
      [brandStyle.headerBlock]: true,
      [styles.fixedHeaderBlock]: menuOpen
    });

    return (
      <div>
        <PageBlock className={headerClasses}>
          <Section className={styles.headerSection}>
            <div className={styles.sectionContent}>
              <Link
                className={classnames([styles.logoLink, brandStyle.logoLink])}
                to='/'
                onClick={this.handleMenuClose} >
                <StyleGuideContext.Consumer>
                  {({ tenant }) => (
                    <Logo
                      svgClassName={classnames([styles.logo, brandStyle.logo])}
                      tenant={tenant}
                    />
                  )}
                </StyleGuideContext.Consumer>
              </Link>

              <div className={styles.hamburger}>
                <input
                  onChange={this.handleMenuToggle}
                  checked={menuOpen}
                  id='hamburgerCheckbox'
                  type='checkbox'
                  className={styles.checkbox}
                />
                <label htmlFor='hamburgerCheckbox' className={styles.bars}>
                  <div className={classnames([styles.bar1, brandStyle.bar])} />
                  <div className={classnames([styles.bar2, brandStyle.bar])} />
                  <div className={classnames([styles.bar3, brandStyle.bar])} />
                  <span className={styles.hamburgerText}>Show menu</span>
                </label>

                <div className={styles.menu} onClick={this.handleMenuClose}>
                  <PageBlock>
                    <Section header>
                      <Card transparent className={styles.components}>
                        <h2>
                          <Text yelling regular>
                            <Link className={styles.link} to='./'>
                              Home
                            </Link>
                          </Text>
                        </h2>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text
                            yelling
                            className={styles.componentSectionTitle}>
                            Tenants
                          </Text>
                        </h2>
                      </Card>
                      <Card transparent className={styles.componentList}>
                        <Text
                          shouting
                          regular
                          className={styles.componentListItem}>
                          <Link className={styles.link} to='#' onClick={() => changeTenant(SEEKASIA)}>
                            SeekAsia
                          </Link>
                        </Text>
                        <Text
                          shouting
                          regular
                          className={styles.componentListItem}>
                          <Link className={styles.link} to='#' onClick={() => changeTenant(JOBSDB)}>
                            JobsDB
                          </Link>
                        </Text>
                        <Text
                          shouting
                          regular
                          className={styles.componentListItem}>
                          <Link className={styles.link} to='#' onClick={() => changeTenant(JOBSTREET)}>
                            JobStreet
                          </Link>
                        </Text>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text
                            yelling
                            className={styles.componentSectionTitle}>
                            SEEK Asia Style Basics
                          </Text>
                        </h2>
                      </Card>
                      <Card transparent className={styles.componentList}>
                        <Text
                          shouting
                          regular
                          className={styles.componentListItem}>
                          <Link className={styles.link} to='./colors'>
                            Colors
                          </Link>
                        </Text>
                        <Text
                          shouting
                          regular
                          className={styles.componentListItem}>
                          <Link className={styles.link} to='./typography'>
                            Typography
                          </Link>
                        </Text>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text
                            yelling
                            className={styles.componentSectionTitle}>
                            Tools
                          </Text>
                        </h2>
                      </Card>
                      <Card transparent className={styles.componentList}>
                        <Text
                          shouting
                          regular
                          className={styles.componentListItem}>
                          <Link className={styles.link} to='./sandbox'>
                            Sandbox
                          </Link>
                        </Text>
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text
                            yelling
                            className={styles.componentSectionTitle}>
                            SEEK Asia Components
                          </Text>
                        </h2>
                      </Card>
                      <Card transparent className={styles.componentList}>
                        {saDemoSpecs.map(demoSpec => (
                          <Text
                            shouting
                            regular
                            key={demoSpec.title}
                            className={styles.componentListItem}>
                            <Link className={styles.link} to={demoSpec.route}>
                              {demoSpec.title}
                            </Link>
                          </Text>
                        ))}
                      </Card>

                      <Card transparent>
                        <h2>
                          <Text
                            yelling
                            className={styles.componentSectionTitle}>
                            SEEK Components
                          </Text>
                        </h2>
                      </Card>
                      <Card transparent className={styles.componentList}>
                        {skDemoSpecs.map(demoSpec => (
                          <Text
                            shouting
                            regular
                            key={demoSpec.title}
                            className={styles.componentListItem}>
                            <Link className={styles.link} to={demoSpec.route}>
                              {demoSpec.title}
                            </Link>
                          </Text>
                        ))}
                      </Card>
                    </Section>
                  </PageBlock>
                </div>
              </div>
            </div>
          </Section>
        </PageBlock>
      </div>
    );
  }
}

Header.propTypes = {
  changeTenant: PropTypes.func
};

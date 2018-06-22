import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CountryDropdown.less';
import { Text, Card, Section, CardGroup, TickIcon } from 'seek-asia-style-guide/react';

const renderLinks = ({ links, checked, linkRenderer }) => {
  const cards = links.map((key, index) => {
    const ItemIcon = key.ItemIcon;
    return (
      <Card key={index}>
        {index === 0 ? (
          <Section className={styles.node}>
            <ItemIcon className={styles.icon} />
            {index === checked ? (
              <Text intimate semiStrong>
                {key.title}
              </Text>
            ) : (
              <Text intimate>{key.title}</Text>
            )}
            {index === checked && (
              <TickIcon
                className={classnames([styles.icon, styles.checkMark])}
              />
            )}
          </Section>
        ) : (
          linkRenderer({
            href: key.url,
            className: styles.countryDropdownText,
            children: (
              <Section className={styles.node}>
                <ItemIcon className={styles.icon} />
                <Text intimate className={styles.dropdownText}>
                  {key.title}
                </Text>
              </Section>
            )
          })
        )}
      </Card>
    );
  });

  return cards;
};

renderLinks.PropTypes = {
  links: PropTypes.array.isRequired,
  checked: PropTypes.number,
  linkRenderer: PropTypes.func
};

export default class CountryDropdown extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    checked: PropTypes.number,
    linkRenderer: PropTypes.func,
    onMenuToggle: PropTypes.func
  };
  static defaultProps = {
    onMenuToggle: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  handleDropDownToggle = () => {
    this.setState(state => {
      this.props.onMenuToggle({ open: !state.dropdownOpen });
      return { dropdownOpen: !state.dropdownOpen };
    });
  };

  handleMenuClick = () => {
    this.setState({ dropdownOpen: false });
  };

  render() {
    const { links, checked, linkRenderer } = this.props;

    const ItemIcon = links[0].ItemIcon;

    return (
      <div className={styles.root}>
        <input
          id="country-dropdown-toggle"
          autoComplete="off"
          className={styles.toggle}
          type="checkbox"
          checked={this.state.dropdownOpen}
        />
        <div className={styles.menuBackdrop} onClick={this.handleMenuClick} />
        <div
          data-automation="country-dropdown-toggle"
          className={styles.currentLocale}
          htmlFor="country-dropdown-toggle"
          onClick={this.handleDropDownToggle}>
          <ItemIcon className={styles.langIcon} />
          <Text whispering className={styles.langText}>
            {links[0].languageDisplay}
          </Text>
        </div>
        <CardGroup className={styles.dropdown} onClick={this.handleMenuClick}>
          {renderLinks({ links, checked, linkRenderer })}
        </CardGroup>
      </div>
    );
  }
}

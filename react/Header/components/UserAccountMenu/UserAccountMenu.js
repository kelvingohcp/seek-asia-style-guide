import styles from './UserAccountMenu.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Text, Card, Section, CardGroup } from 'seek-asia-style-guide/react';

const renderLinks = ({ userAccMenuItems, linkRenderer }) => {
  if (userAccMenuItems && userAccMenuItems.map) {
    const cards = userAccMenuItems.map((key, index) => {
      const ItemIcon = key.ItemIcon;

      return (
        <Card key={index}>
          {
            linkRenderer({
              href: key.url,
              className: styles.userAccountText,
              children: <Section className={styles.node}> {key.EnableIcon === true ? <ItemIcon className={styles.icon} /> : ''}
                <Text className={styles.text}>
                  {key.title}
                </Text>
              </Section>
            })
          }
        </Card>
      );
    });

    return (cards);
  }
  return null;
};

renderLinks.PropTypes = {
  links: PropTypes.array.isRequired
};

export default class UserAccountMenu extends Component {
  constructor(props) {
    super(props);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      dropdownOpen: true
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleDropdownToggle = event => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    event.currentTarget.parentNode.setAttribute('show', !this.state.dropdownOpen);
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.wrapperRef.setAttribute('show', false);
      this.setState({ dropdownOpen: false });
    }
  };

  render() {
    const {
      userAccMenuItems,
      dropdownOpen,
      userName,
      linkRenderer
    } = this.props;

    return (

      <div
        className={styles.root} ref={e => {
          this.wrapperRef = e;
        }}>

        <div className={styles.currentLocale} show={dropdownOpen} onClick={e => this.handleDropdownToggle(e)}>
          <Text className={styles.userName}>{userName}</Text>
          <div className={styles.chevron}>
            <Icon rotation="180deg" size="small" ssvgClassName={styles.chevronSvg} type="chevron" />
          </div>
        </div>

        <CardGroup className={styles.dropdown}>
          {renderLinks({ userAccMenuItems, linkRenderer })}
        </CardGroup>
      </div>
    );
  }
}

UserAccountMenu.propTypes = {
  userAccMenuItems: PropTypes.array.isRequired,
  dropdownOpen: PropTypes.bool,
  userName: PropTypes.string,
  linkRenderer: PropTypes.func
};

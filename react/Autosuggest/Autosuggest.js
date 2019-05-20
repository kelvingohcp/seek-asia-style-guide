import styles from './Autosuggest.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactAutosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';
import omit from 'lodash/omit';
import TextField from '../TextField/TextField';
import smoothScroll from '../private/smoothScroll';
import smallDeviceOnly from '../private/smallDeviceOnly';

/* eslint-disable react/no-deprecated */
export default class Autosuggest extends Component {
  static displayName = 'Autosuggest';

  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    type: PropTypes.string,
    inputProps: PropTypes.object,
    label: PropTypes.string,
    labelProps: PropTypes.object,
    className: PropTypes.string,
    autosuggestProps: PropTypes.object.isRequired,
    showMobileBackdrop: PropTypes.bool,
    showFullWidthSuggestionList: PropTypes.bool,
    compact: PropTypes.bool,
    /* eslint-disable consistent-return */
    suggestionsContainerClassName: (props, _, componentName) => {
      const { suggestionsContainerClassName, autosuggestProps } = props;
      const { theme } = autosuggestProps || {};
      const { suggestionsContainer } = theme || {};
      const propType = typeof suggestionsContainerClassName;

      if (propType !== 'undefined' && propType !== 'string') {
        return new Error(`Invalid prop \`suggestionsContainerClassName\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`string\`.`);
      }

      if (suggestionsContainer && suggestionsContainerClassName) {
        return new Error('\`suggestionsContainerClassName\` will be overridden by the \`suggestionsContainer\` class in autosuggestProps \`theme\`. Please remove it.');
      }
    }
    /* eslint-enable consistent-return */
  };

  static defaultProps = {
    type: 'text',
    className: '',
    label: '',
    labelProps: {},
    inputProps: {},
    showMobileBackdrop: false,
    showFullWidthSuggestionList: false,
    compact: false
  };

  state = {
    areSuggestionsShown: false
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.areSuggestionsShown && nextState.areSuggestionsShown && smallDeviceOnly()) {
      smoothScroll(this.textField);
    }
  }

  storeInputReference = autosuggest => {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  }

  storeTextFieldReference = textField => {
    if (textField !== null) {
      this.textField = textField.container;
    }
  }

  renderSuggestionsContainer = ({ containerProps, children }) => {
    const { ref, ...rest } = containerProps;
    const areSuggestionsShown = children !== null;

    if (this.state.areSuggestionsShown !== areSuggestionsShown) {
      this.setState({ areSuggestionsShown });
    }

    const callRef = isolatedScroll => {
      if (isolatedScroll !== null) {
        ref(isolatedScroll.component);
      }
    };

    return <IsolatedScroll {...rest} ref={callRef} children={children} />;
  }

  renderInputComponent = inputProps => {
    const { label, labelProps } = this.props;

    const textFieldProps = {
      ref: this.storeTextFieldReference,
      inputProps,
      ...omit(this.props, ['inputProps', 'labelProps', 'autosuggestProps'])
    };

    if (label) {
      textFieldProps.labelProps = {
        ...labelProps,
        className: classnames({
          [styles.isLabelCoveredWithBackdrop]: this.props.showMobileBackdrop,
          [labelProps.className]: labelProps.className
        })
      };
    }

    return (
      <TextField {...textFieldProps} />
    );
  }

  render() {
    const {
      value,
      onChange,
      onFocus,
      onBlur,
      type,
      inputProps,
      label,
      autosuggestProps,
      suggestionsContainerClassName,
      showMobileBackdrop,
      showFullWidthSuggestionList
    } = this.props;
    const { theme = {} } = autosuggestProps;

    const allAutosuggestProps = {
      renderSuggestionsContainer: this.renderSuggestionsContainer,
      renderInputComponent: this.renderInputComponent,
      ...autosuggestProps,
      theme: {
        ...{
          container: styles.container,
          containerOpen: styles.containerOpen,
          suggestionsContainerOpen: styles.suggestionsContainerOpen,
          sectionTitle: styles.sectionTitle,
          sectionContainer: styles.sectionContainer,
          suggestion: styles.suggestion,
          suggestionHighlighted: styles.suggestionHighlighted
        },
        suggestionsContainer: classnames({
          [styles.suggestionsContainer]: true,
          [styles.suggestionsContainer_withLabel]: label,
          [styles.suggestionsContainer_fullWidth]: showFullWidthSuggestionList,
          [suggestionsContainerClassName]: suggestionsContainerClassName
        }),
        suggestionsList: classnames({
          [styles.suggestionsList_fullWidth]: showFullWidthSuggestionList
        }),
        ...theme
      }
    };

    return (
      <div>
        <ReactAutosuggest
          inputProps={{ value, onChange, onFocus, onBlur, type, ...inputProps }}
          ref={this.storeInputReference}
          {...allAutosuggestProps}
        />
        <div
          className={classnames({
            [styles.autosuggestBackdrop]: true,
            [styles.backdrop_isMobile]: showMobileBackdrop
          })}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from './Autosuggest';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class AutosuggestContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  handleChange = (_, { newValue }) => {
    this.setState({
      inputValue: newValue
    });
  };

  handleFocus = event => {
    console.log('Focused, event: ', event);
  };

  handleClear = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { inputValue } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent
          {...componentProps}
          type="search"
          value={inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  route: '/autosuggest',
  title: 'Autosuggest',
  component: Autosuggest,
  container: AutosuggestContainer,
  initialProps: {
    id: 'jobTitles',
    label: 'Job Titles',
    type: 'search',
    value: '...',
    onChange: () => {},
    autosuggestProps: {
      suggestions: ['Developer', 'Product manager', 'Iteration manager', 'Designer'],
      onSuggestionsFetchRequested: () => {},
      onSuggestionsClearRequested: () => {},
      renderSuggestion: suggestion => <div>{suggestion}</div>,
      getSuggestionValue: suggestion => suggestion
    },
    message: false,
    onClear: () => {}
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Compact',
          transformProps: props => ({
            ...props,
            compact: true
          })
        },
        {
          label: 'Show mobile backdrop',
          transformProps: ({ ...props }) => ({
            ...props,
            showMobileBackdrop: true
          })
        },
        {
          label: 'Show mobile full width',
          transformProps: ({ ...props }) => ({
            ...props,
            showFullWidthSuggestionList: true
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};

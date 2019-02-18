import styles from './Demo.less';
import { Helmet } from 'react-helmet';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { PageBlock, Section, Text } from 'seek-asia-style-guide/react';
import Baseline from './Baseline/Baseline';
import Code from './Code/Code';
import flatten from 'lodash/flatten';
import map from 'lodash/map';

const DefaultContainer = ({ component: DemoComponent, componentProps }) => (
  <DemoComponent {...componentProps} />
);
DefaultContainer.propTypes = {
  component: PropTypes.func.isRequired,
  componentProps: PropTypes.object.isRequired
};

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStates: {}
    };
  }

  renderRadioOption = ({ states, label }) => {
    const { activeStates } = this.state;
    return states.map((state, i) => {
      const selected = (activeStates[label] === state.label);
      return (
        <option key={i} value={state.label} defaultValue={selected}>
          {state.label}
        </option>
      );
    });
  }

  groupBy = states => {
    const groupdStates = states.reduce((p, c) => ({
      ...p,
      [c.groupBy]: [
        ...p[c.groupBy] || [],
        c
      ]
    }), {});
    return Object.keys(groupdStates).map(stateKey => (
      <optgroup label={stateKey} key={stateKey}>
        {this.renderRadioOption({ states: groupdStates[stateKey], label: stateKey })}
      </optgroup>
    ));
  }

  renderOption = option => {
    const { activeStates } = this.state;

    switch (option.type) {
      case 'radio':
        return (
          <select className={styles.select} onChange={this.makeSelectChangeHandler(option)}>
            {
              option.states[0].groupBy ?
                this.groupBy(option.states) :
                this.renderRadioOption(option)
            }
          </select>
        );
      default:
        return (
          option.states.map((state, i) => {
            const checked = Boolean(
              activeStates[option.label] &&
              activeStates[option.label].indexOf(state.label) > -1
            );

            return (
              <Text key={i}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={this.makeCheckboxChangeHandler(option, state)}
                  />
                  {state.label}
                </label>
              </Text>
            );
          })
        );
    }
  };

  makeCheckboxChangeHandler = (option, state) => event => {
    const { checked } = event.target;
    const { [option.label]: currentValue = [], ...restState } = this.state.activeStates;

    if (checked) {
      this.setState({
        activeStates: {
          ...restState,
          [option.label]: option.type === 'radio' ? state.label :
            currentValue.concat(state.label)
        }
      });
    } else {
      this.setState({
        activeStates: {
          ...restState,
          [option.label]: option.type === 'radio' ? null :
            currentValue.filter(label => label !== state.label)
        }
      });
    }
  };

  makeSelectChangeHandler = option => event => {
    const { value } = event.target;
    const { activeStates } = this.state;

    this.setState({
      activeStates: {
        ...activeStates,
        [option.label]: [value]
      }
    });
  };

  calculateProps = () => {
    const { spec: { initialProps, options } } = this.props;
    const { activeStates } = this.state;

    return options.reduce((outerProps, option) => {
      const { states } = option;

      return states.reduce((innerProps, state) => {
        if (activeStates[option.label] && activeStates[option.label].indexOf(state.label) > -1) {
          return state.transformProps(innerProps);
        }

        return innerProps;
      }, outerProps);
    }, initialProps);
  }

  render() {
    const {
      title,
      block,
      component: DemoComponent,
      container: Container = DefaultContainer,
      options,
      sketch,
      tenantPath
    } = this.props.spec;
    const codeElement = <DemoComponent {...this.calculateProps()} />;
    const siteTitle = 'SEEK Asia Style Guide';

    return (
      <div className={styles.root}>
        <Helmet>
          {
            title ? (
              <title>{title} - {siteTitle} </title>
            ) : (
              <title>{siteTitle}</title>
            )
          }
        </Helmet>
        <PageBlock>
          {
            title ? (
              <Section header>
                <Text screaming>{ title }</Text>
              </Section>
            ) : null
          }
        </PageBlock>
        <Baseline lineHeight={4} isVisible={true} type="bar" color="#e8e8e8">
          <div
            className={classnames({
              [styles.component]: true,
              [styles.component_block]: block
            })}>
            <Container component={DemoComponent} componentProps={this.calculateProps()} />
          </div>
        </Baseline>
        {
          options && options.length ? (
            <PageBlock className={styles.optionsBlock}>
              <div className={styles.options}>
                {
                  flatten(options.map(this.renderOption))
                    .map((option, i) => (
                      <div key={i} className={styles.optionItem}>{ option }</div>
                    ))
                }
              </div>
            </PageBlock>
          ) : null
        }
        <PageBlock className={styles.codeBlock}>
          <Code jsx={codeElement} tenantPath={tenantPath ? tenantPath : 'react'} />
        </PageBlock>
        {
          sketch && (sketch.symbols || sketch.blockSymbols) ? (
            <div>
              <PageBlock>
                <Section header>
                  <Text screaming>Sketch Symbols</Text>
                </Section>
              </PageBlock>
              <div className={styles.symbols}>
                {
                  map(sketch.blockSymbols || {}, (element, name) => (
                    <div key={name}>
                      <PageBlock>
                        <Section>
                          <div className={styles.symbolName}>
                            <Text strong>{ name.replace(/\//g, ' \u25B8 ') }</Text>
                          </div>
                        </Section>
                      </PageBlock>
                      <div className={styles.symbolElement}>
                        { element }
                      </div>
                    </div>
                  ))
                }
              </div>
              <PageBlock>
                <div className={styles.symbols}>
                  {
                    map(sketch.symbols || {}, (element, name) => (
                      <div key={name}>
                        <Section>
                          <div className={styles.symbolName}>
                            <Text strong>{ name.replace(/\//g, ' \u25B8 ') }</Text>
                          </div>
                          <div className={styles.symbolElement}>
                            { element }
                          </div>
                        </Section>
                      </div>
                    ))
                  }
                </div>
              </PageBlock>
            </div>
          ) : null
        }
      </div>
    );
  }
}

Demo.propTypes = {
  spec: PropTypes.object.isRequired
};

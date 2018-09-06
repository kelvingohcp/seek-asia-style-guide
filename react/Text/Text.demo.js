import Text from './Text';
import * as sketch from './Text.sketch';

export default {
  route: '/text',
  title: 'Text',
  component: Text,
  sketch,
  initialProps: {
    children: 'Living Style Guide'
  },
  options: [
    {
      label: 'Weight',
      type: 'radio',
      states: [
        {
          label: 'Regular',
          transformProps: props => props
        },
        {
          label: 'Semi Bold',
          transformProps: props => ({
            ...props,
            semiStrong: true
          })
        },
        {
          label: 'Bold',
          transformProps: props => ({
            ...props,
            strong: true
          })
        }
      ]
    },
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Disable baseline',
          transformProps: props => ({
            ...props,
            baseline: false
          })
        }
      ]
    },
    {
      label: 'Tone',
      type: 'radio',
      states: [
        {
          label: 'Neutral tone',
          transformProps: props => props
        },
        {
          label: 'Positive',
          transformProps: props => ({
            ...props,
            positive: true
          })
        },
        {
          label: 'Critical',
          transformProps: props => ({
            ...props,
            critical: true
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            secondary: true
          })
        }
      ]
    },
    {
      label: 'Size',
      type: 'radio',
      states: [
        {
          label: 'Conversational',
          transformProps: props => props
        },
        {
          label: 'Loud',
          transformProps: props => ({
            ...props,
            loud: true
          })
        },
        {
          label: 'Intimate',
          transformProps: props => ({
            ...props,
            intimate: true
          })
        },
        {
          label: 'Whispering',
          transformProps: props => ({
            ...props,
            whispering: true
          })
        },
        {
          label: 'Screaming (Title)',
          transformProps: ({ screaming, ...props }) => ({
            ...props,
            screaming: true
          })
        },
        {
          label: 'Yelling (Title)',
          transformProps: ({ yelling, ...props }) => ({
            ...props,
            yelling: true
          })
        },
        {
          label: 'Shouting (Title)',
          transformProps: ({ shouting, ...props }) => ({
            ...props,
            shouting: true
          })
        },
        {
          label: 'Waving (Title)',
          transformProps: ({ waving, ...props }) => ({
            ...props,
            waving: true
          })
        },
        {
          label: 'Whistling (Title)',
          transformProps: ({ whistling, ...props }) => ({
            ...props,
            whistling: true
          })
        },
        {
          label: 'Whispering (Title)',
          transformProps: ({ whisperingTitle, ...props }) => ({
            ...props,
            whisperingTitle: true
          })
        }
      ]
    }
  ]
};

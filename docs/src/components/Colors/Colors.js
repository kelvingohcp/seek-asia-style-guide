import styles from './Swatches/Swatches.less';
import Swatches from './Swatches/Swatches';
import React from 'react';
import {
  PageBlock,
  Paragraph,
  Text,
  TextLink,
  Section
} from 'seek-asia-style-guide/react';

import { ScreenReaderOnly } from 'seek-asia-style-guide/react';
import PropTypes from 'prop-types';

const saSwatches = [
  {
    label: 'SEEK Asia accent',
    cssVar: '@saBlue',
    textClass: styles.colorSaBlue,
    bgClass: styles.backgroundSaBlue
  },
  {
    label: 'Button, Hyperlinks',
    cssVar: '@actionBlue',
    textClass: styles.colorButton,
    bgClass: styles.backgroundButton
  },
  {
    label: 'Completion, Success, Positive',
    cssVar: '@actionGreen',
    textClass: styles.colorCompletion,
    bgClass: styles.backgroundCompletion
  },
  {
    label: 'Alert',
    cssVar: '@actionRed',
    textClass: styles.colorAlert,
    bgClass: styles.backgroundAlert
  },
  {
    label: 'Highlight',
    cssVar: '@actionPastelBlue',
    textClass: styles.colorHighlight,
    bgClass: styles.backgroundHighlight
  },
  {
    label: 'Visited',
    cssVar: '@saVisitedLink',
    textClass: styles.colorVisited,
    bgClass: styles.backgroundVisited
  }
];

const dbSwatches = [
  {
    label: 'Candidate accent',
    cssVar: '@dbBlue',
    textClass: styles.colorDbCandi,
    bgClass: styles.backgroundDbCandi
  },
  {
    label: 'Hirer accent',
    cssVar: '@dbHirer',
    textClass: styles.colorDbHirer,
    bgClass: styles.backgroundDbHirer
  },
  {
    label: 'Call-to-Action',
    cssVar: '@actionOrange',
    textClass: styles.colorDbCTA,
    bgClass: styles.backgroundDbCTA
  }
];

const jsSwatches = [
  {
    label: 'Candidate accent',
    cssVar: '@jsBlue',
    textClass: styles.colorJsCandi,
    bgClass: styles.backgroundJsCandi
  },
  {
    label: 'Hirer accent',
    cssVar: '@jsHirerGreen',
    textClass: styles.colorJsHirer,
    bgClass: styles.backgroundJsHirer
  },
  {
    label: 'Call-to-Action',
    cssVar: '@actionYellow',
    textClass: styles.colorJsCTA,
    bgClass: styles.backgroundJsCTA
  }
];

const blueSwatches = [
  {
    label: 'Blue 1',
    cssVar: '@saBlue1',
    textClass: styles.colorBlue1,
    bgClass: styles.backgroundBlue1
  },
  {
    label: 'Blue 2',
    cssVar: '@saBlue2',
    textClass: styles.colorBlue2,
    bgClass: styles.backgroundBlue2
  },
  {
    label: 'Blue 3',
    cssVar: '@saBlue3',
    textClass: styles.colorBlue3,
    bgClass: styles.backgroundBlue3
  },
  {
    label: 'Blue 4',
    cssVar: '@saBlue4',
    textClass: styles.colorBlue4,
    bgClass: styles.backgroundBlue4
  },
  {
    label: 'Blue 5',
    cssVar: '@saBlue5',
    textClass: styles.colorBlue5,
    bgClass: styles.backgroundBlue5
  }
];

const greySwatches = [
  {
    label: 'Black',
    cssVar: '@saBlack',
    textClass: styles.colorBlack,
    bgClass: styles.backgroundBlack
  },
  {
    label: 'Grey 1',
    cssVar: '@saGrey1',
    textClass: styles.colorGrey1,
    bgClass: styles.backgroundGrey1
  },
  {
    label: 'Grey 2',
    cssVar: '@saGrey2',
    textClass: styles.colorGrey2,
    bgClass: styles.backgroundGrey2
  },
  {
    label: 'Grey 3',
    cssVar: '@saGrey3',
    textClass: styles.colorGrey3,
    bgClass: styles.backgroundGrey3
  },
  {
    label: 'Grey 4',
    cssVar: '@saGrey4',
    textClass: styles.colorGrey4,
    bgClass: styles.backgroundGrey4
  },
  {
    label: 'Grey 5',
    cssVar: '@saGrey5',
    textClass: styles.colorGrey5,
    bgClass: styles.backgroundGrey5
  },
  {
    label: 'Grey 6',
    cssVar: '@saGrey6',
    textClass: styles.colorGrey6,
    bgClass: styles.backgroundGrey6
  },
  {
    label: 'White',
    cssVar: '@saWhite',
    textClass: styles.colorWhite,
    bgClass: styles.backgroundWhite
  }
];

export const colorSwatchesRenderer = () => {
  const colorSwatches = ({ label, cssVar }) => (
    <div className={styles.colorGrid}>
      {label}, {cssVar}
    </div>
  );

  colorSwatches.propTypes = {
    label: PropTypes.Text,
    cssVar: PropTypes.Text
  };

  return colorSwatches;
};

const colors = () => (
  <div>
    <ScreenReaderOnly>
      <h1>SEEK Style Guide</h1>
    </ScreenReaderOnly>
    <PageBlock>
      <Section>
        <h1>
          <Text screaming>Colors and theming</Text>
        </h1>
        <Paragraph>
          <Text>Reference: <TextLink href="https://brand.seekasia.com/product/color-usage/">SEEK Asia brand portal</TextLink></Text>
        </Paragraph>
      </Section>
      <Section>
        <h2>
          <Text strong yelling>
            General color swatches
          </Text>
        </h2>
      </Section>
      <Section>
        <Swatches theme={saSwatches} />
      </Section>
      <hr />
      <Section>
        <h2>
          <Text strong yelling>
            Blue Shades
          </Text>
        </h2>
      </Section>
      <Section>
        <Swatches theme={blueSwatches} />
      </Section>
      <hr />
      <Section>
        <h2>
          <Text strong yelling>
            Shades of grey
          </Text>
        </h2>
      </Section>
      <Section>
        <Swatches theme={greySwatches} />
      </Section>
      <hr />
      <Section>
        <h2>
          <Text strong yelling>
            JobStreet color swatches
          </Text>
        </h2>
      </Section>
      <Section>
        <Swatches theme={jsSwatches} />
      </Section>
      <hr />
      <Section>
        <h2>
          <Text strong yelling>
            jobsDB color swatches
          </Text>
        </h2>
      </Section>
      <Section>
        <Swatches theme={dbSwatches} />
      </Section>
      <Section>
        <Paragraph>
          <Text>
            P.S. YIQ calculation being used to make sure colored text over
            either pure white/black background for best contrast. Same method
            applied to colored background with either pure white/black text
            combination for the same reason.
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            For more color reference, please reference to <br />
            <TextLink src='https://brand.seekasia.com/product/color-usage/'>
              Color usage@SEEK Asia brand portal
            </TextLink>
          </Text>
        </Paragraph>
      </Section>
    </PageBlock>
  </div>
);

colors.defaultProps = {
  colorSwatchesRenderer: colorSwatchesRenderer()
};

colors.propTypes = {
  colorSwatchesRenderer: PropTypes.func
};

export default colors;

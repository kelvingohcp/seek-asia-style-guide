import React from 'react';
import styles from './Icons.less';
import {
  PageBlock,
  Card,
  Section,
  Paragraph,
  Text
} from 'seek-asia-style-guide/react';
import Code from '../Demo/Code/Code';
import iconsSketchExports from '../../../../react/*/*.iconSketch.js';
import map from 'lodash/map';

const renderIcons = sketch => {
  return sketch && sketch.symbols ? (
    <div>
      <PageBlock>
        <div className={styles.symbols}>
          <Section className={styles.section}>
            {map(sketch.symbols || {}, (element, name) => (
              <div key={name} className={styles.symboleContainer}>
                <div className={styles.symbolName}>
                  <Text strong>{name.replace(/\//g, ' \u25B8 ')}</Text>
                </div>
                <div className={styles.symbolElement}>{element}</div>
                <div className={styles.codeStyle}>
                  <Code jsx={element} tenantPath="react" />
                </div>
              </div>
            ))}
          </Section>
        </div>
      </PageBlock>
    </div>
  ) : null;
};

const renderAllIcons = () => {
  return iconsSketchExports.map(symbols => {
    return renderIcons(symbols);
  });
};

export default function Icons() {
  return (
    <div>
      <PageBlock>
        <Section header>
          <Text screaming>Icons</Text>
        </Section>
        <Card transparent style={{ maxWidth: 720 }}>
          <Section>
            <Paragraph>
              <Text>
                These are the icons components available for use in the SEEK Asia style guide.
              </Text>
            </Paragraph>
          </Section>
        </Card>
      </PageBlock>

      <PageBlock>
        <Card className={styles.iconsCard}>{renderAllIcons()}</Card>
      </PageBlock>
    </div>
  );
}

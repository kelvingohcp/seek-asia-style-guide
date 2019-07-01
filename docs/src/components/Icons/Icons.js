import React from 'react';
import styles from './Icons.less';
import {
  PageBlock,
  Card,
  Section,
  Paragraph,
  Text
} from 'seek-asia-style-guide/react';
import iconsSketchExports from '../../../../react/*/*.iconSketch.js';
import map from 'lodash/map';

const renderIcons = sketch => {
  return sketch && sketch.symbols ? (
    <div>
      <PageBlock>
        <div>
          <Section className={styles.section}>
            {map(sketch.symbols || {}, (element, name) => (
              <div key={name} className={styles.symbolContainer}>
                <div className={styles.symbolName}>
                  <Text whispering>{name.replace(/\//g, ' \u25B8 ')}</Text>
                </div>
                <div className={styles.symbolElement}>{element}</div>
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
                These are the icons components available for use in the SEEK Asia Style Guide.
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

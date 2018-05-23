import React from 'react';
import {
  PageBlock,
  Card,
  Section,
  Paragraph,
  Text
} from 'seek-asia-style-guide/react';

import * as allComponent from 'seek-asia-style-guide/react';

const getAllIconComponent = () => {
  const iconComponent = [];
  for (const key in allComponent) {
    if (
      allComponent.hasOwnProperty(key) &&
      key.indexOf('Icon') >= 0 &&
      key !== 'ChevronIcon' &&
      key !== 'DeleteIcon' &&
      key !== 'ErrorIcon' &&
      key !== 'FacebookIcon' &&
      key !== 'HeartIcon' &&
      key !== 'LinkedInIcon' &&
      key !== 'PlusIcon' &&
      key !== 'StarIcon' &&
      key !== 'TickCircleIcon' &&
      key !== 'TwitterIcon'
    ) {
      iconComponent.push({
        displayName: allComponent[key].displayName,
        component: allComponent[key]
      });
    }
  }
  return iconComponent;
};

const renderIcon = ({ displayName, component }) => { // eslint-disable-line react/prop-types
  return (
    <div key={displayName}>
      {component()}
      <Text>{displayName}</Text>
    </div>
  );
};

const displayAllIcon = () => {
  const iconComponent = getAllIconComponent();
  return <div>{iconComponent.map(icon => renderIcon(icon))}</div>;
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
                This page is list out all the icons in seekasia style guide.
              </Text>
            </Paragraph>
          </Section>
        </Card>
      </PageBlock>

      <PageBlock>
        <Card>{displayAllIcon()}</Card>
      </PageBlock>
    </div>
  );
}

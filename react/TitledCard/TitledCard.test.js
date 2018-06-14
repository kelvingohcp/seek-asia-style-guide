import React from 'react';
import { shallow } from 'enzyme';
import { TitledCard, Text } from 'seek-asia-style-guide/react';

describe('Titled Card: ', () => {
  const titledCard = (
    <TitledCard text="Job Requirement">
      <Text>
        Take time off and schedule a date with us. We've made our class schedule
        and timetable handy to access when you need it. Check our schedules
        online to get the latest updates or changes. If there's one date you can
        make that won't disappoint you, it's a date with us. Choose your city or
        select your nearest club to get full schedules and timetables for all
        classes available at Celebrity Fitness. For the latest updates, check
        this page often
      </Text>
    </TitledCard>
  );
  it('should render value', () => {
    const wrapper = shallow(titledCard);
    expect(wrapper).toMatchSnapshot();
  });
});

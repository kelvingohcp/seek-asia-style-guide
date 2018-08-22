import Tag from './Tag';
import * as sketch from './Tag.sketch';
export default {
  route: '/tag',
  title: 'Tag',
  component: Tag,
  sketch,
  initialProps: {
    label: 'This is a Tag'
  },
  options: []
};

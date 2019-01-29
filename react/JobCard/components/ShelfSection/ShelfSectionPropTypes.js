import PropTypes from 'prop-types';

export const ShelfPropTypes = PropTypes.shape({
  shelfLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
        title: PropTypes.string
      }))
    }))
  })),
  tagLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string
  }))
});

export const ShelfSectionPropTypes = {
  shelf: ShelfPropTypes,
  LinkComponent: PropTypes.func,
  showShelfSection: PropTypes.bool,
  trackLinkClicked: PropTypes.func
};


import React from 'react';
import mapKeys from 'lodash/mapKeys';
import BookmarkButton from './BookmarkButton';
export const listItem = {
  'Not bookmarked': <BookmarkButton onBookmarkClick={() => {}} />,
  'Bookmarked': <BookmarkButton isBookmarked={true} onBookmarkClick={() => {}} />
};

// Export text styles as symbols
// (at least until Sketch libraries support shared text styles)
export const symbols = mapKeys(listItem, (value, key) => `Badge/${key}`);

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

export const getParts = (text, query) => {
  if (!text || !query) {
    return null;
  }
  const matches = match(text, query);
  // No point to parse if matches is empty array
  if (matches.length === 0) {
    return null;
  }
  return parse(text, matches);
};

export const hasShelfLinks = shelfLinks => {
  return Boolean(
    shelfLinks &&
    shelfLinks.some(
      shelfLink => shelfLink && shelfLink.items && shelfLink.items.length > 0
    )
  );
};

/**
 * decode html entity
 */
export const decodeHTMLEntities = (text) => {
  const entities = {
    amp: '&',
    apos: '\'',
    '#x27': '\'',
    '#x2F': '/',
    '#39': '\'',
    '#47': '/',
    lt: '<',
    gt: '>',
    nbsp: ' ',
    quot: '"',
  };

  return text.replace(/&([^;]+);/gm, (match, entity) => entities[entity] || match);
};

/**
 * get relative time
 */
export const getRelativeTime = (dateTime) => {
  const created = new Date(dateTime);
  const diff = Math.floor((new Date().getTime() - created.getTime()) / 1000);

  if (diff < 60) {
    return `${diff}s`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)}m`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)}h`;
  }

  return `${created.getFullYear()}/${(`00${created.getMonth() + 1}`).slice(-2)}/${(`00${created.getDate()}`).slice(-2)}`;
};

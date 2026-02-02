export const getRenderableImageUrl = (url) => {
  if (!url) return "";

  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (match?.[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  return url;
};

export const sortByImage = (team) => {
  return [...team].sort((a, b) => {
    if (a.image && !b.image) return -1; // a first
    if (!a.image && b.image) return 1;  // b first
    return 0;
  });
};

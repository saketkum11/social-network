const sortPost = (posts, type) => {
  switch (type) {
    case "HIGH_TO_LOW":
      return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    case "LOW_TO_HIGH":
      return [...posts].sort((a, b) => a.likes.likeCount - b.likes.likeCount);
    default:
      return posts;
  }
};

export { sortPost };

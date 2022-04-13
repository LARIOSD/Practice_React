const nextPage = (page, limit) => {
  const nextpage = page === limit ? page : page + 1;
  return nextpage;
};

const prevPage = (page) => {
  const prevpage = page === 0 ? page : page - 1;
  return prevpage;
};

export {
  nextPage,
  prevPage,
};

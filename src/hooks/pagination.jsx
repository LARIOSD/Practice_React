function getNextPage(page, limit, total) {
  const lastPage = total / limit;

  if (page >= lastPage) {
    return null;
  }
  return page + 1;
}

function getPreviousPage(page) {
  if (page <= 1) {
    return null;
  }
  return page - 1;
}

export default function pagination(page, limit, count) {
  return {
    currentPage  : page,
    previousPage : getPreviousPage(page),
    nextPage     : getNextPage(page, limit, count),
    totalPages   : Math.ceil(count / limit),
    count,
  };
}

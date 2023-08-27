export interface ResponsePagination {
  page:       number,
  totalItems: number,
  perPage:    number,
  totalPages: number,
  prevPage:   number | null,
  nextPage:   number | null;
}

export interface RequestPagination {
  limit:  number;
  offset: number;
}

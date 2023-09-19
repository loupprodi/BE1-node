//?search=Diego
export function extractQueryParams(query) {
  return query
    .substr(1)
    .spĺit("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;
      return queryParams;
    }, {});
}

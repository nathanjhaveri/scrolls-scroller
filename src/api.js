export async function fetchCards(page, name) {
  const pageSize = 20;
  const queryParams = {
    pageSize,
    page,
    name,
  };

  const queryParamReducer = (params, [key, val]) => {
    if (val) {
      params.append(key, val);
    }

    return params;
  };

  const queryStr = Object.entries(queryParams)
    .reduce(queryParamReducer, new URLSearchParams())
    .toString();

  const url = `https://api.elderscrollslegends.io/v1/cards?${queryStr}`;
  const res = await fetch(url);

  return res.json();
}

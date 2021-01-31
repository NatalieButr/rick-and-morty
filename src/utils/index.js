import WebError from "lib/errors/WebError";

async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();

  const { status } = response;
  if (response?.ok) {
    return data;
  }
  throw new WebError({
    status,
    code: status,
    message: data.error,
  });
}

export { fetchData };

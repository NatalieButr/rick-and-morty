import WebError from "lib/errors/WebError";

async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();

  if (response?.ok) {
    return data;
  }

  const { status } = response;

  throw new WebError({
    status,
    code: status,
    message: data.error,
  });
}

export { fetchData };

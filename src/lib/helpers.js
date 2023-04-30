import { useEffect } from "react";

export function networkRequest(method, endpoint, body) {
  return fetch("http://localhost:4000" + endpoint, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export function useNetworkRequest(
  method,
  endpoint,
  body,
  callback,
  dependencies = []
) {
  useEffect(() => {
    fetch("http://localhost:4000" + endpoint, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(callback);
  }, dependencies);
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

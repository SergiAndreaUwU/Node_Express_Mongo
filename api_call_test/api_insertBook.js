const URL = "http://localhost:4000/api";

const insertBook = (book) => {
  return fetch(`${URL}/books`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(book), // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

module.exports = insertBook;

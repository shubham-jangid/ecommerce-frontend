import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/${userId}/category/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((res) => {
      console.log(res);

      return res.json();
    })
    .catch();
};

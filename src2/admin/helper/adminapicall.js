import { API } from "../../backend";

//------------- category api call--------------------------
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
      return res.json();
    })
    .catch((err) => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// -------------product api calls-----------------------
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/${userId}/product/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Beared ${token}`,
    },
    body: product,
  })
    .then((res) => {
      console.log(res);

      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getProductById = (productId) => {
  return fetch(`${API}/${productId}`, {
    method: "GET",
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllProduct = () => {
  return fetch(`${API}/products`, {
    method: "GET",
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProduct = (userId, token, productId, productData) => {
  return fetch(`${API}/${userId}/remove/${productId}`, {
    method: "PUT",
    header: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: productData,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = (userId, token, productId) => {
  return fetch(`${API}/${userId}/remove/${productId}`, {
    method: "DELETE",
    header: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

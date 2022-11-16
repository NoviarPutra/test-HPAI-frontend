const BASE_URL = "http://localhost:8000/api";

export const getUsers = async () => {
  const response = await fetch(BASE_URL + "/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
export const getUserByID = async (id) => {
  const response = await fetch(BASE_URL + "/users/" + id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
export const register = async (payload) => {
  const response = await fetch(BASE_URL + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};
export const login = async (payload) => {
  const response = await fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};
export const deleteUser = async (id) => {
  const response = await fetch(BASE_URL + "/users/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

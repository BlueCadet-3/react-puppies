const BASE_URL = "/api/puppies";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(puppy) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(puppy),
  }).then((res) => res.json());
}

export function update(puppy) {
  return fetch(`${BASE_URL}/${puppy._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(puppy),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

const userListElement = document.getElementById("user-list");
const searchInputElement = document.getElementById("search-input");

const API_URL = "https://jsonplaceholder.typicode.com/users";

let usersData = [];

// Fetch users list from API
fetch(API_URL)
  .then((response) => response.json())
  .then((users) => {
    usersData = users;
    renderUsersList(users);
  })
  .catch((error) => console.error(error));

// Display users list
const renderUsersList = (users) => {
  userListElement.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>${user.name}</p>`;

    li.addEventListener(
      "click",
      () => (window.location.href = `user-details.html?id=${user.id}`)
    );
    userListElement.appendChild(li);
  });
};

// Search users by name
searchInputElement.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredUsers = usersData.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm)
  );

  renderUsersList(filteredUsers);
});

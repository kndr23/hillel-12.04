const userDetailsElement = document.getElementById("user-detail");

const API_URL = "https://jsonplaceholder.typicode.com/users/";

const userId = window.location.href.match(/\?id=(\d+)/)[1];

// Fetch user object from the jsonplaceholder by id in url

// Try/catch version
const fetchUser = async () => {
  try {
    const response = await fetch(API_URL + userId);
    const resolve = await response.json();

    renderUserDetails(resolve);
  } catch (error) {
    console.error(error);
  }
};

fetchUser();

// Fetch/then/catch version

// fetch(API_URL + userId)
//   .then((response) => response.json())
//   .then((user) => {
//     renderUserDetails(user);
//   })
//   .catch((error) => console.error(error));

// Display the user information
const renderUserDetails = (user) => {
  const userDetailsHTML = `
    <p class="name">${user.name}</p>
    <p class="username">${user.username}</p>
    <p class="phone">${user.phone}</p>
    <p class="website">${user.website}</p>
    <p class="address">Address: ${user.address.zipcode} ${user.address.city} ${user.address.street}</p>
  `;

  userDetailsElement.innerHTML = userDetailsHTML;
};

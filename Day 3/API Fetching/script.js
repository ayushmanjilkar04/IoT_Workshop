async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    showUsers(data);
  } catch (error) {
    alert("An Error Occured: ", error);
  }
}

getUsers();

function showUsers(data) {
  let list = document.getElementById("list-container");
  data.forEach((user) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <div class="address">
        <p>
        <strong>Address:</strong>
          ${user.address.street}, ${user.address.suite}<br>
          ${user.address.city}, ${user.address.zipcode}
        </p>
      </div>`;
    div.className = "card";
    list.appendChild(div);
  });
}

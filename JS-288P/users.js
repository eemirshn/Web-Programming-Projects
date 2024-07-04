async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const users = await response.json();
    console.log(users);
    displayUsers(users);
  } catch (error) {
    console.log("Hata:", error);
  }
}

function displayUsers(data) {
  const container = document.getElementById("user-cards");
  container.innerHTML = "";
  data.forEach((user) => {
    const userCardHTML = `
      <div class="col-md-12 mb-4 d-flex align-items-stretch">
        <div class="card w-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title user-name mt-5 fw-bold">${user.name}</h5>
          </div>
          <div class="user-details text-center">
            <p class="card-text"><i class="fa-solid fa-user"></i> @${user.username}</p>
            <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p> <!-- Boşluk eklendi -->
            <p class="card-text"><i class="fa-solid fa-building"></i> ${user.company.name}</p>
            <p class="card-text"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
            <p class="card-text"><i class="fa-solid fa-phone"></i> ${user.phone}</p>
            <p class="card-text"><i class="fa-solid fa-globe"></i> ${user.website}</p>
            <a class="btn btn-danger" href="details.html?id=${user.id}">View Profile</a>
          </div>
          <div class="text-center mt-3 toggle-details">
            <i class="fa-solid fa-arrow-down-z-a fa-2x"></i>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += userCardHTML;
  });
  addToggleListeners();
}

function addToggleListeners() {
  const toggleDetails = document.querySelectorAll(".toggle-details");
  toggleDetails.forEach((item) => {
    item.addEventListener("click", function () {
      const currentDetails = this.closest(".card").querySelector(".user-details");

      const userDetails = document.querySelectorAll(".user-details");

      userDetails.forEach((detail) => {
        if (detail !== currentDetails) {
          detail.classList.remove("show");
          const icon = detail.closest(".card").querySelector(".toggle-details i");
          if (icon.classList.contains("fa-arrow-up-a-z")) {
            icon.classList.remove("fa-arrow-up-a-z");
            icon.classList.add("fa-arrow-down-z-a");
          }
        }
      });

      currentDetails.classList.toggle("show");
      const icon = this.querySelector("i");
      if (icon.classList.contains("fa-arrow-down-z-a")) {
        icon.classList.remove("fa-arrow-down-z-a");
        icon.classList.add("fa-arrow-up-a-z");
      } else {
        icon.classList.remove("fa-arrow-up-a-z");
        icon.classList.add("fa-arrow-down-z-a");
      }
    });
  });
}

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userId = document.getElementById("searchInput").value;
  if (userId >= 1 && userId <= 10) {
    window.location.href = `details.html?id=${userId}`;
  } else {
    alert("WRONG NUMBER PLEASE ENTER BETWEEN 1 AND 10");
}});

fetchUsers();

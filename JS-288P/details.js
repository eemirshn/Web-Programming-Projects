async function fetchUsersDetails() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("id");
  console.log(userId);
  const apiURL = `https://jsonplaceholder.typicode.com/posts?users`;
  const response = await fetch(apiURL);
  const userData = await response.json();
  console.log(userData)
  try {
    displayUserDetails(userData);
  } catch (error) {
    console.log("Hata" , error)
  }
}

function displayUserDetails(users) {
  const detailsContainer = document.getElementById("detailsContainer");
  users.forEach((user) => {
    const userDetailCard = `
        <div class="col-md-12 md-2 mt-5 text-center">
         <div class="card w-100">
          <div class="card-body">
          <h5 class="card-title">${user.id}</h5>
          </div class="card-text">
          <p class="card-text">${user.title}<p>
          <p class="card-text">${user.body}<p>
          </div>
          </div>
          </div>
          </div>
        `;
    detailsContainer.innerHTML += userDetailCard;
  });
}

fetchUsersDetails();

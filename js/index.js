//The index.html has a form with a search input 
//when the form is submitted, it should take the value of the input
//and search Github for user matches using the User Search Enpoint.

// do step number 1
// do step number 2
// do step number 3

// public API https://docs.github.com/en/rest
// calls should include header:
//accept: application/vnd.github.v3+json

function getData(value) {
    const url = `https://api.github.com/search/users?q=${value}`;
  
    fetch(url, {
      method: "GET",
      headers: {"Accept": "application/vnd.github.v3+json"}
    })
    .then(response => response.json()) 
    .then (obj => obj.items.forEach(user => {
      renderUser(user);
    }))
  }
  
  function renderUser(user) {
    const ulUser = document.querySelector('#user-list');
    const ulRepos = document.querySelector('#repos-list');
      let liLogin = document.createElement("li");
      liLogin.innerHTML = user.login;
  
      let liAvatar = document.createElement("li");
      liAvatar.innerHTML = user.avatar_url
  
      ulUser.appendChild(liLogin);
      ulRepos.appendChild(liAvatar);
    }
  
  const submitBtn = document.getElementById("submit-buttom");
  const searchBtn = document.getElementById("search");
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    clearTable();
    getData(searchBtn.value);
  })
  
  function clearTable() {
    const listUser = document.getElementById('user-list');
    const listRepo = document.getElementById('repos-list');
    const listEmpty = listUser.innerHTML.trim();
    if (listEmpty != "") {
      listUser.innerHTML = "";
      listRepo.innerHTML = "";
    }
  }
  
  const ul = document.getElementById('user-list');
  ul.addEventListener('click', (e) => {
      e.preventDefault();
      clearTable();
      const userSelect = e.target.innerHTML;
      document.getElementById("search").value = userSelect;
      getData(userSelect);
  })
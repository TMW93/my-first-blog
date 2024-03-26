const usernameInput = document.querySelector(`#username`);
const titleInput = document.querySelector(`#blog-title`);
const contentInput = document.querySelector(`#blog-content`);
const form = document.querySelector(`#input-form`);
const submitButton = document.querySelector(`#submit-button`);
const toggleTheme = document.querySelector(`#theme-toggle`);
const themeDescript = document.querySelector(`#theme-descript`);

let blogInfo = [];

// changes colour theme if the switch is toggled
function themeChange() {
  if(toggleTheme.checked) {
    document.documentElement.setAttribute(`data-theme`, `dark`);
    themeDescript.textContent = `Dark mode`;
    localStorage.setItem(`theme`, `dark`);
  } else {
    document.documentElement.setAttribute(`data-theme`, `light`);
    themeDescript.textContent = `Light mode`;
    localStorage.setItem(`theme`, `light`);
  }
}

toggleTheme.addEventListener(`change`, themeChange);

//gets stored theme
function theme() {
  const currentTheme = localStorage.getItem(`theme`);
  if(currentTheme) {
    document.documentElement.setAttribute(`data-theme`, currentTheme);

    if(currentTheme === `dark`) {
      toggleTheme.checked = true;
      themeChange();
    }
  }
}


function init() {
  theme();
  const storedInfo = JSON.parse(localStorage.getItem(`blogInfo`));
  
  if(storedInfo !== null) {
    blogInfo = storedInfo;
  }
}

function storeInfo() {
  localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
}

submitButton.addEventListener(`click`, function(event) {
  // //checking if any inputs were not entered
  if(usernameInput.value === `` || titleInput.value === `` || contentInput.value === ``) {
    event.preventDefault();
    alert(`All inputs must be filled.`);
    return;
  } else {
    let recentInfo = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    blogInfo.push(recentInfo);

    storeInfo();
  }
});

init();

const usernameInput = document.querySelector(`#username`);
const titleInput = document.querySelector(`#blog-title`);
const contentInput = document.querySelector(`#blog-content`);
const form = document.querySelector(`#input-form`);
const submitButton = document.querySelector(`#submit-button`);

let blogInfo = [];

function init() {
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

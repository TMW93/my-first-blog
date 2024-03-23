const usernameInput = document.querySelector(`#username`);
const titleInput = document.querySelector(`#blog-title`);
const contentInput = document.querySelector(`#blog-content`);
const form = document.querySelector(`#input-form`);
const submitButton = document.querySelector(`#submit-button`);

let blogInfo = [];

function init() {

  const storedInfo = JSON.parse(localStorage.getItem(`blogInfo`));
  
  if(storeInfo != null) {
    blogInfo = storedInfo;
  }
}

// function storeInfo() {

//   localStorage.setItem(`blogInfo`, JSON.stringify(blogInfo));
// }

submitButton.addEventListener(`click`, function(event) {

  let recentInfo = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  // //checking if any inputs were not entered
  // if(usernameInput === `` || titleInput === `` || contentInput === ``) {
  //   return;
  // }

  // storeInfo();
  localStorage.setItem(`blogInfo`, JSON.stringify(recentInfo));
});


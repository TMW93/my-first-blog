const toggleTheme = document.querySelector(`#theme-toggle`);
const themeDescript = document.querySelector(`#theme-descript`);
const blogContainer = document.querySelector(`#blog-container`);

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

//displays the stored blog posts
function showInfo() {
  for(let i = 0; i < blogInfo.length; i++) {
    const blogEntry = blogInfo[i];
    //create a box to contain the blog entry
    const postContainer = document.createElement(`div`);
    postContainer.setAttribute(`class`, `post-box`);
    postContainer.setAttribute(`style`, `display: flex; flex-direction: column; width: 100%; margin-bottom: 2%; border: 0.2em solid var(--blog-border-colour); color: var(--form-text-colour);`);
    blogContainer.appendChild(postContainer);

    //create a title for the blog entry
    let blogTitle = document.createElement(`h2`);
    blogTitle.textContent = blogEntry.title;
    blogTitle.setAttribute(`style`, `text-decoration: underline; font-size: 175%; margin: 0; color: var(--form-text-colour);`);
    postContainer.appendChild(blogTitle);

    //create a box to hold the blog content
    let blogContent = document.createElement(`p`);
    blogContent.textContent = blogEntry.content;
    postContainer.appendChild(blogContent);

    //create a watermark for the author
    let blogUser = document.createElement(`p`);
    blogUser.textContent = `Posted by: ${blogEntry.username}`;
    blogUser.setAttribute(`style`, `font-style: italic; text-align: right; color: var(--form-text-colour); margin-right: 1%;`);
    postContainer.appendChild(blogUser);

    const button = document.createElement(`button`);
    button.textContent = `Clear This Post`;
    postContainer.appendChild(button);
    button.setAttribute(`style`, `position: absolute; right: 1.5%; bottom 0; padding: 0.5%;`);
  }
}

function init() {
  theme();
  const storedInfo = JSON.parse(localStorage.getItem(`blogInfo`));
  
  if(storedInfo !== null) {
    blogInfo = storedInfo;
  }

  showInfo();
}

init();

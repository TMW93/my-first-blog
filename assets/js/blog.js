let blogInfo = [];

function showInfo() {
  for(let i = 0; i < blogInfo.length; i++) {
    const blogEntry = blogInfo[i];
    //create a box to contain the blog entry
    const blogContainer = document.createElement(`div`);
    document.body.appendChild(blogContainer);

    //create a title for the blog entry
    let blogTitle = document.createElement(`h2`);
    blogTitle.textContent = blogEntry.title;
    blogContainer.appendChild(blogTitle);

    //create a box to hold the blog content
    let blogContent = document.createElement(`p`);
    blogContent.textContent = blogEntry.content;
    blogContainer.appendChild(blogContent);

    //create a watermark for the author
    let blogUser = document.createElement(`p`);
    blogUser.textContent = blogEntry.username;
    blogContainer.appendChild(blogUser);
  }
}

function init() {
  const storedInfo = JSON.parse(localStorage.getItem(`blogInfo`));
  
  if(storedInfo !== null) {
    blogInfo = storedInfo;
  }

  showInfo();
  // console.log(blogInfo);
}

init();

//DOM ELEMENTS

const mainPage=document.querySelector('.main-page');
const loginPage=document.querySelector('.login-page');
const rightLoginButton=document.querySelector('.main-page-login-btn-right');
const loginModal=document.querySelector('.login-modal');
const loginModalX=document.querySelector('.login-modal i');
const loginFormBtn=document.querySelector('#login-form-btn');
const publicLoginFormBtn=document.querySelector('.public-login-form-btn');
const feedsPage=document.querySelector(".feeds-page");
const postBtn=document.querySelector(".post-btn");
const modalWrapper=document.querySelector('.modal-wrapper')
const postModalX=document.querySelector('.modal-header i');
const postModalBtn=document.querySelector('.modal-header button');
const postModalTextArea=document.querySelector('.modal-input');
const sidebarX=document.querySelector('.sidebar-header i');
const sidebarWrapper=document.querySelector('#feeds-sidebar-wrapper');
const chevronDown=document.querySelector('#feeds-user');
const placementSidebarWrapper=document.querySelector('.placement-sidebar-wrapper');
const placementSidebarX=document.querySelector('#placement-sidebarX');      
const feedsOfficial=document.querySelector('.feeds-official');
const officialPage=document.querySelector('.official-page');
const officialFeeds=document.querySelector('.official-feeds');
const officialUser=document.querySelector('#official-sidebar-link');
const officialSidebar=document.querySelector('.official-sidebar-wrapper');
const officialSidebarX=document.querySelector('#official-sidebarX');
const officialPostBtn=document.querySelector('#official-post-btn');
const officialPostModalWrapper=document.querySelector('#official-post-modal-wrapper');
const officialPostModalX=document.querySelector('#official-post-modal-wrapper .modal-header i');
const officialPostModalTextArea=document.querySelector('#official-post-modal-wrapper textarea');
const officialPostModalBtn=document.querySelector('#official-post-modal-wrapper button');
const homePage=document.querySelector('.home-page');
const homeSidebarWrapper=document.querySelector('.home-sidebar-wrapper');
const homeUser=document.querySelector('#home-user');
const homeSidebarX=document.querySelector('#home-sidebarX');
const officialHeader=document.querySelector('#official-header');
const feedsHeader=document.querySelector('.feeds-header');
const mainNavLinks=document.querySelector('.main-nav-links');
const mainModel=document.querySelector('.main-modal');
const mainModelX=document.querySelector('.main-modal i');
const placementPage=document.querySelector('.placement-page');
const firstChild=document.querySelector('.iit-first-child');
const faqsPage=document.querySelector('.faqs-page');
const faqsSidebarLink=document.querySelector('#faqs-sidebar-link');
const faqsSidebarWrapper=document.querySelector('.faqs-sidebar-wrapper');
const faqsSidebarX=document.querySelector('#faqs-sidebarX');
const askBtn=document.querySelector('#ask-btn');
const faqsPostModalWrapper=document.querySelector('#faqs-post-modal-wrapper');
const faqsPostModalX=document.querySelector('#faqs-post-modalX');
const faqsTextArea=document.querySelector('.faqs-input');
const faqsPostBtn=document.querySelector('#faqs-post-modal-wrapper button');
const placementSidebarLink=document.querySelector('#placement-sidebar-link');
/* ******************************************* */
/* ******************************************* */

///////////  DISPLAY /////////////////////////
// mainPage.style.display='none';
// loginPage.style.display='none'; //grid
// homePage.style.display='block'
// feedsPage.style.display='none';
// officialPage.style.display='none';
// placementPage.style.display='none';
// faqsPage.style.display='none';
// ////////////////////////////////////////////////

/////////////////user ID////////////////////////////
const publicUser='gopal@gmail.com';
const studentUser='pavankumar@iitkgp.ac.in';
const officeUser='deptOfMath@iitkgp.ac.in';
///////////////////////////////////////////////////



////////////////switch stacked pages/////////////////
const loginHome=document.querySelector('#login-home');
loginHome.addEventListener('click', ()=> {
  loginPage.style.display='none';
  mainPage.style.display='block';
});

document.querySelector('#home-official').addEventListener('click',()=> {
  homePage.style.display='none';
  officialPage.style.display='block';
})

document.querySelector('#home-feeds').addEventListener('click', ()=> {
  homePage.style.display='none';
  feedsPage.style.display='block';
})

document.querySelector('#home-placement').addEventListener('click', ()=>{
  homePage.style.display='none';
  placementPage.style.display='block';
})

document.querySelector('#home-faqs').addEventListener('click', ()=> {
  homePage.style.display='none';
  faqsPage.style.display='block';
})

document.querySelector('.official-page #home').addEventListener('click',()=> {
  homePage.style.display='block';
  officialPage.style.display='none';
})

document.querySelector('.official-page #feeds').addEventListener('click',()=> {
  officialPage.style.display='none';
  feedsPage.style.display='block';
})

document.querySelector('.official-page #placements').addEventListener('click',()=> {
  officialPage.style.display='none';
  placementPage.style.display='block';
})


document.querySelector('.official-page #faqs').addEventListener('click',()=> {
  officialPage.style.display='none';
  faqsPage.style.display='block';
})





document.querySelector('.feeds-page #home').addEventListener('click',()=> {
  homePage.style.display='block';
  feedsPage.style.display='none';
})

document.querySelector('.feeds-page #official').addEventListener('click',()=> {
  officialPage.style.display='block';
  feedsPage.style.display='none';
})

document.querySelector('.feeds-page #placements').addEventListener('click',()=> {
  placementPage.style.display='block';
  feedsPage.style.display='none';
})

document.querySelector('.feeds-page #faqs').addEventListener('click',()=> {
  faqsPage.style.display='block';
  feedsPage.style.display='none';
})




/////////////////end of switch pages/////////////////

//main page

mainNavLinks.addEventListener('click',()=> {
  mainModel.style.display='block';
})

mainModelX.addEventListener('click',()=>{
  mainModel.style.display='none';
})
//end of main page

//home page
homeUser.addEventListener('click', () => {
  console.log('clicked');
  homeSidebarWrapper.style.display='block';
});

homeSidebarX.addEventListener('click', () => {
  homeSidebarWrapper.style.display='none';
})


const links=document.querySelectorAll('.home-img');
for(let l of links)
{
  let num=parseInt(l.id);
  num*=10;
  let requiredPlace=document.getElementById(`${num}`);
  l.addEventListener('click',()=>{
    homePage.style.display='none';
    officialPage.style.display='block';
    requiredPlace.scrollIntoView({
      behaviour:'smooth',
      block:'center',
      duration:1000,
    });
  });
}


//end of home page


// main page
rightLoginButton.addEventListener('click', () => {
  mainPage.style.display='none';
  loginPage.style.display='grid';  
});




// login page IIT

loginModalX.addEventListener('click', () => {
  loginModal.style.display='none';
});

// function officialPageNav(src,name,u)
// {
//   const profilePic=document.querySelector('#official-profile-pic');
//     profilePic.src=`${src}`;
//     const user=document.querySelector('#official-sidebar-link a');
//     user.innerText=`${name}`;
//     SidebarUserimg=document.querySelector('#official-sidebar-profile-pic');
//     SidebarUserimg.src=`${src}`;
//     const profileName=document.querySelector('#official-profile-name');
//     profileName.innerText=`${name}`;
//     const user1=document.querySelector('#official-username');
//     user1.innerText=`${u}`;
//     const sidebarLogo=document.querySelector('#official-sidebar-logo');
//     sidebarLogo.style.display='none';
//     // if(name==='Gopal'){
//     //   const NoOfPostsParagraph=document.querySelector('.official-no-of-posts-paragraph');
//     //   NoOfPostsParagraph.innerText='87 Doubts Asked';
//     //   const postsDoubts=document.querySelector('#official-posts-doubts');
//     //   postsDoubts.innerText='Doubts';
//     // }
// }
// function feedsPageNav(src,name,u)
// {
//     const profilePic=document.querySelector('#feeds-profile-pic');
//     profilePic.src=`${src}`;
//     const user=document.querySelector('#feeds-user a');
//     user.innerText=`${name}`;
//     SidebarUserimg=document.querySelector('#feeds-sidebar-profile-pic');
//     SidebarUserimg.src=`${src}`;
//     const profileName=document.querySelector('#feeds-profile-name');
//     profileName.innerText=`${name}`;
//     const user1=document.querySelector('#feeds-username');
//     user1.innerText=`${u}`;
//     const sidebarLogo=document.querySelector('#feeds-sidebar-logo');
//     sidebarLogo.style.display='none';
//     // if(name==='Gopal'){
//     //   const NoOfPostsParagraph=document.querySelector('.feeds-no-of-posts-paragraph');
//     //   NoOfPostsParagraph.innerText='87 Doubts Asked';
//     //   const postsDoubts=document.querySelector('#feeds-posts-doubts');
//     //   postsDoubts.innerText='Doubts';
//     // }
// }
loginFormBtn.addEventListener('click', () => {
  const username=document.querySelector(".login-user-info");
  const password=document.querySelector(".login-user-password");
  if(username.value==="gopal@gmail.com" && password.value==="gopal")
  {
    
    username.value="";
    password.value="";
    const profilePics=document.querySelectorAll('#profile-pic');
    for(let pic of profilePics)
    {
        pic.src="images/gopal.webp";
    }
    const user=document.querySelectorAll('.user-link');
    for(let x of user) x.innerText='Gopal';
    const profileName=document.querySelectorAll('#profile-name');
    for(let p of profileName) p.innerText='Gopal';
    const user1=document.querySelectorAll('#username');
    for(let u of user1) u.innerText='@gopal';
    const sidebarLogo=document.querySelectorAll('#sidebar-logo');
    for(let s of sidebarLogo) s.style.display='none';
    const NoOfPosts=document.querySelectorAll('.no-of-posts-paragraph');
    for(let m of NoOfPosts)
    {
      m.innerHTML=`<span id="no-of-posts">87</span> Questions`
    }
    const askBtns=document.querySelectorAll('.answer-btn');
    for(let btn of askBtns)
    {
      btn.style.display='none';
    }

    document.querySelector('#official-header').style.display='none';
    document.querySelector('.feeds-header').style.display='none';
    postBtn.style.display='none';
    officialPostBtn.style.display='none';
    loginPage.style.display='none';
    homePage.style.display='block';

  }
  else if(username.value==="pavankumar@iitkgp.ac.in" && password.value==="pavan")
  {
    username.value="";
    password.value="";
    document.querySelector('#official-header').style.display='none';
    document.querySelector('#official-post-btn').style.display='none';
    loginPage.style.display='none';
    homePage.style.display='block';

  }
  else if(username.value==="deptOfMath@iitkgp.ac.in" && password.value==="dept")
  {
    username.value="";
    password.value="";
    const profilePics=document.querySelectorAll('#profile-pic');
    for(let pic of profilePics)
    {
        pic.src="images/iit-kgp.svg";
    }
    const user=document.querySelectorAll('.user-link');
    for(let x of user) x.innerText='IIT kharagpur';
    const profileName=document.querySelectorAll('#profile-name');
    for(let p of profileName) p.innerText='IIT Kharagpur';
    const user1=document.querySelectorAll('#username');
    for(let u of user1) u.innerText='@deptOfMath';
    const sidebarLogo=document.querySelectorAll('#sidebar-logo');
    for(let s of sidebarLogo) s.style.display='none';
    const NoOfPosts=document.querySelectorAll('.no-of-posts-paragraph');
    for(let m of NoOfPosts)
    {
      m.innerHTML=`<span id="no-of-posts">2337</span> Posts`
    }
    //document.querySelector('#official-header').style.display='none';
    document.querySelector('.feeds-header').style.display='none';
    postBtn.style.display='none';
    //officialPostBtn.style.display='none';
    loginPage.style.display='none';
    homePage.style.display='block';
  }
  else {
    loginModal.style.display='block';
  }
});






//post modal 
postBtn.addEventListener('click', () => {
  modalWrapper.style.display='block';
});

postModalX.addEventListener('click', () => {
  postModalBtn.style.opacity=0.5;
  modalWrapper.style.display='none';
  if(postModalTextArea.value.trim()!=="") postModalTextArea.value="";
});


postModalTextArea.addEventListener('input', () => {
  const textAreaValue=postModalTextArea.value.trim();
  if(textAreaValue!=="") postModalBtn.style.opacity=1;
  else postModalBtn.style.opacity=0.5;

});


chevronDown.addEventListener('click',() => {
  sidebarWrapper.style.display='block';
})

sidebarX.addEventListener('click',() => {
  sidebarWrapper.style.display='none';
  feedsPage.style.display='block';
});

function createNewPost()
{
  // Get the post container element
    const posts = document.querySelector("#posts");

    // Create a new post div element
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("post");

    const newPostProfilePic=document.querySelector('#profile-pic');
    const src=newPostProfilePic.src;
    const H4=document.querySelector('#profile-name');
    const h4=H4.innerText;
    const user=document.querySelector('#username');
    const username=user.innerText;
    const textAreaValue=postModalTextArea.value.trim();
    const NoOfPosts=document.querySelectorAll('#no-of-posts');
    for(let n of NoOfPosts)
    {
      let num=parseInt(n.innerText)+1;
      n.innerText=num;
    }
    // New post content
    const newPostContent = `
        <div class="user-avatar">
            <img src=${src}>
        </div>
        <div class="post-content">
            <div class="post-user-info">
                <h4>${h4}</h4>
                <img src="images/iit-kgp.svg" class="iit-kgp-logo">
                <span>${username} just now</span>
            </div>
            <p class="post-text">
                ${textAreaValue}
            </p>
            <div class="post-img">
                <img src="images/post-img-3.webp">
            </div>
            <div class="post-icons">
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-share-alt"></i>
            </div>
        </div>
    `;

    // Set the new post content to the post div element
    newPostDiv.innerHTML = newPostContent;

    // Append the new post to the post container
    posts.prepend(newPostDiv);
}



postModalBtn.addEventListener('click', () => {
  createNewPost();
  postModalTextArea.value="";
  postModalBtn.style.opacity=0.5;
  modalWrapper.style.display='none';
});
  



//official page 



officialUser.addEventListener('click', () => {
  officialSidebar.style.display='block';
});

officialSidebarX.addEventListener('click', ()=> {
  officialSidebar.style.display='none';
});

officialPostBtn.addEventListener('click',() => {
  const x=document.querySelector('#profile-f')
  officialPostModalWrapper.style.display='block';
});

officialPostModalX.addEventListener('click', () => {
  officialPostModalBtn.style.opacity=0.5;
  officialPostModalWrapper.style.display='none';
  if(officialPostModalTextArea.value.trim()!=="") officialPostModalTextArea.value="";
});

officialPostModalTextArea.addEventListener('input', () => {
  const textAreaValue=officialPostModalTextArea.value.trim();
  if(textAreaValue!=="") officialPostModalBtn.style.opacity=1;
  else officialPostModalBtn.style.opacity=0.5;

});


function createNewPostOfficial()
{
  // Get the post container element
    const posts = document.querySelector("#official-posts");

    // Create a new post div element
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("post");

    const newPostProfilePic=document.querySelector('#profile-pic');
    const src=newPostProfilePic.src;
    const H4=document.querySelector('#profile-name');
    const h4=H4.innerText;
    const user=document.querySelector('#username');
    const username=user.innerText;
    const textAreaValue=officialPostModalTextArea.value.trim();
    const NoOfPosts=document.querySelectorAll('#no-of-posts');
    for(let n of NoOfPosts)
    {
      let num=parseInt(n.innerText)+1;
      n.innerText=num;
    }
    // New post content
    const newPostContent = `
        <div class="user-avatar">
            <img src=${src}>
        </div>
        <div class="post-content">
            <div class="post-user-info">
                <h4>${h4}</h4>
                <span>${username} just now</span>
            </div>
            <p class="post-text">
                ${textAreaValue}
            </p>
            <div class="post-img">
                <img src="images/post-img-3.webp">
            </div>
            <div class="post-icons">
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-share-alt"></i>
            </div>
        </div>
    `;

    // Set the new post content to the post div element
    newPostDiv.innerHTML = newPostContent;

    // Append the new post to the post container
    posts.prepend(newPostDiv);
}



officialPostModalBtn.addEventListener('click', () => {
  createNewPostOfficial();
  officialPostModalTextArea.value="";
  officialPostModalBtn.style.opacity=0.5;
  officialPostModalWrapper.style.display='none';
});
  


///placement page ////////
// firstChild.addEventListener('click', () => {
//   document.querySelector('.list-iit').style.display='none';
// })

///faqs page

faqsSidebarLink.addEventListener('click',()=> {
  faqsSidebarWrapper.style.display='block';
});

faqsSidebarX.addEventListener('click',()=>{
  faqsSidebarWrapper.style.display='none';
});

askBtn.addEventListener('click',()=>{
  faqsPostModalWrapper.style.display='block';
  
});

faqsPostModalX.addEventListener('click',()=>{
  faqsPostModalWrapper.style.display='none';
  faqsPostBtn.style.opacity=0.5;
  if(faqsTextArea.value.trim()!=="") faqsTextArea.value="";
})

faqsTextArea.addEventListener('input', () => {
  const textAreaValue=faqsTextArea.value.trim();
  if(textAreaValue!=="") faqsPostBtn.style.opacity=1;
  else faqsPostBtn.style.opacity=0.5;
  

});

function createNewQuestion()
{
  // Get the post container element
    const posts = document.querySelector("#faqs-questions");

    // Create a new post div element
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("question");

    const newPostProfilePic=document.querySelector('#profile-pic');
    const src=newPostProfilePic.src;
    const H4=document.querySelector('#profile-name');
    const h4=H4.innerText;
    const user=document.querySelector('#username');
    const username=user.innerText;
    const textAreaValue=faqsTextArea.value.trim();
    const NoOfPosts=document.querySelectorAll('#no-of-posts');
    for(let n of NoOfPosts)
    {
      let num=parseInt(n.innerText)+1;
      n.innerText=num;
    }
    // New post content
    const newPostContent = `
        <div class="user-avatar">
            <img src=${src}>
        </div>
        <div class="post-content">
            <div class="post-user-info">
                <h4>${h4}</h4>
                <span>${username} just now</span>
            </div>
            <p class="faqs-text">
                ${textAreaValue}
            </p>
           
            <div class="post-icons">
              <i><span>0</span> answers</i>
              <i class="far fa-heart"></i>
              <i class="fas fa-share-alt"></i>
            </div>
        </div>
    `;

    // Set the new post content to the post div element
    newPostDiv.innerHTML = newPostContent;

    // Append the new post to the post container
    posts.prepend(newPostDiv);
}



faqsPostBtn.addEventListener('click', () => {
  createNewQuestion();
  faqsTextArea.value="";
  faqsPostBtn.style.opacity=0.5;
  faqsPostModalWrapper.style.display='none';
});
  

const placementHome=document.querySelector('#placement-home');
placementHome.addEventListener('click',() => {
  placementPage.style.display='none';
  homePage.style.display='block';
});

const placementOfficial=document.querySelector('#placement-official');
placementOfficial.addEventListener('click', ()=> {
  placementPage.style.display='none';
  officialPage.style.display='block';
});

const placementFeeds=document.querySelector('#placement-feeds');
placementFeeds.addEventListener('click',()=>{
  placementPage.style.display='none';
  feedsPage.style.display='block';
});

const placementFaqs=document.querySelector('#placement-faqs');
placementFaqs.addEventListener('click',()=> {
  placementPage.style.display='none';
  faqsPage.style.display='block';
});

placementSidebarLink.addEventListener('click',()=>{
  placementSidebarWrapper.style.display='block';
})

placementSidebarX.addEventListener('click',()=>{
  placementSidebarWrapper.style.display='none';
})
////////faqs page////////

const faqsHome=document.querySelector('#faqs-home');
faqsHome.addEventListener('click',()=> {
  faqsPage.style.display='none';
  homePage.style.display='block';
});

const faqsOfficial=document.querySelector('#faqs-official');
faqsOfficial.addEventListener('click',()=>{
  faqsPage.style.display='none';
  officialPage.style.display='block';
});

const faqsFeeds=document.querySelector('#faqs-feeds');
faqsFeeds.addEventListener('click',()=>{
  faqsPage.style.display='none';
  feedsPage.style.display='block';
});

const faqsPlacement=document.querySelector('#faqs-placement');
faqsPlacement.addEventListener('click',()=>{
  faqsPage.style.display='none';
  placementPage.style.display='block';
});


const logout=document.querySelectorAll('#logout');
for(let l of logout)
{
  l.addEventListener('click', () => {
    mainPage.style.display='block';
    loginPage.style.display='none'; //grid
    homePage.style.display='none'
    feedsPage.style.display='none';
    officialPage.style.display='none';
    placementPage.style.display='none';
    faqsPage.style.display='none';
    sidebarWrapper.style.display='none';
    placementSidebarWrapper.style.display='none';
    faqsSidebarWrapper.style.display='none';
    officialSidebar.style.display='none';
    homeSidebarWrapper.style.display='none';
  })
}


//////////collapsable navbar///////////////////

function toggleMenu1() {
  var menu = document.querySelector(".main-nav-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

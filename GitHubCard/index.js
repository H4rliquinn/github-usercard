// const newFA=[
//   {"login": "stlachman"},
//   {"login": "jonathongre"},
//   {"login": "DerekEtman"},
//   {"login": "DanielWallen87"},
//   {"login": "lucasbaze"},
//   {"login": "pusheadmetal"},
//   {"login": "Chrismis79"},
//   {"login": "chrisbonifacio"},
//   {"login": "NicholasInterest1"},
//   {"login": "MSquared88"},
//   {"login": "JaxAtwood"},
//   {"login": "nomadkitty"},
//   {"login": "allisonkydy"},
//   {"login": "adriangarcia5"},
//   {  "login": "AceMouty"
//   },{"login": "mchrupcala"},
//   {  "login": "jaredkain"
//   },{"login": "otterspawdesign"},
//   {  "login": "EpiceneDev"
//   },{"login": "juarezfrench"},
//   {"login": "TaranMNeeld"},
//   {"login": "shweps13"},
//   {"login": "SGonzalez44"}
// ];

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/H4rliquinn')
//   .then((res)=>{
//     console.log(res.data);
//     const deck=document.querySelector('.cards');
//     deck.appendChild(cardMaker(res.data));
//   })
//   .catch((err) => {
//     console.log(err)
//   });  
  
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// https://api.github.com/users/H4rliquinn/followers

const followersArray = ['stlachman','jonathongre','DerekEtman','DanielWallen87','lucasbaze'];



// followersArray.forEach(item=>{
  // axios.get('https://api.github.com/users/'+item)
  //   .then((res)=>{
  //     console.log(res.data);
  //     const deck=document.querySelector('.cards');
  //     deck.appendChild(cardMaker(res.data));
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   }); 
// });
let newFA = [];
//Followerlist from API
  axios.get('https://api.github.com/users/H4rliquinn/followers')
  .then((res)=>{
     newFA = res.data;
     console.log(newFA);
     return newFA;
  })
  .then((res)=>{
   for (let x=0; x<5 ;x++){

      axios.get('https://api.github.com/users/'+newFA[x].login)
      .then((res)=>{
        // console.log(res.data);
        const deck=document.querySelector('.cards');
        deck.appendChild(cardMaker(res.data));
      })
      .catch((err) => {
        console.log(err)
      }); 

   };
 })
  .catch((err) => {
    console.log(err)
  });
 

 




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardMaker(follower){
  const newCard=document.createElement('div');
  newCard.classList.add('card');

  const newPic=document.createElement('img');
  newCard.appendChild(newPic);
  newPic.src=follower.avatar_url;

  const newCInfo=document.createElement('div');
  newCInfo.classList.add('card-info');
  newCard.appendChild(newCInfo);

  const newName=document.createElement('h3');
  newCInfo.classList.add('name');
  newCInfo.appendChild(newName);
  newName.textContent=follower.name;

  const newUserName=document.createElement('p');
  newUserName.classList.add('username');
  newCInfo.appendChild(newUserName);
  newUserName.textContent=follower.login;

  const newLocation=document.createElement('p');
  newCInfo.appendChild(newLocation);
  newLocation.textContent='Location: '+follower.location;

  const newProfile=document.createElement('p');
  newCInfo.appendChild(newProfile);
  newProfile.textContent=`Profile: `;

  const newLink=document.createElement('a');
  newProfile.appendChild(newLink);
  newLink.href=follower.html_url;
  newLink.textContent=follower.html_url;

  const newFollowers=document.createElement('p');
  newCInfo.appendChild(newFollowers);
  newFollowers.textContent='Followers: '+follower.followers;

  const newFollowing=document.createElement('p');
  newCInfo.appendChild(newFollowing);
  newFollowing.textContent='Following: '+follower.following;

  const newBio=document.createElement('p');
  newCInfo.appendChild(newBio);
  newBio.textContent='Bio: '+follower.bio;

  return newCard;
}
  


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

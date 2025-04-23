const guessedLetters=document.querySelector(".guessed-letters")
const button=document.querySelector(".guess");
const paragraph=document.querySelector("#p");
const textInput=document.querySelector(".letter");
const wordInProgress=document.querySelector(".word-in-progress");
const guessesSpan=document.querySelector(".remaining span");
const message=document.querySelector(".messages");
const playAgainButton=document.querySelector(".play-again")
const updateText=[];
for(const text of word ){
console.log(text)
placeholderLetters.push("●")
placeholderLetters.push("●")

}
wordInProgress.innerText=placeholderLetters.join("")

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});
const divInformation=document.querySelector(".overveiw");
// this is where profile information will appear
const username="reigninxtdoor";
const profile=async function(){
    const git =await fetch(`" https://api.github.com"/${username}`)
}
const gituser=await.git.json(reigninxtdoor);
console.log(data);
const userData =function(gitUser){
   const div=document.createElement("div");
   div.classList.add("user-info");
   div.innerHTML=`  <figure>
      <img alt="user avatar" src=${gitUser.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${gitUser.name}</p>
      <p><strong>Bio:</strong> ${gitUser.bio}</p>
      <p><strong>Location:</strong> ${gitUser.location}</p>
      <p><strong>Number of public repos:</strong> ${gitUser.number-of-public-repos}</p>
    </div> `}
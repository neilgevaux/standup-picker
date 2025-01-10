const peopleList = ["Lissa", "Matt", "Neil", "Phil", "Tom"]
let memberName = "";

function pickPerson() {
  const randomNumber = Math.floor(Math.random() * peopleList.length);
  memberName = peopleList[randomNumber]; 
  document.getElementById("name-display").textContent = memberName
}

const peopleList = ["Lissa", "Matt", "Neil", "Phil", "Tom"]
let memberName = "";
let namesPrinted = false;

function pickPerson() {
  const randomNumber = Math.floor(Math.random() * peopleList.length);
  memberName = peopleList[randomNumber]; 
  document.getElementById("name-display").textContent = memberName
}

function shuffle(array) {
  let m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t
  }

  return(array);
}

function printNames() {
  if (!namesPrinted) {
    const names = shuffle(peopleList);
    const list = document.getElementById("names");
    let delay = 0;
    
    names.forEach( (name) => {
      const listItem = list.appendChild(document.createElement("li"));
      listItem.textContent = name;
      listItem.style.opacity = 0;
      list.appendChild(listItem);

      setTimeout(() => {
        listItem.style.opacity = 1;
      },delay);

       delay += 200;
    });

    namesPrinted = true;
  }
}

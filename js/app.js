//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var nameArray = document.getElementsByClassName("name");
//get all the name divs into one array
//console.log(nameArray);
for(var i= 0;i<nameArray.length;i++) {
  var currentName = nameArray[i]; //target current restaurant in array
  //console.log(currentName);
  currentName.addEventListener("click",showMe); //add event ilstener so when each name is clicked, it activates function showMe
}//loop through each name to add the event listener

function showMe() {
  var menu = this.querySelectorAll(".menu")[0];//menu goes into the object that called it, name.  finds all menu class items and puts it into array.  saves first item in array
  //console.log(menu);
  if(menu.style.display==="none") {//if menu is hiding
    menu.style.display = "block"; //show menu
  } else {//if menu is anything but not showing
    menu.style.display = "none";
  }
}//toggles menu on and off




















/*var ffArray = document.getElementsByClassName("name");
//console.log(ffArray);

for(var i = 0; i < ffArray.length;i++) {
  var ffName = ffArray[i];
  console.log(ffName);
  ffName.addEventListener("click",showMe);
}

function showMe() {
  var ffMenu = this.querySelectorAll(".menu")[0];
  if(ffMenu.style.display === "none") {
    ffMenu.style.display = "block";
  } else {
    ffMenu.style.display = "none";
  }
}*/
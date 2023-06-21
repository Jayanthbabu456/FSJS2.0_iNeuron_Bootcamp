# PROJECT 5

# TASK-1

![image](./Output/DOM%20P2%20SS.png)

```javascript
var addButton = document.getElementsByClassName("nav-center")[0].children[2];

console.log(addButton);

var buttonElement = document.createElement("a");
addButton.appendChild(buttonElement);
buttonElement.setAttribute("href", "#");
buttonElement.setAttribute("class", "btn");
buttonElement.innerText = "Pro Subcriptions";
```

# TASK-2

![image](./Output/DOM%20P2%20SS.png)

```javascript
var cardSection = document.getElementsByClassName("recipe-gallery");

var addCard = document.createElement("div");
cardSection[0].appendChild(addCard);
addCard.setAttribute("class", "card");

var aTag = document.createElement("a");
addCard.appendChild(aTag);
aTag.setAttribute("href", "#");
aTag.setAttribute("class", "recipe-text");

var imageTag = document.createElement("img");
aTag.appendChild(imageTag);
imageTag.setAttribute("src", "./img/recipe-5.jpeg");
imageTag.setAttribute("class", "recipe-img");

var titleTag = document.createElement("h5");
aTag.appendChild(titleTag);
titleTag.setAttribute("class", "recipe-name");
titleTag.innerText = "Chicken Tikka";

var pTag = document.createElement("p");
aTag.appendChild(pTag);
pTag.setAttribute("class", "recipe-disp");
pTag.innerText = "I have cretaed this using js";
```

# PROJECT 2

# TASK-1

![image](./secondAssignmentImage/task1Output.png)

```javascript
var ul = document.querySelector("ul");
ul.children[2].innerHTML = "Project";

const accordianHeading = document.querySelectorAll(".accordian h3");
accordianHeading.forEach((element) => {
  element.style.backgroundColor = "#dadaf8";
});

const accordianParagraph = document.querySelectorAll(".accordian p");
accordianParagraph.forEach((element) => {
  element.style.backgroundColor = "#eeeeff";
});
```

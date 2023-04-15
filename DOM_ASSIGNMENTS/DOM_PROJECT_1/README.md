# PROJECT 1

# TASK-1

![image](./firstAssignmentImage/task1Output.png)

```javascript
var unorderList = document.querySelector("ul");

var firstList = unorderList.children[2];
firstList.innerHTML = "Project";

var list2 = document.createElement("li");
list2.innerHTML = '<a href="#">Hire Me</a>';
unorderList.appendChild(list2);
```

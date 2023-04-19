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

# TASK-2

![image](./firstAssignmentImage/task2Output.png)

```javascript
var input = document.querySelector("input");

input.placeholder = "Search My Project";
```

# TASK-3

![image](./firstAssignmentImage/task3Output.png)

```javascript
var unorderList = document.querySelector("ul");

unorderList.children[2].innerHTML = "Projects";
```

# TASK-4

![image](./firstAssignmentImage/task4Output.png)

```javascript
var image = document.querySelector("img");

image.setAttribute("src", "./image.jpg");
```

# TASK-5

![image](./firstAssignmentImage/task5Output.png)

```javascript
var buttonDiv = document.getElementsByClassName("hero-right-section-btns");

var button = document.createElement("button");
button.innerHTML = "Support Me";

buttonDiv[0].appendChild(button);
```

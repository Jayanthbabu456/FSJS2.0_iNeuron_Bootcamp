# PROJECT 7

# TASK-1

![image](./ass7.1-after.png)

```javascript
var languageOffered = document.getElementsByClassName("main__languages")[0];
var aTags = languageOffered.getElementsByTagName("a");

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent.includes("2.0")) {
    languageOffered.removeChild(aTags[i]);
  }
}
```

# TASK-2

![image](./ass7.2-after.png)

```javascript
var input = document.querySelector(".main__form-input");

input.removeAttribute("disabled");
input.setAttribute("placeholder", "iNeuron");

var submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");

document.addEventListener("load", () => {});
```

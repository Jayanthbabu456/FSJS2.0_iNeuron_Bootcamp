# PROJECT 6

# TASK-1

![image](./Output/DOM%20P3%20SS-1.png)

```javascript
var companyLogo = document.getElementsByClassName("logo")[0];
companyLogo.setAttribute("src", "./assets/ineuron-logo.png");
```

# TASK-2

![image](./Output/DOM%20P3%20SS-2.png)

```javascript
var priceSpan = document.getElementsByClassName("app_price")[0].children[0];
priceSpan.innerHTML = "$10";

var footer_social = document.querySelector(".footer_social");
var footer_social_ico = document.createElement("div");
footer_social.appendChild(footer_social_ico);
footer_social_ico.setAttribute("class", "footer_social_ico");
footer_social_ico.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
```

# TPL is an template system in JavaScript
![preview](/img/introduce.png)

## Demo
https://frentsel.github.io/_tpl/

## Download
**CDN:** https://cdn.rawgit.com/frentsel/_tpl/master/tpl.min.js

## Basic Usage

```javascript
var data = {
    user:  {
        firstName: "Jesica",
        age: 27,
        parent: {
            mother: {
                firstName: "Samantha"
            }
        }
    }
};
var html = document.getElementById('text').innerHTML;
var result = tpl(html, data);
document.getElementById('result').innerHTML = result;
```

## Dependencies

none

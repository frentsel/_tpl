# TPL is a template system in JavaScript
![preview](/img/introduce.png)

## Demo
https://frentsel.github.io/_tpl/

## Download
**CDN:** https://cdn.rawgit.com/frentsel/_tpl/master/tpl.min.js

## Basic Usage

```javascript
var data = {
    id: 123,
    name: {
        first: "Vasya"
    },
    loc: {
        street: "Shekspira",
        prop1: {
            end: 'Yahooooooooooo! :)',
            too: {
                deep: "!!!"
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

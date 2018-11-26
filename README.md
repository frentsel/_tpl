# TPL is an template system in JavaScript

## Demo
https://frentsel.github.io/_tpl/

### Example HTML
```html
<p>
  User: {user.firstName}<br />,
  age:{user.age}<br />,
  mother: {user.parent.mother.name}
</p>
```

### Data and JS
```javascript
var data = {
  user: {
    name: "Alex",
    age: 27,
    parent: {
      mother: {
        name: "Samantha"
      }
    }
  }
};
var result = tpl(html, data);
```

### Result
```html
<p>
  User: Alex<br>,
  age: 27<br>,
  mother: Samantha
</p>
```

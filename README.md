# TPL is a template system in JavaScript

## Demo
https://frentsel.github.io/_tpl/

### Example HTML
```html
<p>User: {user.firstName}, age:{user.age}, mother: {user.parent.mother}</p>
```

### Data and JS
```javascript
var data = {
  user: {
    name: "Alex",
    age: 27,
    parent: {
      mother: "Samantha"
    }
  }
};
var result = tpl(html, data);
```

### Result
```html
<p>User: Alex, age: 27, mother: Samantha</p>
```

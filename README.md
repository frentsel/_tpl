# TPL
TPL it's a simple template system in JavaScript with data nesting ability.

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

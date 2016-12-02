var data = {
  id: 123,
  name: {
    first: "Vasya",
    last: "Pupkin"
  },
  loc: {
    street: "Shekspira",
    city: "Kharkiv",
    country: "Ukraine",
    prop1: {
      end: 'Yahooooooooooo! :)',
      too: {
        deep: "!!!"
      }
    }
  } 
};

var getValue = function(obj, str) {
  str.split('.').map(function(key){
    if (key in obj)
      obj = obj[key];
  });  
  return obj;
}

var tpl = function(_str, _data){
  var keys = _str.match(/{[^}]+}/gim);
  keys.map(function(key, val) {
    key = key.replace(/{|}/g, '');
    val = getValue(_data, key);
    _str = _str.split('{'+key+'}').join(val);
  });
  return _str;
}

var str = 'User id: {id}, name: {name.first}, location {loc.street}, Res: {loc.prop1.end}, Devil: {loc.prop1.too.deep}';

console.log(tpl(str, data));

console.dir(data);
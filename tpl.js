var tpl = function(_str, _data){

  var keys = _str.match(/{[^}]+}/gim);
  var getValue = function(obj, str) {
        str.split('.').map(function(key){
          if (key in obj)
            obj = obj[key];
        });
        return obj;
      };

  keys.map(function(key, val) {
    key = key.replace(/{|}/g, '');
    val = getValue(_data, key);
    _str = _str.split('{'+key+'}').join(val);
  });

  return _str;
};
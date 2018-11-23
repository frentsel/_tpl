const tpl = function(str, data) {
  const getValue = (obj, keys) => {
    if (typeof obj !== 'object') return obj;
    if (keys) return getValue(obj[keys.shift()], keys);
  }
  return str.trim().replace(/\{([^\}]+)\}/g, (_, keys) => getValue(data, keys.split('.')));
};

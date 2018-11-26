const tpl = function(str, data) {
  const getValue = (obj, keys) => {
    if (typeof obj !== 'object') {
      return obj;
    }
    if (keys) {
      const key = keys.shift();
      const data = obj[key];
      return getValue(data, keys);
    }
    return obj.toString();
  }
  return str.replace(/\{([^\}]+)\}/g, (idle, keys) => {
    const keysList = keys.split('.');
    return getValue(data, keysList);
  });
};

class DataTypeUtils {
  constructor() {
    this.toString = Object.prototype.toString;
  }

  isObject(val) {
    return this.toString.call(val) === '[object Object]';
  }

  isArray(val) {
    return this.toString.call(val) === '[object Array]';
  }

  isNull(val) {
    return this.toString.call(val) === '[object Null]';
  }

  isUndefined(val) {
    return this.toString.call(val) === '[object Undefined]';
  }

  isDefined(val) {
    return !this.isUndefined(val) && !this.isNull(val);
  }

  isNumber(val) {
    // Note: NaN is also a number
    return this.toString.call(val) === '[object Number]';
  }

  isString(val) {
    return this.toString.call(val) === '[object String]';
  }

  isBoolean(val) {
    return this.toString.call(val) === '[object Boolean]';
  }

  isNaN(val) {
    // eslint-disable-next-line no-self-compare
    return val !== val;
  }

  isDate(val) {
    return this.toString.call(val) === '[object Date]';
  }

  isFunction(val) {
    return this.toString.call(val) === '[object Function]';
  }

  isRegex(val) {
    return this.toString.call(val) === '[object RegExp]';
  }

  isPromise(val) {
    return this.toString.call(val) === '[object Promise]';
  }

  getType(val) {
    return this.isObject(val)
      ? 'Object'
      : this.isArray(val)
      ? 'Array'
      : this.isNull(val)
      ? 'Null'
      : this.isUndefined(val)
      ? 'Undefined'
      : this.isNaN(val)
      ? 'NaN'
      : this.isNumber(val)
      ? 'Number'
      : this.isString(val)
      ? 'String'
      : this.isBoolean(val)
      ? 'Boolean'
      : this.isDate(val)
      ? 'Date'
      : this.isRegex(val)
      ? 'Regex'
      : this.isFunction(val)
      ? 'Function'
      : this.isPromise(val)
      ? 'Promise'
      : 'Unknown Type';
  }
}

module.exports = new DataTypeUtils();

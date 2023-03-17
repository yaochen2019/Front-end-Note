var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      switch (c) {
        case '(':
          stack.push(')');
          break;
        case '[':
          stack.push(']');
          break;
        case '{':
          stack.push('}');
          break;
        default:
          console.log("former",stack);
          if (c !== stack.pop()) {
            return false;
          }
          console.log("later",stack);
      }
    }
    return stack.length === 0;
  };


  console.log(isValid("()[]{}"));

const addStrings = (num1, num2, base = 10) => {
    // 结果
    let result = '';
    // 进位标记
    let carry = 0;
    // 设置 a、b 的长度，方便逆序遍历
    let num1Index = num1.length - 1, num2Index = num2.length - 1;
    while (num1Index >= 0 || num2Index >= 0) { // num1 或 num2 还有位可以相加
      // num1Index bIndex可能为负数值，需要转化为 0
      sum = (+num1[num1Index] || 0) + (+num2[num2Index] || 0) + carry;
      // 是否需要进位
      carry = sum >= base ? 1 : 0;
      // 计算最终结果
      result = sum % base + result;
      // 移位后往更高位靠
      num1Index--;
      num2Index--;
    }
    // 如果计算完毕后还有进位，那么前面 + 1
    if (carry) {
      result = '1' + result;
    }
    // 返回最终结果
    return result;
  };
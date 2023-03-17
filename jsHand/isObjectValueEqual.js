function isObjectValueEqual(a, b) {
	// 判断两个对象是否指向同一内存，指向同一内存返回 true
	if (a === b) return true // 获取两个对象键值数组
	let aProps = Object.getOwnPropertyNames(a)
	let bProps = Object.getOwnPropertyNames(b)
	// 判断两个对象键值数组长度是否一致，不一致返回 false
	if (aProps.length !== bProps.length) return false // 遍历对象的键值
	for (let prop in a) {
		// 判断 a 的键值，在 b 中是否存在，不存在，返回 false
		if (b.hasOwnProperty(prop)) {
		// 判断 a 的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回 false
			if (typeof a[prop] === 'object') {
				if (!isObjectValueEqual(a[prop], b[prop])) return false
			} else if (a[prop] !== b[prop]) {
				return false
			}
		} else {
			return false
		}
	}
	return true
}
/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  //表示数组中的对应的值的下标是多少
  //然后删除的时候就可以根据val找到数组里面的下标 然后在数组中进行删除
  this.map = new Map();

  //存放值
  this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  //如果已经有这个值了就返回false
  if (this.map.has(val)) {
    return false;
  } else {
    //在表中记录插入的值在数组中的下标
    this.map.set(val, this.values.length);
    //在数组中添加这个值
    this.values.push(val);
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    // 找到要删除的值的下标
    const deleteIndex = this.map.get(val);
    // 得到最后一个元素
    const lastVal = this.values.pop();
    // 用最后一个数代替要删除的值
    this.values[deleteIndex] = lastVal;
    // 更新本来是最后一个元素在map中记录的下标
    this.map.set(lastVal, deleteIndex);

    // 在map中删除
    this.map.delete(val);

    return true;
  } else {
    //如果没有这个值就返回false
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let size = this.values.length;
  //返回一个0到values的长度之间的随机数
  let random = Math.floor(Math.random() * size);
  //以随机数为下标返回
  return this.values[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        let value = this.map.get(key);
        //为了将最近使用过的放在最后面
        this.map.delete(key);
        this.map.set(key, value);
        return value;//哈希表中存在返回对应的value
    }
     return -1;//哈希表中不存在返回-1
};

LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) {
        this.map.delete(key);//为了将最近使用过的放在最后面
    }
    this.map.set(key, value);
    if(this.map.size > this.capacity ) {//超过容量
        this.map.delete(this.map.keys().next().value);//得到最前面的key并删除此键值对
    }
};
module.exports = function props(props) {
	var data = props ? props : {};
	
	function Inner() {
		this.all = function (keys) {
			return keys.reduce(function(acc, cur) {
				acc[cur] = data[cur] ? data[cur] : false;
				return acc;
			}, {})
		};
		
		this.deep = function (keys, defualt) {
			return keys.reduce(function(acc, cur) {
				acc = acc[cur] ? acc[cur]
					: (typeof defualt !== 'undefined' ? defualt : false);
				return acc;
			}, data);
		}
	}
	
	return function(key, defualt) {
		if (!key) {
			return new Inner();
		}
		return data[key] ? data[key]
			: (typeof defualt !== 'undefined' ? defualt : false);
	}
};

var props = require('./index');

test('should get value by key', function () {
	var data = {x: 1, y: 2};
	var prop = props(data);
	expect(prop('x')).toBe(1);
});

test('should get empty value', function () {
	var prop = props({});
	expect(prop('a')).toBe(false);
});

test('should get default value', function () {
	var prop = props({});
	expect(prop('q', 'test value')).toBe('test value');
});

test('should get deep value', function () {
	var data = {x: {b: {c: 1}}, y: 2};
	var prop = props(data);
	expect(prop(['x', 'b', 'c'])).toBe(1);
});

test('should get default value, deep, all', function () {
	var data = {x: {b: {c: 1}}, y: 2};
	var prop = props(data);
	expect(prop(['x', 'b', 'c', 'e'], 'empty')).toBe('empty');
});

test('should get object by keys', function () {
	var data = {x: 1, y: 2, z: 'string'};
	var prop = props(data);
	var result = prop().all(['x', 'y', 'z']);
	expect(result).toEqual(data);
});

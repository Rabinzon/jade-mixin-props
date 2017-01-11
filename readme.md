## jade-mixin-props 
Helper function for simplify usage of jade mixin arguments.

```
$ npm i --save jade-mixin-props
```

### Examples:

Typical mixin
```
minix block(data)
	- data = data || {}
	- data.title = data.title || 'default'
	- data.size = data.size || 0
	- data.mod = data.mod || false
	- data.list = data.list || []

	.block(class=data.mod)
		h1!=data.title
			span!=data.size
		ul
			each item in data.list
				li=item
```

Same with helper:

```
minix block(data)
	- var prop = props(data)
	.block(class=prop('mod'))
		h1!=prop('title', 'default')
			span!=prop('size', 0)
			ul
				each item in prop('list', [])
					li=item
```

also you can get value by path:
```
var data = {x: {y: {z: 'z value'} } };

var prop = props(data);

prop('['x', 'y', 'z']') // 'z value'
```

or multiple values: 
```
var data = {x: 1, y: 2, z: 3};

var prop = props(data);

prop.all(['x', 'y', 'z']) // {x: 1, y: 2, z: 3}

const {x, z} = prop.all(['x', 'z']);
x // 1
z // 3
```

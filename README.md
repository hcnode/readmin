## Usages 

* `npm install readmin --save`
* import module `import readmin from 'readmin'`
* call module as function `readmin(config)`

## Config


```javascript
    components: [ // content components
		{
			id: "group",
			text: "nginx组",
			component: Group // import react component
		}, {
			id: "node",
			text: "nginx节点",
			component: Node
		}, {
			id: "publish",
			text: "发布",
			component: Publish
		}
	],
	nav: [
		"group", "node", "publish"
	],
	componentDidMount: function () { // hook componentDidMount

	},
	index: function () { // home page
		return <div>test index</div>; 
	},
	containerId: 'container' // content container
```


## Test

* `npm install`
* `npm run build`
* `npm run dev`
* visit http://localhost:8080/

/**
 * Created by harry on 16/4/11.
 */
import React from 'react'
import { render, findDOMNode } from 'react-dom'
import readmin from './index'

class Test1 extends React.Component{
	render(){
		return <div>Test1</div>
	}
}

class Test2 extends React.Component{
	render(){
		return <div>Test2</div>
	}
}

readmin({
	components : [
		{
			id : "test1",
			text : "测试1",
			component : Test1
		},{
			id : "test2",
			text : "测试2",
			component : Test2
		}
	],
	nav : [
		"test1", "test2"
	],
	componentDidMount : function () {

	},
	index : function () {
		return <div>test index</div>
	},
	containerId : 'container'
});
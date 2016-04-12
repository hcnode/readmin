import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute, Link } from 'react-router'

export default function (config) {
  // 组件配置
  /*[
    {
      name : "route1", // 路由名称
      text : "title", // title
      component: ReactComponent // 组件对象
    }
  ]*/
  const components = config.components;
  // 导航,可以是route数组,也可以是function
  const nav = config.nav;
  // app加载后调用
  const componentDidMount = config.componentDidMount;
  // 首页component
  const index = config.index;
  // app渲染的容器
  const containerId = config.containerId;
  // 主界面组件定义
  const App = React.createClass({
    getInitialState() {
      return {
        navItems: components, // 导航数据
        loading: true
      }
    },

    componentDidMount() {
      // 内容容器的长宽设置
      $('#appContainer').css({
        width: screen.availWidth + "px",
        height: screen.availHeight - 70 + "px"
      });
      componentDidMount && componentDidMount(this);
    },

    createNav(){
      if(typeof nav == "function"){
        return nav();
      }else{
        return nav.map(value => <li><Link to={`/${value}`}>{components.find(item => item.id == value).text}</Link></li>);
      }
    },

    render() {
      return (
          <div className="App" id='appContainer'>
            <div className="nav">
              <ul>
                {
                    this.createNav()
                }
              </ul>
            </div>
            <div className="Content">
              {this.props.children}
            </div>
          </div>
      )
    }
  })

  const Index = React.createClass({
    render() {
      return index ? index() : <h1>首页</h1>;
    }
  })

  // 图表容器
  const Container = React.createClass({
    getStateFromStore(props) {
      const component = props ? props.params : this.props.params
      return {
        component: components.find(value => value.id == component.id)
      }
    },

    getInitialState() {
      return this.getStateFromStore()
    },
    // 组件的props发生变化时调用
    componentWillReceiveProps(nextProps) {
      this.setState(this.getStateFromStore(nextProps))
    },

    render() {
      const item = this.state.component;
      if (item) {
        // 组件名称
        const name = item.text;
        // 组件的类
        var Component = item.component;
        return <div className="component-wrapper">
          <h3>{name}</h3>
          <Component {...this.props}/>
        </div>;
      } else {
        return <div></div>;
      }
    }
  })

  render((
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path=":id" component={Container}/>
        </Route>
      </Router>
  ), document.getElementById(containerId))
}

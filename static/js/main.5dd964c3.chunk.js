(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(3),r=n(4),c=n(7),o=n(6),a=n(0),i=n(1),h=n(5),l=n.n(h),u=(n(13),n(14),function(e){return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),height:"180px",width:"180px",alt:"monsters"}),Object(a.jsx)("h2",{children:e.monster.name}),Object(a.jsx)("p",{children:e.monster.email})]})}),d=function(e){return Object(a.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(a.jsx)(u,{monster:e},e.id)}))})},j=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return Object(a.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=(n(16),function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsxs)("div",{className:"Monsters",children:[Object(a.jsx)("h1",{children:"Monster Rolodex"}),Object(a.jsx)(j,{placeholder:" search monsters",handleChange:this.handleChange}),Object(a.jsx)(d,{monsters:s})]})}}]),n}(i.Component));l.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.5dd964c3.chunk.js.map
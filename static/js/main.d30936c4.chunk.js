(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),i=(t(12),t(13),t(3)),o=t(4),p=t(6),s=t(5),u=function(e){Object(p.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={total:e.props.total,perPage:e.props.perPage,page:e.props.page},e.nextPage=function(a){a.preventDefault(),e.setState((function(e){return{page:e.page+1}}))},e.previousPage=function(a){a.preventDefault(),e.setState((function(e){return{page:e.page-1}}))},e.onClickHandler=function(a,t){a.preventDefault(),e.setState({page:t})},e.onChangeHandler=function(a){var t=a.target.value;e.state.perPage!==t&&e.setState({page:1,perPage:+t})},e}return Object(o.a)(t,[{key:"renderPagination",value:function(){for(var e=this,a=this.state,t=a.total,n=a.perPage,l=a.page,c=t/n,i=[],o=function(a){i.push(r.a.createElement("li",{key:a,className:"page-item ".concat(l===a+1?"active":"")},r.a.createElement("a",{className:"page-link",href:"/",onClick:function(t){return e.onClickHandler(t,a+1)}},a+1)))},p=0;p<c;p+=1)o(p);return i}},{key:"render",value:function(){var e=this.state,a=e.total,t=e.perPage,n=e.page;return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{className:"form-select","aria-label":"Default select example",style:{width:"150px"},value:t,onChange:this.onChangeHandler},r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20")),r.a.createElement("p",null,"".concat((n-1)*t+1,"\n          - ").concat(n*t>a?a:n*t,"\n            of ").concat(a)),r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item ".concat(1===n?"disabled":"")},r.a.createElement("a",{className:"page-link",href:"/",onClick:this.previousPage},"Previous")),this.renderPagination(),r.a.createElement("li",{className:"page-item\n                ".concat(n===this.renderPagination().length?"disabled":"")},r.a.createElement("a",{className:"page-link",href:"/",onClick:this.nextPage},"Next")))))}}]),t}(r.a.PureComponent);u.defaultProps={perPage:5,page:1};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Pagination"),r.a.createElement(u,{total:50}))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d30936c4.chunk.js.map
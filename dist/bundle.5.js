(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return _});var n,r=t(99),c=t.n(r),i=t(20),s=t(1),l=t.n(s),o=t(102),d=t.n(o),m=(t(204),t(94)),u=t(96),p=t(6);let w=()=>decodeURI(window.location.hash).replace(/^#/,"");let _=Object(u.a)(w())(n=Object(i.b)(({userReducer:e,articleReducer:a})=>({userReducer:e,articleReducer:a}),{fetchArticleDetailSaga:p.b})(n=class extends s.Component{componentDidMount(){this.props.fetchArticleDetailSaga(w())}render(){const e=c.a.get(this.props.userReducer,"res.data.viewer",""),a=c.a.get(this.props.articleReducer,"articleDetailHttpResponse","");return l.a.createElement("div",{className:"DetailPage"},l.a.createElement(m.a,{title:a.title,data:e}),l.a.createElement("div",{className:"DetailPage__content"},l.a.createElement(d.a,{className:"markdown-body",source:a.body})))}})||n)||n},94:function(e,a,t){"use strict";var n=t(1),r=t.n(n);t(95);a.a=function(e){const{data:a,title:t}=e;return r.a.createElement("div",{className:"Viewer"},r.a.createElement("div",{className:"Viewer__container"},r.a.createElement("h1",{className:"Viewer__title"},t),r.a.createElement("div",{className:"Viewer__detail"},r.a.createElement("img",{className:"Viewer__image",alt:"avatar",src:a.avatarUrl}),r.a.createElement("span",{className:"Viewer__detail-list"},r.a.createElement("span",{className:"Viewer__detail-name"},a.name),r.a.createElement("span",{className:"Viewer__detail-bio"},a.bio)))))}},95:function(e,a,t){},96:function(e,a,t){"use strict";var n=t(1),r=t.n(n);a.a=(e=>a=>(class extends a{componentDidMount(){document.title=e}render(){return r.a.createElement(a,null)}}))}}]);
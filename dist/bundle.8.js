(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{205:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return _});var r,n=a(99),s=a.n(n),c=a(20),i=a(1),o=a.n(i),l=a(102),d=a.n(l),m=(a(205),a(94)),p=a(6),u=a(96);const w=()=>decodeURI(window.location.hash).replace(/^#/,"");let _=Object(u.a)(w())(r=Object(c.b)(({userReducer:e,repositoryReducer:t})=>({userReducer:e,repositoryReducer:t}),{fetchRepositoryDetailSaga:p.h})(r=class extends i.Component{componentDidMount(){this.props.fetchRepositoryDetailSaga(w())}render(){const e=s.a.get(this.props.userReducer,"res.data.viewer",""),t=s.a.get(this.props.repositoryReducer,"repositoryDetailHttpResponse.data.search.edges[0].node.object.text",""),a=s.a.get(this.props.repositoryReducer,"repositoryDetailHttpResponse.data.search.edges[0].node.nameWithOwner","");return o.a.createElement("div",{className:"DetailPage"},o.a.createElement(m.a,{title:a,data:e}),o.a.createElement("div",{className:"DetailPage__content"},o.a.createElement(d.a,{className:"markdown-body",source:t})))}})||r)||r},94:function(e,t,a){"use strict";var r=a(1),n=a.n(r);a(95);t.a=function(e){const{data:t,title:a}=e;return n.a.createElement("div",{className:"Viewer"},n.a.createElement("div",{className:"Viewer__container"},n.a.createElement("h1",{className:"Viewer__title"},a),n.a.createElement("div",{className:"Viewer__detail"},n.a.createElement("img",{className:"Viewer__image",alt:"avatar",src:t.avatarUrl}),n.a.createElement("span",{className:"Viewer__detail-list"},n.a.createElement("span",{className:"Viewer__detail-name"},t.name),n.a.createElement("span",{className:"Viewer__detail-bio"},t.bio)))))}},95:function(e,t,a){},96:function(e,t,a){"use strict";var r=a(1),n=a.n(r);t.a=(e=>t=>(class extends t{componentDidMount(){document.title=e}render(){return n.a.createElement(t,null)}}))}}]);
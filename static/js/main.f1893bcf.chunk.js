(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,a){e.exports=a(405)},405:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchPosts",function(){return V}),a.d(n,"fetchComments",function(){return X});a(211);var r=a(0),l=a.n(r),c=a(63),s=a.n(c),i=a(421),o=a(24),u=a(25),m=a(57),h=a(29),d=a(58),E=a(407),b=a(413),p=a(68),f=a(419),g=a(418),j=a(406),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(p.a)(Object(p.a)(a))),a.state={collapsed:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(g.a,{fixed:"top",inverted:!0},l.a.createElement(b.a,null,l.a.createElement(g.a.Item,{header:!0,as:f.a,exact:!0,to:"/",children:"Home"},l.a.createElement(j.a,{size:"mini",src:"./logo.png",style:{marginRight:"1.5em"}}),"Home"),l.a.createElement(g.a.Item,{header:!0,as:f.a,exact:!0,to:"/unit",children:"unit"}))))}}]),t}(r.Component);O.displayName=O.name;var v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(b.a,{style:{marginTop:"7em"}},this.props.children))}}]),t}(r.Component);v.displayName=v.name;var y=a(56),w=a(64),C=(a(378),a(417)),S=a(420),k=a(416),x=a(186),F=a(422),R="USER_FETCH_REQUESTED",T={requestPosts:Object(F.a)(R),receivePosts:Object(F.a)("USER_FETCH_SUCCESS"),faildPosts:Object(F.a)("USER_FETCH_FAILED")},P=a(415),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"renderTable",value:function(e){return l.a.createElement(P.a,{celled:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement("th",null,"userId"),l.a.createElement("th",null,"id"),l.a.createElement("th",null,"title"),l.a.createElement("th",null,"body"))),l.a.createElement(P.a.Body,null,e.map(function(e){return l.a.createElement(P.a.Row,{key:e.id},l.a.createElement(P.a.Cell,null,e.userId),l.a.createElement(P.a.Cell,null,e.id),l.a.createElement(P.a.Cell,null,e.title),l.a.createElement(P.a.Cell,null,e.body))})))}},{key:"renderTableSingle",value:function(e){return l.a.createElement(P.a,{celled:!0},l.a.createElement(P.a.Header,null,l.a.createElement(P.a.Row,null,l.a.createElement("th",null,"userId"),l.a.createElement("th",null,"id"),l.a.createElement("th",null,"title"),l.a.createElement("th",null,"body"))),l.a.createElement(P.a.Body,null,l.a.createElement(P.a.Row,null,l.a.createElement(P.a.Cell,null,e.userId),l.a.createElement(P.a.Cell,null,e.id),l.a.createElement(P.a.Cell,null,e.title),l.a.createElement(P.a.Cell,null,e.body))))}},{key:"render",value:function(){console.log(Array.isArray(this.props.items));var e=Array.isArray(this.props.items)?this.renderTable(this.props.items):this.renderTableSingle(this.props.items);return l.a.createElement("div",null," ",e)}}]),t}(r.Component);var H=Object(w.b)(function(e){return e.units})(_),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).displayName=t.name,a.state={loading:!0,message:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleMessage",value:function(e){this.setState({searchString:e.target.value})}},{key:"requestPosts",value:function(){this.props.requestPosts(this.state.searchString)}},{key:"render",value:function(){var e=this,t=(this.state.loading,this.props.isFetching?l.a.createElement("p",null,"Loading..."):l.a.createElement(H,null)),a=this.props.hasError?l.a.createElement(C.a,{error:!0},this.props.errorMessage):l.a.createElement("div",null);return l.a.createElement(S.a,{divided:"vertically"},l.a.createElement(S.a.Row,{columns:12},l.a.createElement(k.a,{loading:this.props.isFetching,onChange:function(t){return e.handleMessage(t)},icon:l.a.createElement(x.a,{name:"search",inverted:!0,circular:!0,link:!0,onClick:function(){return e.requestPosts()}}),placeholder:"Search..."}),this.state.searchString),l.a.createElement(S.a.Row,{columns:12},a,t))}}]),t}(r.Component),N=Object(w.b)(function(e){return e.units},function(e){return Object(y.b)(T,e)})(I),U=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(v,null,l.a.createElement(E.a,{exact:!0,path:"/",component:N}))}}]),t}(r.Component);U.displayName=U.name;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A,B=a(132),M=a(92),q=a(414),D=Object(q.a)((A={},Object(M.a)(A,R,function(e,t){return{isFetching:!0,hasError:!1}}),Object(M.a)(A,"USER_FETCH_SUCCESS",function(e,t){return{isFetching:!1,items:t.payload}}),Object(M.a)(A,"USER_FETCH_FAILED",function(e,t){return{isFetching:!1,items:[],hasError:!0,errorMessage:t.payload}}),A),{isFetching:!1,items:[],hasError:!1,errorMessage:""}),L=Object(y.c)({units:D});var J=a(71),W=a.n(J),z=a(72),Q=a(198),$=a.n(Q),G="https://jsonplaceholder.typicode.com/";function K(e){var t=-1===e.indexOf(G)?G+e:e;return console.warn(t),$.a.get(t).then(function(e){return{result:e}}).catch(function(e){return{err:e}})}var V=function(e){return K("posts/".concat(e))},X=function(e){return K("comments/".concat(e))},Y=n,Z=W.a.mark(te),ee=W.a.mark(ae);function te(e){var t,a,n,r;return W.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.warn(e.payload),(t=e.payload)||(t=""),l.next=5,Object(z.a)(Y.fetchPosts,t);case 5:if(a=l.sent,n=a.result,r=a.err,console.warn(n),!n){l.next=14;break}return l.next=12,Object(z.b)(T.receivePosts(n.data));case 12:l.next=16;break;case 14:return l.next=16,Object(z.b)(T.faildPosts(r.message));case 16:case"end":return l.stop()}},Z,this)}function ae(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)(R,te);case 2:case"end":return e.stop()}},ee,this)}var ne=document.getElementsByTagName("base")[0].getAttribute("href"),re=document.getElementById("root"),le=function(e){var t=Object(B.b)(),a=Object(y.e)(L,e,Object(y.a)(t));return a.runSaga=t.run,a.close=function(){return a.dispatch(B.a)},a}();le.runSaga(ae),s.a.render(l.a.createElement(w.a,{store:le},l.a.createElement(i.a,{basename:ne},l.a.createElement(U,null))),re),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[210,2,1]]]);
//# sourceMappingURL=main.f1893bcf.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){e.exports=n(419)},419:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchPosts",function(){return Z}),n.d(a,"fetchComments",function(){return ee});n(219);var r=n(0),c=n.n(r),l=n(24),o=n(35),u=n(50),i=n.n(u),s=n(51),m=n(125),E=n(76),d=n(193),h=n(194),p=n(206),f=n(195),b=n(207),g=n(28),v=(n(266),n(429)),y=n(432),C=n(428),j=n(137),O=n(433),w="USER_FETCH_REQUESTED",R={requestPosts:Object(O.a)(w),receivePosts:Object(O.a)("USER_FETCH_SUCCESS"),faildPosts:Object(O.a)("USER_FETCH_FAILED")},S=n(427);var k=Object(o.connect)(function(e){return e.home})(function(e){var t,n,a=Array.isArray(e.items)?(n=e.items,c.a.createElement(S.a,{celled:!0},c.a.createElement(S.a.Header,null,c.a.createElement(S.a.Row,null,c.a.createElement("th",null,"userId"),c.a.createElement("th",null,"id"),c.a.createElement("th",null,"title"),c.a.createElement("th",null,"body"))),c.a.createElement(S.a.Body,null,n.map(function(e){return c.a.createElement(S.a.Row,{key:e.id},c.a.createElement(S.a.Cell,null,e.userId),c.a.createElement(S.a.Cell,null,e.id),c.a.createElement(S.a.Cell,null,e.title),c.a.createElement(S.a.Cell,null,e.body))})))):(t=e.items,c.a.createElement(S.a,{celled:!0},c.a.createElement(S.a.Header,null,c.a.createElement(S.a.Row,null,c.a.createElement("th",null,"userId"),c.a.createElement("th",null,"id"),c.a.createElement("th",null,"title"),c.a.createElement("th",null,"body"))),c.a.createElement(S.a.Body,null,c.a.createElement(S.a.Row,null,c.a.createElement(S.a.Cell,null,t.userId),c.a.createElement(S.a.Cell,null,t.id),c.a.createElement(S.a.Cell,null,t.title),c.a.createElement(S.a.Cell,null,t.body)))));return c.a.createElement("div",null," ",a)}),x=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).displayName=t.name,n.state={loading:!0,message:""},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleMessage",value:function(e){this.setState({searchString:e.target.value})}},{key:"requestPosts",value:function(){this.props.requestPosts(this.state.searchString)}},{key:"render",value:function(){var e=this,t=this.props.isFetching?c.a.createElement("p",null,"Loading..."):c.a.createElement(k,null),n=this.props.hasError?c.a.createElement(v.a,{error:!0},this.props.errorMessage):c.a.createElement("div",null);return c.a.createElement(y.a,{divided:"vertically"},c.a.createElement(y.a.Row,{columns:12},c.a.createElement(C.a,{loading:this.props.isFetching,onChange:function(t){return e.handleMessage(t)},icon:c.a.createElement(j.a,{name:"search",inverted:!0,circular:!0,link:!0,onClick:function(){return e.requestPosts()}}),placeholder:"Search..."}),this.state.searchString),c.a.createElement(y.a.Row,{columns:12},n,t))}}]),t}(r.Component),F=Object(o.connect)(function(e){return e.home},function(e){return Object(g.b)(R,e)})(x),T=Object(o.connect)(function(e){return{count:e.count}},function(e){return{increment:function(){return e({type:"INCREMENT"})},decrement:function(){return e({type:"DECREMENT"})}}})(function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Counter"),c.a.createElement("p",null,"This is a simple example of a React component."),c.a.createElement("p",null,"Current count: ",c.a.createElement("strong",null,e.count)),c.a.createElement("button",{onClick:e.increment},"+"),c.a.createElement("button",{onClick:e.decrement},"-"))}),I=n(431),P=n(430),M=n(425),_=n(142),H=function(){return c.a.createElement("header",null,c.a.createElement(P.a,{fixed:"top",inverted:!0},c.a.createElement(M.a,null,c.a.createElement(P.a.Item,{header:!0,as:I.a,exact:!0,to:"/",children:"Home"},c.a.createElement(_.a,{size:"mini",src:"./logo.png",style:{marginRight:"1.5em"}}),"Home"),c.a.createElement(P.a.Item,{header:!0,as:I.a,exact:!0,to:"/counter",children:"Counter"}))))},N=c.a.createElement("div",null,c.a.createElement(H,null),c.a.createElement(M.a,{style:{marginTop:"6em"}},c.a.createElement(m.a,null,c.a.createElement(E.a,{exact:!0,path:"/",component:F}),c.a.createElement(E.a,{path:"/counter",component:T}),c.a.createElement(E.a,{component:F})))),U=function(e){var t=e.history;return c.a.createElement(s.ConnectedRouter,{history:t},N)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A,B=n(143),D=n(204),q=n(91),L=n(426),J=Object(L.a)((A={},Object(q.a)(A,w,function(e,t){return{isFetching:!0,hasError:!1}}),Object(q.a)(A,"USER_FETCH_SUCCESS",function(e,t){return{isFetching:!1,items:t.payload}}),Object(q.a)(A,"USER_FETCH_FAILED",function(e,t){return{isFetching:!1,items:[],hasError:!0,errorMessage:t.payload}}),A),{isFetching:!1,items:[],hasError:!1,errorMessage:""}),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},z=function(e){return Object(g.c)({home:J,count:W,router:Object(s.connectRouter)(e)})};var Q=n(69),$=n.n(Q),G=n(70),K=n(205),V=n.n(K),X="https://jsonplaceholder.typicode.com/";function Y(e){var t=-1===e.indexOf(X)?X+e:e;return console.log("callApi",t),V.a.get(t).then(function(e){return{result:e}}).catch(function(e){return{err:e}})}var Z=function(e){return Y("posts/".concat(e))},ee=function(e){return Y("comments/".concat(e))},te=a,ne=$.a.mark(re),ae=$.a.mark(ce);function re(e){var t,n,a,r;return $.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("action.payload",e.payload),(t=e.payload)||(t=""),c.next=5,Object(G.a)(te.fetchPosts,t);case 5:if(n=c.sent,a=n.result,r=n.err,console.log("call response",a),!a){c.next=14;break}return c.next=12,Object(G.b)(R.receivePosts(a.data));case 12:c.next=16;break;case 14:return c.next=16,Object(G.b)(R.faildPosts(r.message));case 16:case"end":return c.stop()}},ne,this)}function ce(){return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)(w,re);case 2:case"end":return e.stop()}},ae,this)}var le=document.getElementsByTagName("base")[0].getAttribute("href"),oe=Object(l.a)({basename:le}),ue=function(e,t){var n=Object(D.createLogger)({}),a=Object(B.b)(),r=Object(g.e)(z(e),t,Object(g.a)(a,n,Object(s.routerMiddleware)(e)));return r.runSaga=a.run,r.close=function(){return r.dispatch(B.a)},r}(oe,window.initialReduxState);ue.runSaga(ce),i.a.render(c.a.createElement(o.Provider,{store:ue},c.a.createElement(U,{history:oe})),document.getElementById("react-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[218,2,1]]]);
//# sourceMappingURL=main.20bda1be.chunk.js.map
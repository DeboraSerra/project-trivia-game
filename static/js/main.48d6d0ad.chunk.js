(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{34:function(e,t,a){e.exports=a(58)},39:function(e,t,a){},43:function(e,t,a){},45:function(e,t){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(20),s=a.n(c),i=(a(39),a(25)),o=a(4),l=a(3),u=(a(43),a(10)),m=a(11),p=a(13),d=a(12),g=a(21),h=a.n(g),f=a(6),v=a.n(f),b=a(15),y={type:"IS_LOADING"},E={type:"NOT_LOADING"},k=function(e,t){return{type:"SET_SCORE",score:e,assertion:t}},O=function(e){return{type:"ZERO_SCORE",score:e}},j=(a(47),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.getName,a=e.getEmail,n=e.getScore,c=!e.loading&&h()(a).toString();return document.title="(Score: ".concat(n,") Trivia Game G-16"),r.a.createElement("div",{className:"header-sect"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(c),alt:"nome da pessoa","data-testid":"header-profile-picture"}),r.a.createElement("h4",{"data-testid":"header-player-name"},t),r.a.createElement("h4",{className:"header-score","data-testid":"header-score"},n))}}]),a}(r.a.Component)),w=Object(o.b)((function(e){return{getName:e.player.name,getEmail:e.player.gravatarEmail,getScore:e.player.score,loading:e.isLoading}}))(j),S=a(23);localStorage.getItem("TRIVIA_RANKING")||localStorage.setItem("TRIVIA_RANKING",JSON.stringify([]));var N=function(e){var t=JSON.parse(localStorage.getItem("TRIVIA_RANKING"))||[],a=[].concat(Object(S.a)(t),[e]);localStorage.setItem("TRIVIA_RANKING",JSON.stringify(a))},I=function(){return JSON.parse(localStorage.getItem("TRIVIA_RANKING"))},x=(a(48),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).saveRanking=function(){var t=e.props,a=t.name,n=t.score,r=t.email,c=t.dispatch,s=h()(r).toString(),i="https://www.gravatar.com/avatar/".concat(s);N({name:a,score:n,picture:i});c(O(0))},e.btnPlayAgain=function(){var t=e.props.history;e.saveRanking(),t.push("/project-trivia-game/")},e.btnRanking=function(){var t=e.props.history;e.saveRanking(),t.push("/project-trivia-game/ranking")},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.score,a=e.assertions;return r.a.createElement("section",{className:"feedback-page"},r.a.createElement(w,null),r.a.createElement("section",{className:"feedback-sect"},r.a.createElement("section",{className:"feed-sect"},r.a.createElement("p",{"data-testid":"feedback-text"},a<3?"Could be better...":"Well Done!"),r.a.createElement("p",null,r.a.createElement("span",null,"Pontua\xe7\xe3o"),r.a.createElement("span",{"data-testid":"feedback-total-score"},t)),r.a.createElement("p",null,r.a.createElement("span",null,"N\xfamero de acertos"),r.a.createElement("span",{"data-testid":"feedback-total-question"},a))),r.a.createElement("section",{className:"btn-sect"},r.a.createElement("button",{"data-testid":"btn-play-again",type:"button",onClick:this.btnPlayAgain},"Play Again"),r.a.createElement("button",{"data-testid":"btn-ranking",type:"button",onClick:this.btnRanking},"Ranking"))))}}]),a}(r.a.Component)),C=Object(o.b)((function(e){return{score:e.player.score,assertions:e.player.assertions,name:e.player.name,email:e.player.gravatarEmail}}))(x),A=function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n,r,c,s,i,o,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.token,n=t.gameSettings,r=n.type,c=n.difficulty,s=n.category,i="https://opentdb.com/api.php?amount=5",s&&(i+="&category=".concat(s)),c&&(i+="&difficulty=".concat(c)),r&&(i+="&type=".concat(r)),i+="&token=".concat(a),e.next=9,fetch(i);case 9:return o=e.sent,e.next=12,o.json();case 12:return l=e.sent,e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.trivia_categories);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=(a(49),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).fetchQuestions=Object(b.a)(v.a.mark((function t(){var a,n,r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.token,r=a.gameSettings,t.next=3,A({token:n,gameSettings:r});case 3:c=t.sent,e.setState({results:c.results},(function(){var t=e.state,a=t.results,n=t.index;e.randomBtns(a[n]),e.setTimer()}));case 5:case"end":return t.stop()}}),t)}))),e.randomBtns=function(t){var a=t.incorrect_answers,n=[].concat(Object(S.a)(a),[t.correct_answer]),r=n.sort((function(){return Math.random()-.5}));e.setState({answers:r,correctAnswer:t.correct_answer,wrongAnswers:a})},e.incrementIndexResults=function(){var t=e.props.history,a=e.state.index;e.setState({index:a<4?a+1:4,timer:30,answerSelected:!1},(function(){var t=e.state,a=t.results,n=t.index;clearInterval(e.timerId),e.setTimer(),e.randomBtns(a[n])})),4===a&&t.push("/project-trivia-game/feedback")},e.setTimer=function(){e.timerId=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}),(function(){0===e.state.timer&&clearInterval(e.timerId)}))}),1e3)},e.selectAnswer=function(t){clearInterval(e.timerId),e.setState({answerSelected:!0}),e.saveScore(t)},e.saveScore=function(t){var a=e.state,n=a.correctAnswer,r=a.results,c=a.index,s=a.timer,i=e.props.dispatch,o=r[c].difficulty;if(t===n){if("easy"===o){return i(k(10+1*s,1))}if("medium"===o){return i(k(10+2*s,1))}if("hard"===o){return i(k(10+3*s,1))}}},e.toggleClass=function(t){var a=e.state,n=a.correctAnswer,r=a.answerSelected;return t===n&&r?"correct-answer":t!==n&&r?"wrong-answer":void 0},e.state={results:[],index:0,timer:30,answers:[],correctAnswer:"",wrongAnswers:[],answerSelected:!1},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.loading;t||e.loading===t||this.fetchQuestions()}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.index,c=t.timer,s=t.answers,i=t.correctAnswer,o=t.wrongAnswers,l=t.answerSelected,u=this.props.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("p",{className:"timer"},c),r.a.createElement("section",{className:"game-sect"},a.length>0&&r.a.createElement("div",{className:"game-card"},r.a.createElement("div",{className:"question-sect"},r.a.createElement("h3",{"data-testid":"question-category"},a[n].category),r.a.createElement("article",null,r.a.createElement("p",{"data-testid":"question-text"},a[n].question))),r.a.createElement("div",{"data-testid":"answer-options",className:"answers-sect"},s.map((function(t){return r.a.createElement("button",{key:t,type:"button",disabled:0===c,className:e.toggleClass(t),"data-testid":t===i?"correct-answer":"wrong-answer-".concat(o.indexOf(t)),onClick:function(){return e.selectAnswer(t)}},t)})))),r.a.createElement("div",{className:"next-btn-sect"},l&&r.a.createElement("button",{className:"btn-next",type:"button",onClick:this.incrementIndexResults,"data-testid":"btn-next"},"Pr\xf3ximo"),0===c&&r.a.createElement("button",{className:"btn-next",type:"button",onClick:function(){return u.push("/project-trivia-game/")}},"Play Again"))))}}]),a}(n.Component)),_=Object(o.b)((function(e){return{token:e.token,loading:e.isLoading,gameSettings:e.gameSettings}}))(T),G=a(17),D=a(22),K=(a(50),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.setState(Object(G.a)({},n,r))},e.handleClick=function(){var t=e.state,a=t.email,n=t.name,r=e.props,c=r.findToken,s=r.history,i=r.getUserInfo;c(),s.push("/project-trivia-game/game"),i(a,n)},e.state={name:"",email:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.history,t=this.state,a=t.name,n=t.email;return r.a.createElement("section",{className:"login-sect"},r.a.createElement("h1",null,"Wanna play"," ",r.a.createElement("em",null,"Trivia?")),r.a.createElement("section",null,r.a.createElement("input",{name:"name","data-testid":"input-player-name",type:"text",id:"inputName",placeholder:"Digite seu nome",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"email",name:"email","data-testid":"input-gravatar-email",placeholder:"Digite seu email",value:n,onChange:this.handleChange})),r.a.createElement("section",{className:"login-btn-sect"},r.a.createElement("button",{type:"button","data-testid":"btn-play",disabled:a.length<1||n.length<1,onClick:this.handleClick},"Play"),r.a.createElement("button",{type:"button","data-testid":"btn-settings",onClick:function(){return e.push("/project-trivia-game/settings")}},r.a.createElement(D.b,{className:"settings-icon"}))))}}]),a}(r.a.Component)),L=Object(o.b)(null,(function(e){return{findToken:function(){return e(function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y),e.prev=1,e.next=4,fetch("https://opentdb.com/api_token.php?command=request");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"GET_TOKEN",token:n.token}),t(E),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}())},getUserInfo:function(t,a){return e(function(e,t){return{type:"GET_USER_INFOS",email:e,name:t}}(t,a))}}}))(K),M=a(30),P=(a(51),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).btnGoHome=function(){e.props.history.push("/project-trivia-game/")},e.sortedRanking=function(){var e=I();return e=e.sort((function(e,t){return t.score-e.score}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.sortedRanking();return r.a.createElement("section",{className:"ranking-page"},r.a.createElement("p",{"data-testid":"ranking-title",className:"ranking-title"},"Ranking"),r.a.createElement("button",{className:"ranking-btn",type:"button","data-testid":"btn-go-home",onClick:this.btnGoHome},r.a.createElement(M.a,{className:"home-icon"})),r.a.createElement("section",{className:"ranking-sect"},e.map((function(e,t){var a=e.name,n=e.score,c=e.picture;return r.a.createElement("div",{key:a,className:"ranking-card"},r.a.createElement("img",{src:c,alt:a}),r.a.createElement("p",{"data-testid":"player-name-".concat(t),className:"ranking-name"},a),r.a.createElement("p",null,r.a.createElement("span",{"data-testid":"player-score-".concat(t)},n),r.a.createElement("span",null," pontos")))}))))}}]),a}(r.a.Component)),q=Object(o.b)()(P),J=(a(52),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).sendSettings=function(){var t=e.props,a=t.dispatch,n=t.history,r=e.state,c=r.type,s=r.category,i=r.difficulty;a({type:"SET_GAME_SETTINGS",payload:{type:c,category:s,difficulty:i}}),n.push("/project-trivia-game/")},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(G.a)({},r,n))},e.state={type:"",difficulty:"",category:0,categories:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,this.setState({categories:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.type,a=e.difficulty,n=e.category,c=e.categories;return r.a.createElement("section",{className:"settings-sect"},r.a.createElement("h1",{"data-testid":"settings-title"},"Settings"),r.a.createElement("select",{name:"category",value:n,onChange:this.handleChange},c.map((function(e){var t=e.id,a=e.name;return r.a.createElement("option",{value:t,key:t},a)}))),r.a.createElement("select",{name:"type",value:t,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select a type"),r.a.createElement("option",{value:"multiple"},"Multiple choice"),r.a.createElement("option",{value:"boolean"},"True or false")),r.a.createElement("select",{name:"difficulty",value:a,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select a difficulty"),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard")),r.a.createElement("button",{type:"button",onClick:this.sendSettings},r.a.createElement(D.a,{className:"save-icon"})))}}]),a}(r.a.Component)),B=Object(o.b)()(J);function U(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/project-trivia-game/",component:L}),r.a.createElement(l.a,{exact:!0,path:"/project-trivia-game/feedback",component:C}),r.a.createElement(l.a,{exact:!0,path:"/project-trivia-game/ranking",component:q}),r.a.createElement(l.a,{path:"/project-trivia-game/game",component:_}),r.a.createElement(l.a,{path:"/project-trivia-game/settings",component:B})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(18),W=a(33),F=a(32),H=a(14),Q={type:"",difficulty:"",category:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_SETTINGS":return Object(H.a)(Object(H.a)({},e),t.payload);default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return!0;case"NOT_LOADING":return!1;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOKEN":return t.token;default:return e}},X={name:"",assertions:0,score:0,gravatarEmail:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFOS":return Object(H.a)(Object(H.a)({},e),{},{name:t.name,gravatarEmail:t.email});case"SET_SCORE":return Object(H.a)(Object(H.a)({},e),{},{score:e.score+t.score,assertions:e.assertions+t.assertion});case"ZERO_SCORE":return Object(H.a)(Object(H.a)({},e),{},{assertions:0,score:0});default:return e}},ee=Object(V.combineReducers)({player:Y,token:z,isLoading:$,gameSettings:Z}),te=Object(V.createStore)(ee,Object(F.composeWithDevTools)(Object(V.applyMiddleware)(W.a)));window.Cypress&&(window.store=te);var ae=te;s.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:ae},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.48d6d0ad.chunk.js.map
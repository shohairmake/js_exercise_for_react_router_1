(this.webpackJsonpjs_exercise_for_react_router_1=this.webpackJsonpjs_exercise_for_react_router_1||[]).push([[0],{39:function(e,t,n){e.exports=n(69)},44:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),u=n.n(c),s=n(9),i=n(6),l=(n(44),function(e){var t=e.clickEvent;return a.a.createElement("div",{className:"Button",onClick:t},e.children)});var o=function(e){var t=e.history;return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30db\u30fc\u30e0"),a.a.createElement(l,{clickEvent:function(){t.push("/quiz")}},"\u30af\u30a4\u30ba\u30da\u30fc\u30b8\u3078\u79fb\u52d5"))},h=n(8),m=n.n(h),f=n(11),d=n(12),p=n(13),v=n(37),E=n(32),w=n(38),b=n(19),k=n(33),z=n.n(k),x=n(14),A=n.n(x),O=n(34),y=n.n(O),g=function(){function e(t){var n=t.question,r=t.correctAnswer,a=t.incorrectAnswers;Object(d.a)(this,e),this.question=n,this.correctAnswer=r,this.incorrectAnswers=Object(b.a)(a)}return Object(p.a)(e,[{key:"answerChecker",value:function(e){return e===this.correctAnswer}},{key:"shuffleAnswers",value:function(){return z.a.shuffle([this.correctAnswer].concat(Object(b.a)(this.incorrectAnswers)))}}],[{key:"quizfetcher",value:function(){var t=Object(f.a)(m.a.mark((function t(){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("https://opentdb.com/api.php?amount=10&type=multiple");case 3:return n=t.sent,t.next=6,n.data.results;case 6:return r=t.sent,t.abrupt("return",r.map((function(e){return{question:A.a.decode(e.question),correctAnswer:A.a.decode(e.correct_answer),incorrectAnswers:e.incorrect_answers.map((function(e){return A.a.decode(e)}))}})).map((function(t){return new e(t)})));case 10:t.prev=10,t.t0=t.catch(0),console.log("faild to fetchData at QuizHelper! error message : ".concat(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()}]),e}(),q=(n(63),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).onClickHandler=function(e,t){var r=n.state,a=r.currentIndex,c=r.numberOfCorrects;e.answerChecker(t)?(c++,window.alert("Correct answer!!")):window.alert("Incorrect answer!! (Correct answer is ...".concat(e.correctAnswer,")")),a++,n.setState({currentIndex:a,numberOfCorrects:c})},n.state={quizzes:[],answers:[],currentIndex:0,numberOfCorrects:0},n}return Object(w.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.initAndFetchData()}},{key:"initAndFetchData",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({quizzes:[],currentIndex:0,numberOfCorrects:0}),e.next=3,g.quizfetcher();case 3:t=e.sent,this.setState({quizzes:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.quizzes,n=e.currentIndex;return 0===t.length?this.renderLoading():t.length>0&&n<t.length?this.renderQuiz():t.length>0&&n>=t.length?this.renderResult():void 0}},{key:"renderLoading",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30af\u30a4\u30ba\u30da\u30fc\u30b8"),a.a.createElement("p",null,"Now loading..."),a.a.createElement("hr",null),a.a.createElement(s.b,{to:"/"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"))}},{key:"renderQuiz",value:function(){var e=this,t=this.state,n=t.currentIndex,r=t.quizzes[n],c=r.shuffleAnswers().map((function(t,n){return a.a.createElement("li",{key:n},a.a.createElement(l,{clickEvent:function(){return e.onClickHandler(r,t)}},t))}));return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30af\u30a4\u30ba\u30da\u30fc\u30b8"),a.a.createElement("div",null,a.a.createElement("p",null,r.question),a.a.createElement("ul",{className:"QuizList"},c)),a.a.createElement("hr",null),a.a.createElement(s.b,{to:"/"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"))}},{key:"renderResult",value:function(){var e=this,t=this.state,n=t.quizzes,r=t.numberOfCorrects;return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30af\u30a4\u30ba\u30da\u30fc\u30b8"),a.a.createElement("div",null,a.a.createElement("p",null,"".concat(r,"/").concat(n.length," corrects.")),a.a.createElement(l,{clickEvent:function(){e.initAndFetchData()}},"Restart")),a.a.createElement("hr",null),a.a.createElement(s.b,{to:"/"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"))}}]),t}(r.Component));n(68);var j=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s.a,null,a.a.createElement(i.a,{path:"/",exact:!0,component:o}),a.a.createElement(i.a,{path:"/Quiz/",exact:!0,component:q})))};u.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.aa2e1ff3.chunk.js.map
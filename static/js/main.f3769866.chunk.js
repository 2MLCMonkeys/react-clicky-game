(window["webpackJsonpreact-clicky-game"]=window["webpackJsonpreact-clicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horses-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector.jpg","clicky":false},{"id":2,"image":"https://www.graphics-shop.net/wp-content/uploads/2019/09/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector.jpg","clicky":false},{"id":3,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-5.jpg","clicky":false},{"id":4,"image":"https://www.graphics-shop.net/wp-content/uploads/2019/09/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-3-1.jpg","clicky":false},{"id":5,"image":"https://www.graphics-shop.net/wp-content/uploads/2019/09/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-4-1.jpg","clicky":false},{"id":6,"image":"https://www.graphics-shop.net/wp-content/uploads/2019/09/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-12.jpg","clicky":false},{"id":7,"image":"https://www.graphics-shop.net/wp-content/uploads/2019/09/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-9.jpg","clicky":false},{"id":8,"image":"https://www.graphics-shop.net/wp-content/uploads/2019/09/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-6.jpg","clicky":false},{"id":9,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-3.jpg","clicky":false},{"id":10,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vectors-2.jpg","clicky":false},{"id":11,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-1.jpg","clicky":false},{"id":12,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse.jpg","clicky":false},{"id":13,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-2.jpg","clicky":false},{"id":14,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-Vector-Horse-Vectors-Horses-Vectors-Animals-Vectors-Horse-Silhouette-Mustang-vector-pony-vectorHead-horse-vector-Foal-Vector-5.jpg","clicky":false},{"id":15,"image":"https://www.graphics-shop.net/wp-content/uploads/2018/03/Horse-vector.jpg","clicky":false}]')},,,,,,,,function(e,t,o){e.exports=o(20)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var s=o(0),r=o.n(s),c=o(3),a=o.n(c),n=o(4),i=o(5),l=o(7),p=o(6),u=o(8);o(14);var h=function(e){var t=e.id,o=e.image;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"img-thumbnail img-responsive",src:o,id:t,onClick:function(){return e.clickPicture(t)}})))};o(15);var g=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};o(16);var d=function(e){return r.a.createElement("h1",{className:"title"},e.children)};o(17);var m=function(e){return r.a.createElement("h3",{className:"counter"},e.children)},w=(o(18),function(e){return r.a.createElement("div",{className:!0===e.shaker?"shaker":"still"},e.friends)}),H=o(1),V=function(e){function t(){var e,o;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(o=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={friends:H,clickedArr:[],topScore:0,score:0,message:" ",wrongGuess:!1},o.clickPicture=function(e){var t=o.shuffledArr(H);o.setState({friends:t}),o.state.clickedArr.includes(e)?o.setState({score:0,clickedArr:[],message:"You Already Clicked That! Game Over!! Click an Image to Try Again!",wrongGuess:!0}):o.setState({clickedArr:o.state.clickedArr.concat([e]),score:o.state.score+1,message:"Good Guess!",wrongGuess:!1}),o.state.score>o.state.topScore&&o.setState({topScore:o.state.score})},o.shuffledArr=function(e){for(var t=e.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),s=[e[o],e[t]];e[t]=s[0],e[o]=s[1]}return e},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g,null,r.a.createElement(d,null,"Memory Game"),r.a.createElement(m,null,"Correct Guesses So Far: ",r.a.createElement("span",{className:"score"},this.state.score," | Top Score: ",this.state.topScore),r.a.createElement("p",{className:"message"},this.state.message)),r.a.createElement(w,{shaker:this.state.wrongGuess,friends:this.state.friends.map((function(t){return r.a.createElement(h,{clickPicture:e.clickPicture,id:t.id,key:t.id,image:t.image,value:t.clicky})}))}))}}]),t}(s.Component);o(19);a.a.render(r.a.createElement(V,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f3769866.chunk.js.map
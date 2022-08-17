 
import React from 'react';
 import './index.css';
import ReactDOM from 'react-dom';

let curDate = new Date(2022, 7, 7, 16);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {
    color : 'green'
}
if (curDate >= 1 && curDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';
} else if (curDate >= 12 && curDate < 19){
    greeting = "Good Afternoon";
    cssStyle.color = 'orange';
} else {
    greeting = "Good Night";
    cssStyle.color = 'black';
}

ReactDOM.render(
<> 
<div> 
<h1>Hello World <span style={cssStyle}>{greeting}</span> </h1>
</div>

 
</>,document.getElementById("root"));
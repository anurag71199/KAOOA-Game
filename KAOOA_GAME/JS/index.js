let turn = 0; // 0 = crow && 1 = vulture
let vulture_pos = -1;
let crow_pos = new Set();
let crow_count = 7;
let crow_alive = 7;
let crow_selected;
let crowprev = -1;
let select_flag = 0;
const logs = [];
let logstr = "";
let idx = 0;
//adjacency
// arrd1 = [3,4];
// arrd2 = [3,6];
// arrd3 = [1,2,6,4];
// arrd4 = [1,3,7,5];
// arrd5 = [4,7];
// arrd6 = [2,3,7,8];
// arrd7 = [4,5,8,10];
// arrd8 = [9,6,7,10];
// arrd9 = [6,8];
// arrd10 = [7,8];
// movearr = []

// mainarr = [arrd1,arrd2,arrd3,arrd4,arrd5,arrd6,arrd7,arrd8,arrd9,arrd10];
// function box_init() {
//   const myad = document.getElementById('ad');
//   myad.innerHTML =
//     `
// <div id="ad">
// <div class="centertext">
// <br>
// <br>
// <br>
//   <h1>CROWS IN HOUSE : ${crow_count}</h1>
//     <br><br>
//     <a href="https://www.whatdowedoallday.com/kaooa/" class="button">RULES</button></a>
//     <br><br>
//     <br><br>
      
//         <img src="crow.jpg" alt="crowimg"> 
//       <br><br>
//       <br><br>
      
//         <img src="vulture.jpg" alt="vultureimg"> 
      
//     </div>
//   </div>
// `
// }
// box_init();

const mouse_event = document.querySelector("#mysvg");
// const move3d = document.querySelector(".move3d");
// const container1 = document.querySelector(".container1");

mouse_event.addEventListener("mouseover", e => {
  logstr = "sno: " + idx + " | " + "Type: mouseover | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})
mouse_event.addEventListener("click", e => {
  logstr = "sno: " + idx + " | " + "Type: click | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})
mouse_event.addEventListener("dblclick", e => {
  logstr = "sno: " + idx + " | " + "Type: dblclick | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})
mouse_event.addEventListener("contextmenu", e => {
  logstr = "sno: " + idx + " | " + "Type: contextmenu | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})
mouse_event.addEventListener("mouseleave", e => {
  logstr = "sno: " + idx + " | " + "Type: mouseleave | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})
mouse_event.addEventListener("mousemove", e => {
  logstr = "sno: " + idx + " | " + "Type: mousemove | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})

// container1.addEventListener('mousemove', (e) => {
//   //3d
//   let xAxis = ((window.innerWidth-100) /2 - e.pageX);
//   let yAxis = (window.innerHeight /2 - e.pageY);
//   move3d.style.transform = `rotateY(${xAxis}deg rotateX(${yAxis}deg)`;
//   console.log(xAxis);
// })

mouse_event.addEventListener("mouseup", e => {
  logstr = "sno: " + idx + " | " + "Type: mouseup | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})
mouse_event.addEventListener("mousedown", e => {
  logstr = "sno: " + idx + " | " + "Type: mousedown | " + "X: " + e.x + " | " + "Y: " + e.y + " | ctrlKey: " + e.ctrlKey + " | altKey: " + e.altKey + " | button: " + e.button + " | clientX: " + e.clientX + " | " + "clientY: " + e.clientY + "\n";
  // + "button: " + e.button + " | " + "clientX: " + e.clientX + " | " + "clientY: " + e.clientY + " | " + "ctrlKey: " + e.ctrlKey + "\n";
  logs.push(logstr);
  idx=idx+1;
  // console.log(logs);
})

window.onload = function () {
  // var txt = document.getElementById('txt');
  document.getElementById('link').onclick = function (mouselogs) {
    this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(logs);
  };
};

function box_crow() {
  const myad = document.getElementById('ad');
  myad.innerHTML =
    `
<div id="ad">
<div class="centertext">
<br>
  <h1>CROWS AVAILABLE: ${crow_count}</h1>
  <h1>CROWS<br> ALIVE: ${crow_alive}</h1>
    <br>
    <a href="https://www.whatdowedoallday.com/kaooa/" class="button">RULES</button></a>
    <a href="" id="link" class="button" download="mouselogs.txt">GET LOGS</button></a>
    <br><br>
    <br>
      
        <img class="imgred" src="crow.jpg" alt="crowimg"> 
      <br><br>
      <br><br>
      
        <img src="vulture.jpg" alt="vultureimg"> 
      
    </div>
  </div>
`
}


function box_vul() {
  const myad = document.getElementById('ad');
  myad.innerHTML =
    `
    <div id="ad">
    <div class="centertext">
    <br>
      <h1>CROWS AVAILABLE: ${crow_count}</h1>
      <h1>CROWS<br> ALIVE: ${crow_alive}</h1>
        <br>
        <a href="https://www.whatdowedoallday.com/kaooa/" class="button">RULES</button></a>
        <a href="" id="link" class="button" download="mouselogs.txt">GET LOGS</button></a>
        <br><br>
        <br>
      
        <img src="crow.jpg" alt="crowimg"> 
      <br><br>
      <br><br>
      
        <img class="imgred" src="vulture.jpg" alt="vultureimg"> 
      
    </div>
  </div>
`
}

box_crow();

function mouseOver(x) {
  // console.log(x);
  const v = document.getElementById(x);
  if (window.getComputedStyle(v).fill == "rgb(255, 0, 0)" || window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
    return;
  }
  document.getElementById(x).style.fill = "rgb(255, 0, 0)";
  document.getElementById(x).style.stroke = "black";
  document.getElementById(x).style.strokeWidth = "3";
  document.getElementById(x).style.fill = "rgb(0,255,0)";
  document.getElementById(x).style.fillOpacity = "0.5";
}

function mouseOut(x) {
  const v = document.getElementById(x);
  if (window.getComputedStyle(v).fill == "rgb(255, 0, 0)" || window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
    return;
  }
  document.getElementById(x).style.fill = "black";
  document.getElementById(x).style.stroke = "black";
  document.getElementById(x).style.strokeWidth = "3";
  document.getElementById(x).style.fill = "rgb(0,255,0)";
  document.getElementById(x).style.fillOpacity = "0.0";
}

//check valid move
function valid_move(x) {
  posi = parseInt(vulture_pos.id);
  // console.log(posi);
  mainarr[posi - 1].forEach(myfunc);
  // console.log(movearr);

  function myfunc(i) {
    // console.log("i:"+i);
    if (window.getComputedStyle(document.getElementById(i.toString())).fill == "rgb(0, 255, 0)") {
      document.getElementById(i.toString()).style.stroke = "rgb(255, 0, 0)";
      movearr.push(i);
      // return 1;
    }
    else {
      // return 0;
    }
  }
  const v = document.getElementById(x);
  if (movearr.includes(x.id)) {
    v.style.fillOpacity = "1.0";
    v.style.fill = "rgb(255, 0, 0)";
  }
}

function checkwin_vul() {
  console.log("testing");
  if (crow_alive == 3) {
    alert("VULTURE WINS!");
    // event.preventDefault()
    // swal("Hello world!");
    window.location.reload();
  }
}
function checkwin_crow() {
  console.log("testing");
  if (vulture_pos == -1) {
    return;
  }
  if (vulture_pos.id == 1 &&
    window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 5 &&
    window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 10 &&
    window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 9 &&
    window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 2 &&
    window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 3 &&
    window.getComputedStyle(document.getElementById(1)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(5)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(9)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(2)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 4 &&
    window.getComputedStyle(document.getElementById(1)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(5)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(10)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(2)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 7 &&
    window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(1)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(5)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(10)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(9)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 8 &&
    window.getComputedStyle(document.getElementById(9)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(2)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(5)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(10)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
  if (vulture_pos.id == 6 &&
    window.getComputedStyle(document.getElementById(2)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(1)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(10)).fill == "rgb(0, 0, 255)" &&
    window.getComputedStyle(document.getElementById(9)).fill == "rgb(0, 0, 255)") {
    alert("TEAM CROW WINS!");
    window.location.reload();
  }
}


//change cirle color based on turn
function changecolor(x) {
  // x.preventDefault();
  // console.log(x);
  // if (crow_pos.has(x) && crow_count == 0) {

  // }

  //condition left 72


  const v = document.getElementById(x);
  // console.log(turn);
  // if(turn==1 && vulture_pos != -1){
  //   valid_move(x);
  //   return;
  // }
  if (turn == 1 && vulture_pos == -1) {
    if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)"){
      return;
    }
    vulture_pos = v;
    console.log("vulture pos " + vulture_pos.id);
    v.style.fillOpacity = "1.0";
    v.style.fill = "rgb(255, 0, 0)";
    turn = 0;
    // crow_pos.add(x);
    box_crow();
  }
  //vul turn
  else if (turn == 1) {
    console.log(vulture_pos.id + v.id);
    if (window.getComputedStyle(v).fill == "rgb(255, 0, 0)" || window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
      return;
    }
    else if (vulture_pos.id == 1) {
      if (v.id == 3 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 4 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 6 && window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(3).style.fill = "rgb(0,255,0)";
        document.getElementById(3).style.stroke = "black";
        document.getElementById(3).style.strokeWidth = "3";
        document.getElementById(3).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 7 && window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(4).style.fill = "rgb(0,255,0)";
        document.getElementById(4).style.stroke = "black";
        document.getElementById(4).style.strokeWidth = "3";
        document.getElementById(4).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 5) {
      if (v.id == 4 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 7 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 3 && window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(4).style.fill = "rgb(0,255,0)";
        document.getElementById(4).style.stroke = "black";
        document.getElementById(4).style.strokeWidth = "3";
        document.getElementById(4).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 8 && window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(7).style.fill = "rgb(0,255,0)";
        document.getElementById(7).style.stroke = "black";
        document.getElementById(7).style.strokeWidth = "3";
        document.getElementById(7).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 10) {
      if (v.id == 7 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 8 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 4 && window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(7).style.fill = "rgb(0,255,0)";
        document.getElementById(7).style.stroke = "black";
        document.getElementById(7).style.strokeWidth = "3";
        document.getElementById(7).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 6 && window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(8).style.fill = "rgb(0,255,0)";
        document.getElementById(8).style.stroke = "black";
        document.getElementById(8).style.strokeWidth = "3";
        document.getElementById(8).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 9) {
      if (v.id == 8 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 6 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 7 && window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(8).style.fill = "rgb(0,255,0)";
        document.getElementById(8).style.stroke = "black";
        document.getElementById(8).style.strokeWidth = "3";
        document.getElementById(8).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 3 && window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(6).style.fill = "rgb(0,255,0)";
        document.getElementById(6).style.stroke = "black";
        document.getElementById(6).style.strokeWidth = "3";
        document.getElementById(6).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 2) {
      if (v.id == 3 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 6 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 4 && window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(3).style.fill = "rgb(0,255,0)";
        document.getElementById(3).style.stroke = "black";
        document.getElementById(3).style.strokeWidth = "3";
        document.getElementById(3).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 8 && window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(6).style.fill = "rgb(0,255,0)";
        document.getElementById(6).style.stroke = "black";
        document.getElementById(6).style.strokeWidth = "3";
        document.getElementById(6).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    //inner
    else if (vulture_pos.id == 3) {
      if (v.id == 1 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 4 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 6 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 2 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 5 && window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(4).style.fill = "rgb(0,255,0)";
        document.getElementById(4).style.stroke = "black";
        document.getElementById(4).style.strokeWidth = "3";
        document.getElementById(4).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 9 && window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(6).style.fill = "rgb(0,255,0)";
        document.getElementById(6).style.stroke = "black";
        document.getElementById(6).style.strokeWidth = "3";
        document.getElementById(6).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 4) {
      if (v.id == 1 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 5 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 7 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 3 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 10 && window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(7).style.fill = "rgb(0,255,0)";
        document.getElementById(7).style.stroke = "black";
        document.getElementById(7).style.strokeWidth = "3";
        document.getElementById(7).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 2 && window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(3).style.fill = "rgb(0,255,0)";
        document.getElementById(3).style.stroke = "black";
        document.getElementById(3).style.strokeWidth = "3";
        document.getElementById(3).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 7) {
      if (v.id == 4 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 5 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 10 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 8 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 1 && window.getComputedStyle(document.getElementById(4)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(4).style.fill = "rgb(0,255,0)";
        document.getElementById(4).style.stroke = "black";
        document.getElementById(4).style.strokeWidth = "3";
        document.getElementById(4).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 9 && window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(8).style.fill = "rgb(0,255,0)";
        document.getElementById(8).style.stroke = "black";
        document.getElementById(8).style.strokeWidth = "3";
        document.getElementById(8).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 8) {
      if (v.id == 6 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 7 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 10 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 9 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 5 && window.getComputedStyle(document.getElementById(7)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(7).style.fill = "rgb(0,255,0)";
        document.getElementById(7).style.stroke = "black";
        document.getElementById(7).style.strokeWidth = "3";
        document.getElementById(7).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 2 && window.getComputedStyle(document.getElementById(6)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(6).style.fill = "rgb(0,255,0)";
        document.getElementById(6).style.stroke = "black";
        document.getElementById(6).style.strokeWidth = "3";
        document.getElementById(6).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }

    else if (vulture_pos.id == 6) {
      if (v.id == 2 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }

      if (v.id == 3 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 8 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 9 && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        box_crow();
      }
      if (v.id == 1 && window.getComputedStyle(document.getElementById(3)).fill == "rgb(0, 0, 255)") {
        // vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(3).style.fill = "rgb(0,255,0)";
        document.getElementById(3).style.stroke = "black";
        document.getElementById(3).style.strokeWidth = "3";
        document.getElementById(3).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
      if (v.id == 10 && window.getComputedStyle(document.getElementById(8)).fill == "rgb(0, 0, 255)") {
        vulture_pos.style.fill = "rgb(255, 0, 0)";
        vulture_pos.style.stroke = "black";
        vulture_pos.style.strokeWidth = "3";
        vulture_pos.style.fill = "rgb(0,255,0)";
        vulture_pos.style.fillOpacity = "0.0";
        document.getElementById(8).style.fill = "rgb(0,255,0)";
        document.getElementById(8).style.stroke = "black";
        document.getElementById(8).style.strokeWidth = "3";
        document.getElementById(8).style.fillOpacity = "0.0";

        console.log("vulture pos prev: " + vulture_pos.id);
        vulture_pos = v;
        console.log("new vulture pos " + vulture_pos.id);
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(255, 0, 0)";
        turn = 0;
        crow_alive = crow_alive - 1;
        box_crow();
        checkwin_vul();
      }
    }
    // if(crow_count == 5){
    //   console.log("badiya");
    // }

    else {
      return;
    }

  }
  //crow turn
  if (crow_count == 0) {
    // if (select_flag == 1)
    //   console.log("top : " + crow_selected.id);
    if (v.id == 1) {
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      if (select_flag == 1 && (crow_selected.id == 3 || crow_selected.id == 4) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 5) {
      // console.log(crow_selected.id);
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        console.log("last select changed : " + crow_selected.id);
        return;
      }
      if (select_flag == 1 && (crow_selected.id == 7 || crow_selected.id == 4) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 10) {
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      if (select_flag == 1 && (crow_selected.id == 7 || crow_selected.id == 8) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 9) {
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      if (select_flag == 1 && (crow_selected.id == 6 || crow_selected.id == 8) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 2) {
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      if (select_flag == 1 && (crow_selected.id == 3 || crow_selected.id == 6) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    //inner

    if (v.id == 3) {
      // console.log(crow_selected.id);
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        // console.log("went inside this");
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      if (select_flag == 1)
        console.log("just before if : " + crow_selected.id);
      if (select_flag == 1 && (crow_selected.id == 1 || crow_selected.id == 4 || crow_selected.id == 6 || crow_selected.id == 2) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        // console.log("last selected : " + crow_selected.id);
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 4) {
      // console.log(crow_selected.id);
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        // console.log("went inside this");
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      // if (select_flag == 1)
      //   console.log("just before if : " + crow_selected.id);
      if (select_flag == 1 && (crow_selected.id == 1 || crow_selected.id == 5 || crow_selected.id == 7 || crow_selected.id == 3) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        // console.log("last selected : " + crow_selected.id);
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 7) {
      // console.log(crow_selected.id);
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        // console.log("went inside this");
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      // if (select_flag == 1)
      //   console.log("just before if : " + crow_selected.id);
      if (select_flag == 1 && (crow_selected.id == 4 || crow_selected.id == 5 || crow_selected.id == 10 || crow_selected.id == 8) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        // console.log("last selected : " + crow_selected.id);
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 8) {
      // console.log(crow_selected.id);
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        // console.log("went inside this");
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      // if (select_flag == 1)
      //   console.log("just before if : " + crow_selected.id);
      if (select_flag == 1 && (crow_selected.id == 6 || crow_selected.id == 10 || crow_selected.id == 7 || crow_selected.id == 9) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        // console.log("last selected : " + crow_selected.id);
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    if (v.id == 6) {
      // console.log(crow_selected.id);
      if (window.getComputedStyle(v).fill == "rgb(0, 0, 255)") {
        // console.log("went inside this");
        if (select_flag == 1) {
          crow_selected.style.stroke = "black";
        }
        v.style.stroke = "orange";
        crow_selected = v;
        select_flag = 1;
        return;
      }
      // if (select_flag == 1)
      //   console.log("just before if : " + crow_selected.id);
      if (select_flag == 1 && (crow_selected.id == 3 || crow_selected.id == 8 || crow_selected.id == 9 || crow_selected.id == 2) && window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
        // console.log("last selected : " + crow_selected.id);
        crow_selected.style.fill = "rgb(255, 0, 0)";
        crow_selected.style.stroke = "black";
        crow_selected.style.strokeWidth = "3";
        crow_selected.style.fill = "rgb(0,255,0)";
        crow_selected.style.fillOpacity = "0.0";
        // crow_selected = -1;
        v.style.fillOpacity = "1.0";
        v.style.fill = "rgb(0, 0, 255)";
        turn = 1;
        select_flag = 0;
        box_vul();
        checkwin_crow();
      }
    }

    else {
      return;
    }
  }
  else if (window.getComputedStyle(v).fill == "rgb(0, 255, 0)") {
    console.log("hi");
    if (turn == 0) {
      //crow
      v.style.fillOpacity = "1.0";
      v.style.fill = "rgb(0, 0, 255)";
      turn = 1;
      crow_pos.add(v);
      if (crow_count > 0)
        crow_count = crow_count - 1;
      // if(crow_count == 5){
      //   console.log("badiya");
      // }
      box_vul();
      checkwin_crow();
    }
    // else {
    //   v.style.fillOpacity = "1.0";
    //   v.style.fill = "rgb(255, 0, 0)";
    //   turn = 0;
    //   crow_pos.add(x);
    //   box_crow();
    // }
  }


}

//alert("ok!");
var canvas = document.getElementById("jd__canvas");
var ctx = canvas.getContext("2d"),
    colorTxt = "#FCAF09",
    fontTxt = "22px Bree Serif",
    textContent = [
      "DevBot",
        "🎧"
    ],
    multObj = [],
    maxObj = 50;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function itemObj(x, y, w, h, dx, dy){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    this.colorTxt = colorTxt;
    this.textContent = textContent[Math.floor(Math.random() * textContent.length)];
    this.fontTxt = fontTxt //[Math.floor(Math.random() * fontTxt.length)];
    
    this.drawTxt = function (){
        ctx.font = this.fontTxt;
        ctx.textAlign = "center";
        ctx.fillStyle = this.colorTxt;
        ctx.fillText(this.textContent, this.x, this.y, this.w, this.h);
    }
    
    this.update = function (){
        if(this.x + this.w > innerWidth || this.x - this.w < 0){
            this.dx = - this.dx;
        }
        if(this.y + this.h > innerHeight || this.y - this.h < 0){
            this.dy = - this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        this.drawTxt();
    }
}

function init(){
    multObj = [];
    for(var i = 0; i < maxObj; i++){
        var w = 40,
            h = 32,
            x = Math.random() * (innerWidth - w * 2) + w,
            y = Math.random() * (innerHeight - h * 2) - h,
            dx = (Math.random() - 0.5),
            dy = (Math.random() - 0.5);
        multObj.push(new itemObj(x, y, w, h, dx, dy));
        //console.log(multObj[0]);
    }
}

function animate(){
    requestAnimationFrame(animate);
    
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for(var i = 0; i < multObj.length; i++){
        multObj[i].update();
        
    }
}


init();
animate();

var canvas = document.getElementById("jd__canvas");
var ctx = canvas.getContext("2d");
var _d = document.getElementById("jd__day");
var _m = document.getElementById("jd__mon");
var _y = document.getElementById("jd__year");
var _hr = document.getElementById("jd__hour");
var _mn = document.getElementById("jd__min");
var _sc = document.getElementById("jd__sec");

var color = "rgba(0,108,255,.9)",
    obj = [],
    maxBall = 250,
    maxRadius = 3,
    lineColor = "rgba(0,108,255,.4)";


function initClock(){
    var d = new Date().getDate(),
        m = new Date().getMonth(),
        y = new Date().getFullYear(),
        hr = new Date().getHours(),
        mn = new Date().getMinutes(),
        sc = new Date().getSeconds(),
        fullMonth = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    
    if(d < 10){d = '0' + d}else{d = d};
    if(hr < 10){hr = '0' + hr}else{hr = hr};
    if(mn < 10){mn = '0' + mn}else{mn = mn};
    if(sc < 10){sc = '0' + sc}else{sc = sc};
    
    _d.innerHTML = d;
    _m.innerHTML = fullMonth[m];
    _y.innerHTML = y;
    _hr.innerHTML = hr;
    _mn.innerHTML = mn;
    _sc.innerHTML = sc;
}

window.setInterval(initClock, 1000);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Ball(x, y, radius, vx, vy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    
    this.draw = function (){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    
    this.update = function (){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.vx = - this.vx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.vy = - this.vy;
        }
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.draw();
    }
}


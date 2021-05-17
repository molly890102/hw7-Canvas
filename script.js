var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext('2d')
canvas.width = 400;
canvas.height = 400;

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  // ctx.beginPath()
  // for(var i=0;i<10;i++){
  //   let pos = i*50
  //   ctx.moveTo(pos,0)
  //   ctx.lineTo(pos,400)
  //   ctx.fillText(pos,pos,10)
  //   ctx.moveTo(0,pos)
  //   ctx.lineTo(400,pos)
  //   ctx.fillText(pos,10,pos)
  // }
  // ctx.strokeStyle = "rgba(0,0,0,0.1)"
  // ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2
  ctx.strokeStyle="black"
  ctx.stroke
  ctx.fillStyle = "#FFC3DC"
  ctx.fillRect(50,200,50,150)
  ctx.strokeRect(50,200,50,150)
  ctx.fillStyle = "#F72B78"
  ctx.fillRect(40,175,70,25)
  ctx.strokeRect(40,175,70,25)
  ctx.fillStyle = "#FFC3DC"
  ctx.fillRect(300,200,50,150)
  ctx.strokeRect(300,200,50,150)
  ctx.fillStyle = "#F72B78"
  ctx.fillRect(290,175,70,25)
  ctx.strokeRect(290,175,70,25)
  ctx.fillStyle="#C12C94"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(100,250)
  ctx.lineTo(300,250)
  ctx.lineTo(300,350)
  ctx.lineTo(250,350)
  ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
  ctx.lineTo(150,350)
  ctx.lineTo(100,350)
  ctx.fillStyle="C12C94"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(150,125)
  ctx.lineTo(250,125)
  ctx.lineTo(250,250)
  ctx.lineTo(150,250)
  ctx.closePath()
  ctx.fillStyle="#FFC3DC"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(150,125)
  ctx.lineTo(200,50)
  ctx.lineTo(250,125)
  ctx.closePath()
  ctx.fillStyle="#F72B78"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(200,175,15,Math.PI*2,Math.PI,true)
  ctx.lineTo(185,200)
  ctx.lineTo(215,200)
  ctx.closePath()
  ctx.fillStyle="white"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.fillStyle="#C12C94"
  ctx.fillRect(100,225,25,25)
  ctx.strokeRect(100,225,25,25)
  ctx.fillStyle="#C12C94"
  ctx.fillRect(150,225,25,25)
  ctx.strokeRect(150,225,25,25)
  ctx.fillStyle="#C12C94"
  ctx.fillRect(225,225,25,25)
  ctx.strokeRect(225,225,25,25)
  ctx.fillStyle="#C12C94"
  ctx.fillRect(275,225,25,25)
  ctx.strokeRect(275,225,25,25)

  ctx.beginPath()
  ctx.moveTo(75,175)
  ctx.lineTo(75,125-mouse.y/5)
  ctx.lineTo(100,140 - (time%3)-mouse.y/5)
  ctx.lineTo(75,150-mouse.y/5)
  ctx.closePath()
  ctx.fillStyle="yellow"
  ctx.fill()
  ctx.strokeStyle="#4998FF"
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(325,175)
  ctx.lineTo(325,125-mouse.y/3)
  ctx.lineTo(300,140 - (time%5)-mouse.y/3)
  ctx.lineTo(325,150-mouse.y/3)
  ctx.closePath()
  ctx.fillStyle="yellow"
  ctx.fill()
  ctx.strokeStyle="#4998FF"
  ctx.stroke()
  ctx.fillStyle="#EDBAFF"
  let carx = time%440-40
  ctx.strokeStyle="black"
  ctx.fillRect(carx,340,40,25)
  ctx.strokeRect(carx,340,40,25)
  ctx.beginPath()
  ctx.arc(carx+10,365,5,0,Math.PI*2)
  ctx.arc(carx+30,365,5,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
}
// draw()
setInterval(draw,21)

var mouse = {
  x: 0,
  y: 0
}
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX
  mouse.y = evt.offsetY
})
ctx.beginPath()
ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
ctx.fillStyle="black"
ctx.fill()
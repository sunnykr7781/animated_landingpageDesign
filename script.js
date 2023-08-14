var t = gsap.timeline();
function time(){
  var a = 0
  setInterval(function(){
      a += Math.floor(Math.random()*20)
      if(a<100){
          document.querySelector("#loader h1").innerHTML = a+"%"
      }else{
          a = 100
          document.querySelector("#loader h1").innerHTML = a+"%"
      }
  },150)
}

t.to("#loader h1",{
  delay:0.5,
  duration:1,
  onStart:time()
})
t.to("#loader",{
  top:"-100vh",
  delay:0.4,
  duration:1.5
})
t.from("#navbar img, #navbar h1, #navbar h2, #navbar button", {
  y: -100,
  duaration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
t.from("#main > h1", {
  y: 250,

  opacity: 0,
  stagger: 0.25,
});
t.from("#main > img", {
  scale: 0,
  opacity: 0,
  //   duaration: 2,
});
t.from("h5", {
  scale: 0,
  opacity: 0,
});
t.to("h5", {
  y: 25,
  repeat: -1,
  duaration: 1,
  yoyo: true,
});

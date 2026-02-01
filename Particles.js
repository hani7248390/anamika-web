const c=document.createElement('canvas');document.body.appendChild(c);
const x=c.getContext('2d');c.style='position:fixed;top:0;left:0;z-index:-1';
function rs(){c.width=innerWidth;c.height=innerHeight}rs();onresize=rs;
let p=[...Array(70)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,v:1}));
(function a(){x.clearRect(0,0,c.width,c.height);
 p.forEach(o=>{o.y+=o.v;if(o.y>c.height)o.y=0;x.fillStyle='#2b6cff';x.fillRect(o.x,o.y,2,2)});
 requestAnimationFrame(a);})();

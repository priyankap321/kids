var box=document.getElementById('mainbox');
function addCard(alpha){
var flashcard= document.createElement("div");
flashcard.setAttribute("class", "upcontainer");
var text=document.createElement("h1");
text.innerHTML=alpha+" | "+alpha.toLowerCase();
var container= document.createElement("div");
container.setAttribute("class", "container");
container.setAttribute("id", alpha);
container.appendChild(text);
container.setAttribute("onclick", "flip(this)");
container.style.transition = "all 1s";
//container.style.transform="rotate(60deg)";
flashcard.appendChild(container);
box.appendChild(flashcard);
}
var a="vamshi";
for(var i=65;i<=90;i++){
  var res = String.fromCharCode(i);
  addCard(res);
}
names={"A":"apple","B":"ball","C":"cat","D":"dog","E":"elephant","F":"fish","G":"giraffe","H":"horse","I":"ice cream","J":"jug","K":"kite","L":"lion","M":"monkey","N":"nest","O":"orange","P":"parrot","Q":"queen","R":"rat","S":"sun","T":"tiger","U":"umbrella","V":"van","W":"whale","X":"x-mas","Y":"yak","Z":"zebra"};

function flip(obj){
  //var id = setInterval(rotate,100);
  obj.style.transform="rotateY(360deg)";
  obj.innerHTML='<img src="kidsimages/'+names[obj.id]+'.jpg" alt="'+names[obj.id]+'">'+
  '<h4>'+names[obj.id].toUpperCase()+'</h4>';
  obj.setAttribute("onclick","reflip(this)");
  //obj.style.transform="rotateY(0deg)";

}
function reflip(obj){
  obj.style.transform="rotateY(0deg)";
  obj.innerHTML='<h1>'+obj.id+' | '+obj.id.toLowerCase()+'</h1>';
  obj.setAttribute("onclick","flip(this)");
}


function flip1(obj){
  //var id = setInterval(rotate,100);
  obj.style.transform="rotateY(90deg)";
  //obj.innerHTML='<img src="kidsimages/'+names[obj.id]+'.jpg" alt="Apple">';
  //obj.style.transform="rotateY(0deg)";
  var id = setInterval(reflip,100);
  //reflip(obj);
  var num=1;
  var temp='<img src="kidsimages/'+names[obj.id]+'.jpg" alt="'+names[obj.id]+'">';
  var pre= obj.innerHTML;
  var flag=false;
  function reflip(){
    if(num==0){clearInterval(id);}
    if(num==90){
      flag=true;
      }
    if(flag){obj.innerHTML=temp+ num;
    num--;}
        else{
    obj.innerHTML=pre+ num;
    num++;
  }
    obj.style.transform="rotateY("+num+"deg)";
  }
}

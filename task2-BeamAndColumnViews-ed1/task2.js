function getit(){
       var draw1 = document.getElementById("can1"); 
       var draw2 = document.getElementById("can2");  
	   var draw3 = document.getElementById("can3");
	   var draw4 = document.getElementById("can4");
	   var draw5 = document.getElementById("can5");
	   drawcircle(draw1);
	   drawcircle(draw2);
	   drawcircle(draw3);
	   drawcirclewithoutM(draw4);
	   makeBM(draw5);
    }
function drawcircle(a){	 
	   var x=50 ,y=50; //,r=7;// ,w=70 ,l=80;
	   var width = document.getElementById("sel1");
	   var w = parseInt(width.options[width.selectedIndex].value);
	   var length = document.getElementById("sel2");
	   var l = parseInt(length.options[length.selectedIndex].value);
	   var radius = document.getElementById("sel3");
	   var r = parseInt(radius.options[radius.selectedIndex].value);
	   if(l<w){alert("Height should be greater than Width");}
	   else{
	   var dr = a.getContext("2d");  
	   dr.beginPath();
	   //first circle
	   dr.arc(x,y,r,0,2*Math.PI);
	   dr.stroke();
	   //second circle
	   dr.moveTo(x+r,y+l);   
	   dr.arc(x,y+l,r,0,2*Math.PI);	   
	   dr.stroke();	  
	   //third circle 
	   dr.moveTo(x+w+r,y+l);
	   dr.arc(x+w,y+l,r,0,2*Math.PI);
	   dr.stroke();
	   //fourth circle
	   dr.moveTo(x+w+r,y);
	   dr.arc(x+w,y,r,0,2*Math.PI);
	   dr.stroke();
	   //middle circle
	   dr.moveTo((x+w/2)+6,y);
	   dr.arc(x+w/2,y,r,0,2*Math.PI);
	   dr.stroke();
	   //line to down
	   dr.moveTo(x-r,y);
	   dr.lineTo(x-r,y+l);
	   dr.stroke();
	   //curves
	   dr.moveTo(54,44);
	   dr.lineTo(65,54);
	   dr.stroke();
	   dr.moveTo(44,55);
	   dr.lineTo(55,65);
	   dr.stroke();
	   //line down
	   dr.moveTo(x,y+l+r);
	   dr.lineTo(x+w,y+l+r);
	   dr.stroke();
	   //line to up
	   dr.moveTo(x+w+r,y+l);
	   dr.lineTo(x+w+r,y);
	   dr.stroke();
	   //line up
	   dr.moveTo(x+w,y-r);
	   dr.lineTo(x,y-r);
	   dr.stroke();   }
    }
function drawcirclewithoutM(a){
	   var x=50 ,y=50; 
	   var width = document.getElementById("sel1");
	   var w = parseInt(width.options[width.selectedIndex].value);
	   var length = document.getElementById("sel2");
	   var l = parseInt(length.options[length.selectedIndex].value);
	   var dr = a.getContext("2d");
	   var radius = document.getElementById("sel3");
	   var r = parseInt(radius.options[radius.selectedIndex].value);
	   if(l<w){alert("Height should be greater than Width");}
	   else{
	   var dr = a.getContext("2d");  
	   dr.beginPath();
	   //first circle
	   dr.arc(x,y,r,0,2*Math.PI);
	   dr.stroke();
	   //second circle
	   dr.moveTo(x+r,y+l);   
	   dr.arc(x,y+l,r,0,2*Math.PI);	   
	   dr.stroke();	  
	   //third circle 
	   dr.moveTo(x+w+r,y+l);
	   dr.arc(x+w,y+l,r,0,2*Math.PI);
	   dr.stroke();
	   //fourth circle
	   dr.moveTo(x+w+r,y);
	   dr.arc(x+w,y,r,0,2*Math.PI);
	   dr.stroke();
	   //line to down
	   dr.moveTo(x-r,y);
	   dr.lineTo(x-r,y+l);
	   dr.stroke();
	   //curves
	   dr.moveTo(54,44);
	   dr.lineTo(65,54);
	   dr.stroke();
	   dr.moveTo(44,55);
	   dr.lineTo(55,65);
	   dr.stroke();
	   //line down
	   dr.moveTo(x,y+l+r);
	   dr.lineTo(x+w,y+l+r);
	   dr.stroke();
	   //line to up
	   dr.moveTo(x+w+r,y+l);
	   dr.lineTo(x+w+r,y);
	   dr.stroke();
	   //line up
	   dr.moveTo(x+w,y-r);
	   dr.lineTo(x,y-r);
	   dr.stroke();   
	  }
	}
function makeBM(a){
	   var x=60, y=60 ,t=30, tc=20; //hb=50, lb=400, bc=50, hc=400;
	   var sizeplate = document.getElementById("sel2");
	   var s = parseInt(sizeplate.options[sizeplate.selectedIndex].value);
	   var lengthB = document.getElementById("sel5");
	   var lb = parseInt(lengthB.options[lengthB.selectedIndex].value);
	   var heightC = document.getElementById("sel6");
	   var hc = parseInt(heightC.options[heightC.selectedIndex].value);
	   var radius = document.getElementById("sel3");
	   var r = parseInt(radius.options[radius.selectedIndex].value);
	   var k=4, rc=2*r*k;
	   var dr = a.getContext("2d");
	   //making beam
	   dr.fillStyle="#D3D3D3";
	   dr.fillRect(x,y,lb,s+t*2);
	   //making column
	   dr.fillStyle="#D3D3D3";
	   dr.fillRect(x+lb,y,s+tc+rc,hc);
	   //making of horizontal lines
	   //upper
	   dr.moveTo(x-30,y+t);
	   dr.lineTo(x+lb,y+t);
	   dr.stroke();
	   //down line
	   dr.moveTo(x-30,y+t+s);
	   dr.lineTo(x+lb,y+t+s);
	   dr.stroke();
	   //making of vertical lines
	   //right line
	   dr.moveTo(x+lb+s+rc,y-30);
	   dr.lineTo(x+lb+s+rc,y+hc+30);
	   dr.stroke();
	   //making of curves 	   
	   //up to down
	   dr.moveTo(x+lb,y+t);
	   dr.arc(x+lb,y+t+rc,rc,1.5*Math.PI,2*Math.PI);
	   dr.stroke();
	   //line up to down
	   dr.moveTo(x+lb+rc,y+t+rc);
	   dr.lineTo(x+lb+rc,y+hc+30);
	   dr.stroke();
	   //down to up
	   dr.moveTo(x+lb,y+t+s);
	   dr.arc(x+lb,y+t+s-rc,rc,0.5*Math.PI,2*Math.PI,true);
	   dr.stroke();	   
	   //line down to up
	   dr.moveTo(x+lb+rc,y+t+s-rc);
	   dr.lineTo(x+lb+rc,y-30);
	   dr.stroke();
	   //making lines in beam
	   /*or(var i=x+25;i<(lb+x);i++){
		       dr.moveTo(i,y+t);
		       dr.lineTo(i,y+s+t);
		       dr.stroke();
		       i=i+50;
		   }*/
	   //making of lines column
	   for(i=y+s+25;i<hc+y;i++){
		       dr.moveTo(x+lb+rc,i);
		       dr.lineTo(x+lb+rc+s,i);
		       dr.stroke();
		       i=i+50;
		   }
	   //making of 2 upper lines
	   dr.moveTo(x+lb+rc,y-15);
	   dr.lineTo(x+lb+rc+s,y-15);
	   dr.stroke();
	   dr.moveTo(x+lb+rc,y+35);
	   dr.lineTo(x+lb+rc+s,y+35);
	   dr.stroke();
	}
function clearit(){
	   var draw1 = document.getElementById("can1"); 
	   var can1 = draw1.getContext("2d");
	   can1.clearRect(0,0,200,200);
       var draw2 = document.getElementById("can2"); 
       var can2 = draw2.getContext("2d"); 
       can2.clearRect(0,0,200,200);
	   var draw3 = document.getElementById("can3");
	   var can3 = draw3.getContext("2d");
	   can3.clearRect(0,0,200,200);
	   var draw4 = document.getElementById("can4");
	   var can4 = draw4.getContext("2d");
	   can4.clearRect(0,0,200,200);
	   var draw5 = document.getElementById("can5");
	   var can5 = draw5.getContext("2d");
	   can5.clearRect(0,0,1100,800);
	}

 function change(){
		 var x=10,y=10;
		 var widthS = document.getElementById("sel1");
		 var width = parseInt(widthS.options[widthS.selectedIndex].value);
		 var lengthS = document.getElementById("sel2");
		 var length = parseInt(lengthS.options[lengthS.selectedIndex].value);
		 var heightS = document.getElementById("sel3");
		 var height = parseInt(heightS.options[heightS.selectedIndex].value);
		 var widthTS = document.getElementById("sel4");
		 var widthT = parseInt(widthTS.options[widthTS.selectedIndex].value);
		 var widthLS = document.getElementById("sel5");
		 var widthL = parseInt(widthLS.options[widthLS.selectedIndex].value);
		 // now we have width, length, height, widthT, widthL
		 // side view (width)
		 var rectangle1 = document.getElementById("canvasA");
		 var rect1 = rectangle1.getContext("2d");
		 rect1.fillStyle = "#CD853F";
		 rect1.fillRect(x,y,width,widthT);
		 rect1.fillStyle = "#87CEFA";
		 rect1.fillRect(x,y+widthT,widthL,height-widthT);
		 rect1.fillStyle = "#87CEFA";
		 rect1.fillRect(x+width-widthL,y+widthT,widthL,height-widthT);
		 // side view (length) 
		 var rectangle2 = document.getElementById("canvasB");
		 var rect2 = rectangle2.getContext("2d");
		 rect2.fillStyle = "#CD853F";
		 rect2.fillRect(x,y,length,widthT);
		 rect2.fillStyle = "#87CEFA";
		 rect2.fillRect(x,y+widthT,widthL,height-widthT);
		 rect2.fillStyle = "#87CEFA";
		 rect2.fillRect(x+length-widthL,y+widthT,widthL,height-widthT);
		 // top view
		 var rectangle3 = document.getElementById("canvasC");
		 var rect3 = rectangle3.getContext("2d");
		 rect3.fillStyle = "#CD853F";
		 rect3.fillRect(x,y,width,length);
		 // bottom view
		 var rectangle4 = document.getElementById("canvasD");
		 var rect4 = rectangle4.getContext("2d");
		 rect4.fillStyle = "#CD853F";
		 rect4.fillRect(x,y,width,length);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(width+x-widthL,y,widthL,widthL);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(x+width-widthL,y+length-widthL,widthL,widthL);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(x,y,widthL,widthL);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(x,y+length-widthL,widthL,widthL);
		}
function al(){
	 
	}

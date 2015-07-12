// exercise for appearing/disappearing circle

/*  === HTML ===


<html>
 <head>
 <title>Learning Javascript</title>

 <meta charset="utf-8" />
 <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />

 </head>
  
 <body>
  
<div id='redCircle'></div>
   <div id='emptyDiv'><p>Click here to return the red circle</p></div>
   
  
 
</body>
</html>

*/


/* === css ===

#redCircle {
  width: 100px;
  height: 100px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: red;
  margin: 0 auto;
  
  z-index: 9999;
}
#redCircle:hover {
  cursor: pointer;
}
#emptyDiv {
  width: 100px;
  height: 100px;
  border: 2px solid black;
  border-radius: 50%;
  margin: 0 auto;
  visibility: hidden;
  
 }
#emptyDiv:hover {
  cursor: pointer;
}
#emptyDiv > p {
  color: green;
  text-align: center;
  padding-top: 10px;
}

*/

// js

document.getElementById('redCircle').onclick = function() {
 document.getElementById('redCircle').style.display="none";
 document.getElementById('emptyDiv').style.visibility="visible";
    document.getElementById('emptyDiv').onclick = function() {
      document.getElementById('redCircle').style.display="block";
      document.getElementById('emptyDiv').style.visibility="hidden";
    }
}

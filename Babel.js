function babel()
{
	var output=document.getElementById("output");
	var term=document.getElementById("term").value;
	var row=document.getElementById("row").value;
	var direction=document.getElementById("direction").value;
	output.innerHTML="";
	
	if(direction=="")
	{
		for (counter=0;counter<row;counter++)
		{
			output.innerHTML+=term+"<br>";
		}
	}
	else if(direction=="horizontal")
	{
		for (counter=0;counter<row;counter++)
		{
			output.innerHTML+=term+"<br>";
			output.innerHTML+="<br>";
		}
	}	
	else if(direction=="vertical")
	{
		var str=setCharAt(term,Math.floor((Math.random() * term.length-1) + 1),' ');
		for (counter=0;counter<row;counter++)
		{
			output.innerHTML+=str+"<br>";
		}
	}
	else if(direction=="diagonal")
	{
		var blank=term.length-1;
		for(counter=0;counter<row;counter++)
		{
			term=document.getElementById("term").value;
			term=setCharAt(term,blank,' ');
			output.innerHTML+=term+"<br>";
			blank-=2;
			if (blank<0){
				blank=term.length-1;
			}
		}
	}
	else if(direction=="ex1")
	{
		for (counter=0;counter<row;counter++)
		{
			term=setCharAt(term,Math.floor((Math.random() * term.length-1) + 1),' ');
			output.innerHTML+=term+"<br>";
		}
	}
	else if(direction=="ex2")
	{
		for (counter=0;counter<row;counter++)
		{
			var str=setCharAt(term,Math.floor((Math.random() * term.length-1) + 1),' ');
			output.innerHTML+=str+"<br>";
		}
	}

}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

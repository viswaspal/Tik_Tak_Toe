var squares = document.querySelectorAll("td");
var restart=document.querySelector("#b");
function changeMarker()
{
	if(this.textContent==="")
	{
		this.textContent="X";
	}
	else if(this.textContent==="X")
	{
		this.textContent="O";
	}
	else
	{
		this.textContent="";
	}
}
function clearBoard()
{
	for (var j=0; j < squares.length;j++)
	{
		squares[j].textContent="";
	}
}
restart.addEventListener('click',clearBoard)

for (var i=0;i<squares.length;i++)
{
	squares[i].addEventListener('click',changeMarker);
}
window.addEventListener("load",buttons);
var Sum, Average, Period_Eight_Grade, Period_Eight_Name, Full_Name,Gpa,Grade, msg = "All Information is not filled out or incorrect value" ;

function buttons()
{
	document.getElementById("txtgrade").disabled = true;
	document.getElementById("txtgpa").disabled = true;
	document.getElementById("txtlettergrade").disabled = true;
	document.getElementById("btnsubmit").addEventListener("click",Get_Elements);
	
}
function Get_Elements()
{
	let Full_Name = document.getElementById("txtfullname").value;
    var OSIS_Num = document.getElementById("txtosis").value;
    var Period_One_Name = document.getElementById("txtprdonename").value;
    var Period_One_Grade = document.getElementById("txtprdonegrade").value;
    var Period_Two_Name = document.getElementById("txtprdtwoname").value;
    var Period_Two_Grade = document.getElementById("txtprdtwograde").value;
    var Period_Three_Name = document.getElementById("txtprdthreename").value;
    var Period_Three_Grade = document.getElementById("txtprdthreegrade").value;
    var Period_Four_Name = document.getElementById("txtprdfourname").value;
    var Period_Four_Grade = document.getElementById("txtprdfourgrade").value;
    var Period_Five_Name = document.getElementById("txtprdfivename").value;
    var Period_Five_Grade = document.getElementById("txtprdfivegrade").value;
    var Period_Six_Name = document.getElementById("txtprdsixname").value;
    var Period_Six_Grade = document.getElementById("txtprdsixgrade").value;
    var Period_Seven_Name = document.getElementById("txtprdsevenname").value;
    var Period_Seven_Grade = document.getElementById("txtprdsevengrade").value;
    var Period_Eight_Name = document.getElementById("txtprdeightname").value;
    var Period_Eight_Grade = document.getElementById("txtprdeightgrade").value;
	
	switch(true)
	{
		case(Full_Name == ""):
			alert(msg)
			break;
		case(OSIS_Num == ""):
			alert(msg)
			break;
		case(Period_One_Name == ""):
			alert(msg)
			break;
		case(Period_One_Grade == ""): 
			alert(msg)
			break;
		case(Period_Two_Name == ""): 
			alert(msg)
			break; 
		case(Period_Two_Grade == ""):
			alert(msg)
			break;
		case(Period_Three_Name == ""): 
			alert(msg)
			break;
		case(Period_Three_Grade == ""): 
			alert(msg)
			break;
		case(Period_Four_Name == ""): 
			alert(msg)
			break;	
		case(Period_Four_Grade == ""): 
			alert(msg)
			break;	
		case(Period_Five_Name == ""): 
			alert(msg)
			break;			
		case(Period_Five_Grade == ""): 
			alert(msg)
			break;	
		case(Period_Six_Name == ""): 
			alert(msg)
			break;
		case(Period_Six_Grade == ""): 
			alert(msg)
			break;	
		case(Period_Seven_Name == ""): 
			alert(msg)
			break;	
		case(Period_Seven_Grade == ""): 
			alert(msg)
			break;		
		case(Period_Eight_Name == ""): 
			alert(msg)
			break;	
		case(Period_Eight_Grade == ""): 
			alert(msg)
			break;	
		default:
			alert("weeeee")
	}
	var Sum = parseFloat(Period_One_Grade) + parseFloat(Period_Two_Grade) + parseFloat(Period_Three_Grade) + parseFloat(Period_Four_Grade) 
			 + parseFloat(Period_Five_Grade) + parseFloat(Period_Six_Grade) + parseFloat(Period_Seven_Grade) + parseFloat(Period_Eight_Grade);
	Average = Sum / 8
	document.getElementById("txtgrade").value = Average;
	
    gpa()
}

function gpa()
{
	Gpa = Average/25; 
	document.getElementById("txtgpa").value = Gpa;
	LetterGrade()
}
function LetterGrade()
{
	var Letter = Average;
	switch(true)
	{
		case(Letter >= 90): 
			Grade = "A";
			break;
		case(Letter >= 80):
			Grade = "B";
			break;
		case(Letter >= 70):
			Grade = "C";
			break; 
		case(Letter>= 60):
			Grade = "D";
			break;
		case(Letter < 60): 
			Grade = "F";
			break;
		default: 
			Grade = "Nothing"
			break;
	}
	document.getElementById("txtlettergrade").value = Grade;
}

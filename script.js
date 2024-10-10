window.addEventListener("load",buttons);
var Sum, Average, Period_Eight_Grade, Period_Eight_Name, Full_Name,Gpa,Grade ;

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
    var Period_One_Grade = parseFloat(document.getElementById("txtprdonegrade").value);
    var Period_Two_Name = document.getElementById("txtprdtwoname").value;
    var Period_Two_Grade = parseFloat(document.getElementById("txtprdtwograde").value);
    var Period_Three_Name = document.getElementById("txtprdthreename").value;
    var Period_Three_Grade = parseFloat(document.getElementById("txtprdthreegrade").value);
    var Period_Four_Name = document.getElementById("txtprdfourname").value;
    var Period_Four_Grade = parseFloat(document.getElementById("txtprdfourgrade").value);
    var Period_Five_Name = document.getElementById("txtprdfivename").value;
    var Period_Five_Grade = parseFloat(document.getElementById("txtprdfivegrade").value);
    var Period_Six_Name = document.getElementById("txtprdsixname").value;
    var Period_Six_Grade = parseFloat(document.getElementById("txtprdsixgrade").value);
    var Period_Seven_Name = document.getElementById("txtprdsevenname").value;
    var Period_Seven_Grade = parseFloat(document.getElementById("txtprdsevengrade").value);
    var Period_Eight_Name = document.getElementById("txtprdeightname").value;
    var Period_Eight_Grade = parseFloat(document.getElementById("txtprdeightgrade").value);
  
    var Sum = Period_One_Grade + Period_Two_Grade + Period_Three_Grade + Period_Four_Grade + Period_Five_Grade + Period_Six_Grade + Period_Seven_Grade + Period_Eight_Grade;
   	Average = Sum / 8
    document.getElementById("txtgrade").value = Average;
    	CheckInfo(Full_Name)
	CheckInfo(OSIS_Num)
	CheckInfo(Period_One_Name)
	CheckInfo(Period_One_Grade)
	CheckInfo(Period_Two_Name)
	CheckInfo(Period_Two_Grade)
	CheckInfo(Period_Three_Name)
	CheckInfo(Period_Three_Grade)
	CheckInfo(Period_Four_Name)
	CheckInfo(Period_Four_Grade)
	CheckInfo(Period_Five_Name)
	CheckInfo(Period_Five_Grade)
	CheckInfo(Period_Six_Name)
	CheckInfo(Period_Six_Grade)
	CheckInfo(Period_Seven_Name)
	CheckInfo(Period_Seven_Grade)
	CheckInfo(Period_Eight_Name)
	CheckInfo( Period_Eight_Grade)	
    gpa()
}

function CheckInfo(input)
{
	if (input == ""):
	{
		alert("All Information is not filled out!")
	}
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

window.addEventListener("load",buttons);
var Sum, Average, Period_Eight_Grade, Period_Eight_Name, Full_Name;

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
    Calculate_Average(Period_One_Grade, Period_Two_Grade, Period_Three_Grade, Period_Four_Grade, Period_Five_Grade, Period_Six_Grade, Period_Seven_Grade, Period_Eight_Grade);
}

function Calculate_Average(Period_One_Grade, Period_Two_Grade, Period_Three_Grade, Period_Four_Grade, Period_Five_Grade, Period_Six_Grade, Period_Seven_Grade, Period_Eight_Grade)
{
    var Sum = Period_One_Grade + Period_Two_Grade + Period_Three_Grade + Period_Four_Grade + Period_Five_Grade + Period_Six_Grade + Period_Seven_Grade + Period_Eight_Grade;
    var Average = Sum / 8
    document.getElementById("txtgrade").value = Average;
}

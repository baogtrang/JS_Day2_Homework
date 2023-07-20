// SALARY
var dayWage = 100000
var inputDays = document.getElementById("workDays")
var calculatedSalary = document.getElementById("calculatedSalary")

function calculateSalary () {
    var workDays= inputDays.value
    var result = workDays * dayWage
    // console.log('result: ', result);
    calculatedSalary.textContent = "Your salary: " + result + " VND"
}

// AVERAGE
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var num3 = document.getElementById("num3")
var num4 = document.getElementById("num4")
var num5 = document.getElementById("num5")
var calculatedAverage = document.getElementById("calculatedAverage")
function calculateAverage() {
    var result = (Number(num1.value)+Number(num2.value)+Number(num3.value)+Number(num4.value)+Number(num5.value))/5
    calculatedAverage.textContent = "Result " + result
}

// CURRENCY EXCHANGE
var rate = 23500
var usd= document.getElementById("USD")
var calculatedVND = document.getElementById("calculatedVND")
function calculateVND(){
    var result = rate * Number(usd.value)
    calculatedVND.textContent ="Exchange Result : "+ result +" VND."
}

// AREA & PERIMETER
var length = document.getElementById("length")
var width = document.getElementById("width")
var areaResult = document.getElementById("areaResult")
var perimeterResult = document.getElementById("perimeterResult")
function calculateArea(){
    var area = Number(length.value) * Number(width.value)
    areaResult.textContent = "Area: " + area;
}
function calculatePerimeter(){
    var perimeter = (Number(length.value)+Number(width.value)) * 2
    perimeterResult.textContent="Perimeter:" + perimeter ;
}

// DIGIT SUM
var inputNumber = document.getElementById("inputNumber")
var sumResult = document.getElementById("sumResult")
function sumDigits () {
    var tenth = Math.floor(inputNumber.value/10)
    var digit = inputNumber.value % 10
    result = tenth + digit
    sumResult.textContent = "Sum of digits: " + result

}
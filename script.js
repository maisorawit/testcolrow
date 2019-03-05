// function checkEmpty() {
//     var x = document.getElementById("txt1")
//     x.style.color = "red";

// }

function checkNull() {
    var input1 = document.getElementById("input1").value;
    var input11 = document.getElementById("input1")
    var z = document.getElementById("txt1")
    var input2 = document.getElementById("input2").value;
    var input22 = document.getElementById("input2")
    var x = document.getElementById("txt2")
    var input3 = document.getElementById("input3").value;
    var input33 = document.getElementById("input3")
    var c = document.getElementById("txt3")


    if (input1 == "") {
        input11.style = "border:2px solid red";
        z.style.color = "red";
    }else{
        input11.style = "border:2px solid green";
        z.style.color = "green";
    }
    if (input2 == "") {
        input22.style = "border:2px solid red";
        x.style.color = "red";
    }else{
        input22.style = "border:2px solid green";
        x.style.color = "green";
    }
    if (input3 == "") {
        input33.style = "border:2px solid red";
        c.style.color = "red";
    }else{
        input33.style = "border:2px solid green";
        c.style.color = "green";
    }

    if(input1 != "" && input2 != "" && input3 != "" ){
        window.location.href="./eztest.html"
    }else{
       
    }
}

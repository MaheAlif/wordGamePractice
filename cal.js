function calc() {
  let  a, b;

//   document.getElementById("input1").addEventListener("keyup", function (event) {
//     a = parseFloat(event.target.value);
//     //console.log(a);
//   });

//   document.getElementById("input2").addEventListener("keyup", function (event) {
//     b = parseFloat(event.target.value);
//     //console.log(b);
//   });

  a = parseFloat(document.querySelector("#input1").value);
  b = parseFloat(document.querySelector("#input2").value);
  var op = document.querySelector("#operator").value;
  var output;

  if (op == "add") {
    output = a + b;
    document.querySelector("#result").innerHTML = a + "+" + b + "=" + output;
  } else if (op == "min") {
    if (a > b) {
      output = a - b;
      document.querySelector("#result").innerHTML = a + "-" + b + "=" + output;
    } else {
      output = b - a;
      document.querySelector("#result").innerHTML = b + "-" + a + "=" + output;
    }
  } else if (op == "div") {
    if (a > b) {
      output = a / b;
      document.querySelector("#result").innerHTML = a + "/" + b + "=" + output;
    } else {
      output = a / b;
      document.querySelector("#result").innerHTML = b + "/" + a + "=" + output;
    }
  } else {
    output = a * b;
    document.querySelector("#result").innerHTML = a + "*" + b + "=" + output;
  }

  // document.querySelector("#result").innerHTML = a + "+" + b + "=" + output ;
  //console.log(output);
//   let deleteBtn = document.getElementById("selectBtn");
//   console.log(a);
//   console.log(op);
//   if (a != Nan && b != Nan) {
//     deleteBtn.removeAttribute("disabled");
//   }
}

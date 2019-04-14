function Converse() {
    let v = document.getElementById("value").value;
    let f = document.getElementById("From");
    let t = document.getElementById("To");
    if (f.value == t.value) {
        Result = v
    } else if (f.value == "VND") {
        Result = parseInt(v) / 23255.814
    } else {
        Result = parseInt(v) * 23255.814
    }

    document.getElementById("result").innerHTML = Result;
}
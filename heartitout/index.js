function expandHandler(value) {
    value = !value;
    if(value===0)
    {
        document.getElementsByClassName("drop-down-div").style.height = document.getElementById("dropdown-btn").height;
    }
    else
    {
        document.getElementsByClassName("drop-down-div").style.height = document.getElementById("dropdown-btn").height + document.getElementsByClassName("dropdown-menu").height;
    }

    return value;
}

function updateDropdown(val) {
    document.getElementById("dropdown-btn").innerHTML = "The value chosen is ' " + val + " '";
}
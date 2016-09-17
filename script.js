var first =
["-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------",
"-----------------------------------------------------------------------------"];

var second =
["-/$$-----------------------/$$-----------------------------------------------",
"|--/----------------------|-$$-----------------------------------------------",
"-/$$--/$$$$$$$--/$$$$$$--/$$$$$$----/$$$$$$---/$$$$$$------/$$$$$$---/$$$$$$$",
"|-$$-/$$-----/-/$$----$$|---$$-/---/$$----$$-/$$----$$----/$$----$$-/$$-----/",
"|-$$|--$$$$$$-|-$$--\\-$$--|-$$----|-$$--\\-$$|-$$--\\-$$---|-$$$$$$$$|--$$$$$$-",
"|-$$-\\------$$|-$$--|-$$--|-$$-/$$|-$$--|-$$|-$$--|-$$---|-$$-----/-\\------$$",
"|-$$-/$$$$$$$/|--$$$$$$/--|--$$$$/|--$$$$$$/|-$$$$$$$//$$|--$$$$$$$-/$$$$$$$/",
"|--/|-------/--\\------/----\\---/---\\------/-|-$$----/|--/-\\-------/|-------/-",
"--------------------------------------------|-$$-----------------------------",
"--------------------------------------------|-$$-----------------------------",
"--------------------------------------------|--/-----------------------------"];

var text = ">>isotop.es\n\n>>design for homo sapiens";

window.addEventListener('load', init);

function init() {
        var quick_string = "";
        var i = 0;
        var inter = window.setInterval(function(){
        if (i < first.length) {
                quick_string += first[i] + "\n";
                i++;
                console.log(i);
                document.body.innerText = quick_string;
        }
        else {
            window.clearInterval(inter);
        }
    }, 50);

    setTimeout(drawing, 1000);
    setTimeout(remove, 2500);
}

var page_to_fill = "";
function fillPage() {
    var fillLength = 0;
    var inter = window.setInterval(function(){
        if (fillLength < text.length) {
            page_to_fill += text[fillLength];
        document.body.innerText = page_to_fill;
        fillLength++;
    }
    else {
        window.clearInterval(inter);
        // editable();
    }
        document.body.innerText = page_to_fill;
    }, 100);
}

function initial() {
    var quick_string = "";
    for (var i = 0; i < first.length; i++) {
            quick_string += first[i] + "\n";
    }
    document.body.innerText = quick_string;
}

function drawing() {
var col=0;
var inter = window.setInterval(function(){
    if (col<first[first.length-1].length) {
        for (var row = 0; row < first.length; row++) {
        first[row] = first[row].replaceAt(col, second[row][col]);
    }
    col++;
}
    else {
    window.clearInterval(inter);
}
initial();

}, 15);
}

function remove() {
    var row = first.length;
    var inter = window.setInterval(function(){
        if (row>0) {
                first.pop();
                initial();
                row--;
            }
        else {
        window.clearInterval(inter);
        fillPage();

    }
}, 100)};


function editable() {
    var content = document.querySelectorAll('*');
    for (var i = 0; i < content.length; i++) {
        content[i].setAttribute('contentEditable', true);
    }
    moveCursorToEnd(document.body);
}


String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}


function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }}

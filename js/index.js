 //创建表格
 function createTbale(){
    var divBody = document.getElementById("div_createTable");
    var newTable = document.createElement("table");
    newTable.border = "1";
    newTable.id = "myTable";
    for(var i = 0; i < 5;i++){
        var tableRow = newTable.insertRow(i);
        for(var j = 0; j < 4;j++){
            var tableCell = tableRow.insertCell(j);
            tableCell.innerHTML = "单元格" + i + j;
        }
    }
    var caption = newTable.createCaption();
    caption.innerHTML = "历史表";
    divBody.appendChild(newTable);
}
//删除最后一行
function deleteLastRow(){
    var myTabele = document.getElementById("myTable");
    if(myTabele.rows.length > 0){
        myTabele.deleteRow(myTabele.rows.length - 1);
    }
}
//删除最后一个单元格
function deleteLastCell(){
 var myTabele = document.getElementById("myTable");
 var lastRow = myTabele.rows[myTabele.rows.length - 1];
 if(lastRow.cells.length > 0){
     lastRow.deleteCell(lastRow.cells.length - 1);
 }
}
//添加事件
function show(sText){
    document.getElementById("p_text").innerHTML += sText;
}
window.onload = function(){
    var divAddEvent = this.document.getElementById("div_addEvent");
    var pAddEvent = this.document.getElementById("p_addEvent");
    divAddEvent.addEventListener("click",function(){show("div<br/>")},true);
    pAddEvent.addEventListener("click",function(){show("p<br/>")},true);
}
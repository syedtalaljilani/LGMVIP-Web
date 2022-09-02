function createlist()
{
   document.getElementById("tolist").insertAdjacentHTML ("afterend",`<div id="todolistcontainer">
   <input type="checkbox" id="checkbox-list" onclick="complete()">  
   <p id="tasktodo"></p>
   <i class="fa-sharp fa-solid fa-xmark" id="todoicon" onclick="deletelist()"></i>
   </div>`);
    document.getElementById("tasktodo").textContent=document.getElementById("input").value;



}
function deletelist(e)
{
    document.getElementById("todolistcontainer").remove();
    
}
function complete()
{
    document.getElementById("tasktodo").style.textDecoration = "line-through";
    document.getElementById("tasktodo").style.textDecorationColor = "black";
    document.getElementById("todolistcontainer").style.backgroundColor="blue";
    document.getElementById("todoicon").style.color="white";
    document.getElementById("tasktodo").style.color="white";
    document.getElementById("checkbox-list").checked=true;
}

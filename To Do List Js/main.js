function createlist()
{
   document.getElementById("tolist").insertAdjacentHTML ("afterend",`<div id="todolistcontainer">
   <input type="checkbox" id="checkbox-list" onclick="complete()">  
   <p id="tasktodo"></p>
   <i class="fa-sharp fa-solid fa-xmark" id="todoicon" onclick="deletelist()"></i>
   </div>`);
    document.getElementById("tasktodo").textContent=document.getElementById("input").value;



}
function deletelist()
{
    document.querySelector("#todolistcontainer").remove();
    
}
function complete()
{

    if(document.getElementById("checkbox-list").checked)
    {
        document.getElementById("tasktodo").style.textDecoration="line-through";
        document.getElementById("tasktodo").style.color="grey";
        document.getElementById("checkbox-list").style.backgroundColor="grey";
    }

}

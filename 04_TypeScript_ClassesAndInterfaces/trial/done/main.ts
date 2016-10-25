
function startup()
{
    var htmlButton  =document.createElement("button");
    htmlButton.innerText="OK";
    htmlButton.addEventListener("click",(e:MouseEvent)=>{
        alert(this);
    })
    
  document.body.appendChild(htmlButton);
}
startup();
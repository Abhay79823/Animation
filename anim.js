var menu=document.getElementsByClassName("menu")

for(var i=0; i<menu.length; i++)
{
   var title=document.getElementById("title");
   menu[i].onclick= function(){
    title.className = this.value;
}
}

    



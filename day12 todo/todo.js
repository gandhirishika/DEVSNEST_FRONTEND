function todo()
{
    var item = document.getElementById(names).nodeValue;
    var text = document.createTextNode(item);
    var newitem = document.createElement("");
    newitem.appendChild(text);
    document.getElementById(todo).appendChild(newitem);
}


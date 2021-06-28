window.onload =()=>{


var clicked = document.getElementsByClassName("rows");
var vacant = 0 ; var filled=0;
for (var i = 0; i < clicked.length; i++) {
    document.getElementsByClassName("rows")[i].addEventListener("click", function () {
        if (this.classList.contains('boxclicked')) {
            this.classList.remove('boxclicked');
            vacant++;
            filled--;
            
     var result =     document.getElementsByClassName('tot')[0];
     result.innerHTML = 36-filled;

     var res = document.getElementsByClassName('occ')[0];
     res.innerHTML = filled;
        }
        else {
            this.classList.add('boxclicked');
            filled++;
            vacant--;
            var result =     document.getElementsByClassName('tot')[0];
     result.innerHTML = 36-filled;
            var res = document.getElementsByClassName('occ')[0];
            res.innerHTML = filled;
        }
    })
}
}
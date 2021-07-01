window.onload = () => {
    //     var start  = document.querySelector(".start")
    //     start[0].addEventListener("click" , function(){
    //      this.classList.add(".visible");
    //    })
    var options = document.querySelectorAll(".options");
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            var ans = this.innerHTML;
            if (ans == "Jaipur")
                this.classList.toggle("correct");

            else if (ans == "Jodhpur")
                this.classList.toggle("correct");

            else if (ans == "Jaisalmer")
                this.classList.toggle("correct");

            else if (ans == "Surat")
                this.classList.toggle("correct");

            else if (ans == "Nagpur")
                this.classList.toggle("correct");
            else
                this.classList.toggle("wrong");

        })
    }
    var prev = document.querySelectorAll(".prev");
    prev[0].addEventListener("click", function () {
        var one = document.querySelector(".box2");
        one.classList.remove("visible");
        var two = document.querySelector(".box");
        two.classList.remove("hide");
    })


    prev[1].addEventListener("click", function () {
        var one = document.querySelector(".box3");
        one.classList.remove("visible");
        var two = document.querySelector(".box2");
        two.classList.add("visible");
    })




    prev[2].addEventListener("click", function () {
        var one = document.querySelector(".box4");
        one.classList.remove("visible");
        var two = document.querySelector(".box3");
        two.classList.add("visible");

    })



    prev[3].addEventListener("click", function () {
var one = document.querySelector(".box5");
        one.classList.remove("visible");
        var two = document.querySelector(".box4");
       two.classList.add("visible");
    })






    var next = document.querySelectorAll(".next");
    next[0].addEventListener("click", function () {
        var one = document.querySelector("#one");
        one.classList.add("hide");
        var two = document.querySelector(".box2");
        two.classList.add("visible");
    })

    // second box
    next[1].addEventListener("click", function () {

        var one = document.querySelector(".box2");
        one.classList.remove("visible");
        var two = document.querySelector(".box3");
        two.classList.add("visible");
    })
    // third box

    next[2].addEventListener("click", function () {

        var one = document.querySelector(".box3");
        one.classList.remove("visible");
        var two = document.querySelector(".box4");
        two.classList.add("visible");
    })

    // fourth box
    next[3].addEventListener("click", function () {

        var one = document.querySelector(".box4");

        one.classList.remove("visible");
        var two = document.querySelector(".box5");
        two.classList.add("visible");
    })

    // fivebox

}



// function games(ans){
//     if(ans == "GANDHI")
//     this.classList.toggle("correct");
//     else
//     this.classList.toggle("wrong");
// }
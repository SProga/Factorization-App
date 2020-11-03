
$(document).ready(function () {

    var counter = 0;

    $("#calculate").on("click", function () {

        counter = 0;
        var inputfield = $('#textfield').val();
        if (inputfield === "" || $.isNumeric(inputfield) === false) {
            return;
        }

        else {


            $('#list').empty();

            var num = $("#textfield").val();

            var val = " ";


            $('#list').append("(");

            for (var i = 0; i < num; i++) {



                if (num % i === 0) {

                    counter++;
                    $('#list').append("<li>" + i + "</li>" + ",");


                }
                if (num / i === i) {
                    counter++;
                    $('#list').append("<li>" + i + "</li>" + ",");
                }
            }
            $('#list').append('<li> ' + num + ' </li>');
            $('#list').append(")");
            counter++;

            displayColors(counter);

            $("ul").fadeIn("slow", function () {

                $("ul").css(
                    {
                        display: 'inline-block',

                    });

            })

        };
    });


    $("#clear").on("click", function () {
        counter = 0;

        $("ul").fadeOut("slow", function () {

            $("ul").css(
                {
                    display: 'none',

                });

            $('#list').empty();
            $("#textfield").val("");


        })




    });

    function randomColor() {

        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var color = "rgb(" + red + ", " + green + ", " + blue + ")";

        return color;
    }

    function generateRandomColors(num) {
        var arr = [];

        for (var i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    //for half of the list turn the bg to a random color;
    //for the other half invert the list;
    function displayColors(counter) {


        var num_colors = counter; // 16  divided by 2 is 8

        if (num_colors % 2 === 0) {

            num_colors = (num_colors / 2);
            var num = parseInt(num_colors, 10);
            even(num);
        }


        /*    else if (num_colors % 2 === 1) {
                num_colors = (num_colors / 2);
                var num = parseInt(num_colors, 10);
                odd(num);
            }*/




    }



    function even(num_colors) {

        var listItem = $("li");
        var colors = generateRandomColors(num_colors); //generate 8 colors
        var currcolors = [];

        for (var i = 0; i < num_colors; i++) {
            listItem[i].style.backgroundColor = colors[i];
            currcolors.push(colors[i]);
        }

        var rev = currcolors.reverse();
        var counter = 0;


        for (var i = num_colors; i < (num_colors * 2); i++) {

            listItem[i].style.backgroundColor = rev[counter];
            counter++;
        }


    }


    $(document).on("mouseenter", "li", function () {

        var hcolor = $(this).css("backgroundColor");
        var currentli = $(this);
        var ncolor = $('li');


        // alert(ncolor[i].css("backgroundColor"));


        ncolor.each(function (index) {

            if (hcolor === $(this).css("backgroundColor")) {
                $(this).toggleClass("red");
                currentli.toggleClass("red");
            }

        });





    });


    $(document).on("mouseleave", "li", function () {
        var ncolor = $('li');

        ncolor.each(function (index) {
            $(this).removeClass("red");
        })

    });



    $("#textfield").on("focus", function (e) {

        $("input[type='text']").toggleClass("highlight");
        e.stopPropagation();
    })

});
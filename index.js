$(document).ready(function () {

    // var pokedex = $("#container");


    $("#show").click(function (e) {

        e.preventDefault();

        $.get("https://pokeapi.co/api/v2/pokemon",
            function (resp) {

                var pokedex = resp.results
                console.log(resp);



                pokedex.forEach(element => {

                    console.log(element.name)
                    $("#container").append('<div class="mons">' + element.name + '</div>');

                });

            },
        );


    });


})
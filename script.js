$("#searchBtn").click(function() {
    event.preventDefault();

    $(".tmdbTitle").css("display", "block");
    $(".otherTitle").css("display", "block");


    var query = $("#searchTerms").val();
    console.log(query);
    //had to prepend herokuapp to get rid of error message
    var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=0c2a1555ddc16a86620e39e37e74dfbb&language=en-US&query=" + query + "&page=1&include_adult=false";

    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var tImg = response.results[0].poster_path;
        var rDate = response.results[0].release_date.substring(0, 4);

        $("#titleText").html(response.results[0].title + " (" + rDate + ")");
        $(".tmdbTitle").html("Rating: " + response.results[0].vote_average + "<br>" + "<img src='" + "https://image.tmdb.org/t/p/w400" + tImg + "'>" + "<br>");
        $(".otherTitle").html("!PLACEHOLDER!");
    });
});




// $("#searchTerms").keypress(function(event) {
//     var key = event.which;
//     if (key == 13) {
//         callWeatherApi();
//     }
// });
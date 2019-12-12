//makes css elements appear
function blockAppear() {
    $(".tmdbTitle").css("display", "block");
    $(".otherTitle").css("display", "block");
};

//calls to APIs for movie info and youtube info
function movieSearch() {

    var query = $("#searchTerms").val();
    console.log(query);

    var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=0c2a1555ddc16a86620e39e37e74dfbb&language=en-US&query=" + query + "&page=1&include_adult=false";

    $.ajax({
        dataType: "json",
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var tImg = response.results[0].poster_path;
        var rDate = response.results[0].release_date.substring(0, 4);

        $("#titleText").html(response.results[0].title + " (" + rDate + ")");
        $(".tmdbTitle").html("Rating: " + response.results[0].vote_average + "<br>" + "<img src='" + "https://image.tmdb.org/t/p/w400" + tImg + "'>" + "<br>");
        $(".otherTitle").html("Trailer");
    });



    var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + query + "+official+trailer&key=AIzaSyAWa4yUxFgvUKLUUUenSeNtm4kWQxWulc0"


    $.ajax({
        dataType: "json",
        url: youtubeURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
        var vidId = response.items[0].id.videoId;
        console.log(vidId);

        $("#player").html("<iframe id=\"existing-iframe-example\"
        width=\"640\" height=\"360\"
        src=\"https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1\"
        frameborder=\"0\"
        style=\"border: solid 4px #add8e6\"
></iframe>");
    });



};



function btnSearch() {
    blockAppear();
    movieSearch();

    //  $("#searchTerms").val("");
};

$("#searchTerms").keypress(function (event) {
    var key = event.which;
    if (key == 13) {
        btnSearch();
    }
});

$("#searchBtn").click(function () {
    event.preventDefault();

    btnSearch();
});





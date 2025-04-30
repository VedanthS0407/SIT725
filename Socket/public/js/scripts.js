$(document).ready(function () {
    $('.modal').modal();
    $.get('/api/movies', function (data) {
        console.log('Movies fetched:', data);
      
        data.forEach(movie => {
          $('#card-section').append(`
            <div class="col s12 m6 l4">
              <div class="card">
                <div class="card-image">
                  <img src="${movie.poster}" alt="${movie.title}">
                </div>
                <div class="card-content">
                  <span class="card-title">${movie.title}</span>
                  <p>${movie.description}</p>
                </div>
                <div class="card-action">
                  <a href="${movie.trailer}" target="_blank">Watch Trailer</a>
                </div>
              </div>
            </div>
          `);
        });
      });
      

    // Function to add movie cards
    const addCards = (movieList) => {
        $("#card-section").empty(); // Clear previous movies
        movieList.forEach(movie => {
            let card = `
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${movie.poster}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${movie.title}</span>
                            <p>${movie.description}</p>
                        </div>
                        <div class="card-action">
                            <a href="${movie.trailer}" target="_blank">Watch Trailer</a>
                        </div>
                    </div>
                </div>`;
            $("#card-section").append(card);
        });
    };

    // Form submission to add new movie
    $("#submitForm").click(() => {
        let newMovie = {
            title: $("#movie-title").val(),
            poster: $("#poster-url").val(),
            trailer: $("#trailer-url").val(),
            description: $("#description").val()
        };

        $.post("/api/movies", newMovie, (response) => {
            if (response.statusCode === 200) {
                // fetchMovies(); // Refresh the movie list
                $("#movie-title, #poster-url, #trailer-url, #description").val("");
                $('.modal').modal('close');
            } else {
                console.error("Error adding movie:", response);
            }
        });
    });

    // Load movies on page load
    // fetchMovies();
});

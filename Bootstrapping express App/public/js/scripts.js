$(document).ready(function(){
    $('.modal').modal();

    // Initial movie list
    const movies = [
        { title: "Bahubali", poster: "images/bahubali.jpg", trailer: "https://youtu.be/sOEg_YZQsTI?si=bW7DKz3CpN-vFVGq", description: "The Beginning is a 2015 Indian epic period action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. Produced in the Telugu film industry, the film was shot in both Telugu and Tamil languages.[17][18] It features Prabhas in a dual role alongside Rana Daggubati, Anushka, Tamannaah Bhatia, Ramya Krishnan, Sathyaraj, and Nassar. The first of a duology of films, it follows Sivudu, an adventurous young man who helps his love Avantika rescue Devasena, the former queen of Mahishmati who is now a prisoner under the tyrannical rule of king Bhallaladeva. The story concludes in Baahubali 2: The Conclusion (2017)." },
        { title: "Interstellar", poster: "images/interstellar.jpg", trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E", description: "Interstellar is a 2014 epic science fiction film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where Earth is suffering from catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind." },
        { title: "Pushpa: The Rise", poster: "images/pushpa.jpg", trailer: "https://youtu.be/Q1NKMPhP8PY?si=5MkkghXVCG1BmzeV", description: "The Rise is a 2021 Indian Telugu-language period action drama film directed by Sukumar and produced by Mythri Movie Makers, together with Muttamsetty Media. The first installment in the Pushpa film series, it stars Allu Arjun in the titular role, alongside an ensemble cast of Rashmika Mandanna, Fahadh Faasil (in his Telugu debut), Jagadeesh Prathap Bandari, Dhananjaya, Sunil, Anasuya Bharadwaj, Rao Ramesh, Ajay, Shatru and Ajay Ghosh. The film follows Pushpa, a daily wage labourer who rises through the ranks of a syndicate involved in smuggling red sandalwood, a rare wood found only in the Seshachalam Hills of Andhra Pradesh." }
    ];

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
        movies.push(newMovie);
        addCards(movies);
        $("#movie-title, #poster-url, #trailer-url, #description").val("");
        $('.modal').modal('close');
    });

    // Load initial movies
    addCards(movies);
});
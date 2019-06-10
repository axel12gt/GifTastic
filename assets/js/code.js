$("button").on("click",function(){
  var animal = $(this).attr("data-animal")
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=Q4QssPF3bHU3G8xAVSrdV097i05w1eLh&limit=10"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response)
      // gathers all the data from api into an array
      var results = response.data
      // loops through the data and appends to the div
      for(var i = 0; i < results.length; i++){
        var animalDiv = $("<div>")
        // sets variable for rating at index i of response.data
        var rating = results[i].rating
        // sets inner text to rating 
        var p = $("<p>").text("rating: " + rating)
        // appends the information to animal div
        animalDiv.append(p)
        //sets img tag to the animal image
        var animalImage = $("<img>")
        //adds src to attribute results at index i from fixed height url
        animalImage.attr("src", results[i].images.fixed_height.url)
        //appends animalImage to animalDiv
        animalDiv.append(animalImage)
        //prepends animal div to gifs div
        $(".gifs").prepend(animalDiv)

      }

      




    })
})
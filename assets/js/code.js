// Initial array for the gifs
var gifArr = ["dog","cat","pig"]

function showGif(){
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

        var animation = results[i].images.original.url
        console.log(animation)
        var still = results[i].images.original_still.url
        console.log(still)
        var animalDiv = $("<div>")
        animalDiv.addClass("animalDiv")
        // sets variable for rating at index i of response.data
        var rating = results[i].rating
        // sets inner text to rating 
        var p = $("<p>").text("rating: " + rating)
        // appends the information to animal div
        animalDiv.append(p)
        //sets img tag to the animal image
        var animalImage = $("<img>")
        //adds src to attribute results at index i from fixed height url
        animalImage.attr("src", results[i].images.original_still.url)
        //adds animate atribute 
        animalImage.attr("data-animate", results[i].images.original.url)
        //adds still attribute
        animalImage.attr("data-still", results[i].images.original_still.url)
        //adds still data state
        animalImage.attr("data-state", "still")
        //adds class of gif
        animalImage.addClass("gif")

        //appends animalImage to animalDiv
        animalDiv.append(animalImage)
        //prepends animal div to gifs div
        $(".gifs").prepend(animalDiv)
      }
    })
}

      // renders functions for the gifs
      function renderButtons(){
        console.log("is running")
        // empty buttons
        $(".buttons-view").empty()
        //creates buttons
        for(var i = 0; i< gifArr.length; i++){
          //assigns button method to btn
          var btn = $("<button>")
          //assigns gif button
          btn.addClass("gif-btn")
          //adds class attribute data animal
          btn.attr("data-animal", gifArr[i])
          //puts text for the button from the button array
          btn.text(gifArr[i])
          //appends to the button view
          $(".buttons-view").append(btn)
        }
      }
      //event handler for when the gif button is clicked
      $("#add-gif").on("click",function(event){
        
        event.preventDefault()

        // gets input from the text box and sanitizes it
        var giph = $("#gif-input").val().trim()
        //pushes giph into gifArr
        gifArr.push(giph)
        // calls renderButton to show our button on the dom
        renderButtons()  
      })
      //onclick function for the gif 
      $(document).on("click",".gif",function(){
        console.log("is running")
      // sets the variable for state on click
        var state = $(this).attr("data-state")

        if(state == "still"){
          //updates the src attribute of this image to it's data-animate
          $(this).attr("src",$(this).attr("data-animate"))
          // and update the data-state attribue to animate
          $(this).attr("data-state", "animate")
        }else{
          $(this).attr("src", $(this).attr("data-still"))
          $(this).attr("data-state", "still")
        }
      })



//Adds a click event listener to all elements with gif button
$(document).on("click",".gif-btn",showGif)

//Calls render buttons for the original button function
renderButtons()
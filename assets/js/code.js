$("button").on("click",function(){
  var animal = $(this).attr("data-animal")
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=Q4QssPF3bHU3G8xAVSrdV097i05w1eLh&limit=10"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(){
      
    })
})
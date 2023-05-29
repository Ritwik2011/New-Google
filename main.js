document.getElementById("search-button").addEventListener("click", function() {
    var searchQuery = document.getElementById("search-input").value;
    if (searchQuery !== "") {
      var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
      window.location.href = searchURL;
    }
  });
  
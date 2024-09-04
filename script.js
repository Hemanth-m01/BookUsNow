// To Fetch User Location

$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      $('#city').html(location.city);
      $('#country').html(location.country_name);
    }
  });

// To Fetch recommended shows  




//David Queen jr. 2017 chocolatelabs
//Door2Dorr
//automate the collection of door to door record taking


//erase 
var response;

//start up****************
{
    "use strict";//global

    var apiKey = "AIzaSyAESgPxsQ7jNl7p85qz6oyfxQHMlj0EXFk";
    var data = {
        country: "usa",
        state: "New Jersey",
        city: "atlantic city",
        street: "Martin Luther King ave",
        range: [100, 500]

    };
    var geoCodingURLBase = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    if ("geolocation" in navigator) {
        console.log("location services availible");
        getPos();
    } else {
        console.log("no geolocation availible");
        alert("Can not accesss geolocation data");
    }
    function getAddress(coords) {
        geoCodingURL = geoCodingURLBase + pos.lat + "," + pos.lng + "&key=" + apiKey;
        let http = new XMLHttpRequest();
        http.open('GET', geoCodingURL, true);
        http.send();
        http.addEventListener("readystatechange", function (e) {
            if (http.readyState == 4 && http.status == 200) {//done
                response = JSON.parse(http.responseText);
                //console.log(response.results);
                //console.log("HTTP response code: " + http.status);
                extract(response);
                //console.log(data.street);
                updateUI(data);
            } else {
                console.log("HTTP response code: " + http.status + ", HTTP state:" + http.readyState);
            }
        });
    }

    function extract(JSONresponse)//TODO finish extration function
    {
        let res = JSONresponse.results;
        //console.log(res.length);
        for (let x = 0; x < res.length; x++)//loop through list of address_components
        {
            for (let y = 0; y < res[x].address_components.length; y++)//loop thru parts of address_components
                if (res[x].address_components[y].types[0] == "route") {
                    //console.log(res[x].address_components[y].types + "FOUND");
                    data.street = res[x].address_components[y].short_name;
                    break;
                } else if (res[x].address_components[y].types[0] == "locality") {
                    data.city = res[x].address_components[y].short_name;
                } else {
                    //console.log(res[x].address_components[y].types);
                }
        }

       // console.log(data.street);
    }
    //begin button factory



    var factory = function (number) {
        var bE = document.createElement('button');
        bE.innerHTML = number;
        bE.Id = number;
        bE.className = "w3-button w3-bar w3-white w3-border w3-card w3-animate-zoom w3-left-align w3-margin-top w3-bar-item w3-xxlarge";
        bE.addEventListener('click', function () {
            alert('click');
        });
        document.getElementById('content').appendChild(bE);
    }
    //ntest 
    var testData = [205, 270, 209, 211, 213, 215, 217, 219, 221, 223, 225, 225];
    for (let x in testData) {
        factory(testData[x]);
    }
}//end global 

























/*
    The above query returns the following result:

{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "277",
               "short_name" : "277",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Bedford Avenue",
               "short_name" : "Bedford Ave",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Williamsburg",
               "short_name" : "Williamsburg",
               "types" : [ "neighborhood", "political" ]
            },
            {
               "long_name" : "Brooklyn",
               "short_name" : "Brooklyn",
               "types" : [ "sublocality", "political" ]
            },
            {
               "long_name" : "Kings",
               "short_name" : "Kings",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "New York",
               "short_name" : "NY",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "United States",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "11211",
               "short_name" : "11211",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "277 Bedford Avenue, Brooklyn, NY 11211, USA",
         "geometry" : {
            "location" : {
               "lat" : 40.714232,
               "lng" : -73.9612889
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 40.7155809802915,
                  "lng" : -73.9599399197085
               },
               "southwest" : {
                  "lat" : 40.7128830197085,
                  "lng" : -73.96263788029151
               }
            }
         },
         "place_id" : "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
         "types" : [ "street_address" ]
      },

  ... Additional results[] ...
  
  */
const weather_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Warsaw,PL/today?&include=current&elements=moonphase&key="

const images_dir = "moon_phases_exported/"

document.addEventListener("DOMContentLoaded", function() {
	httpGetAsync(weather_url + api_key, (r) => { document.getElementById("moon").setAttribute("src", 
		images_dir + moon_phase_imgs[calculatePhaseNumber(extractPhase(r))])
	});
});

function calculatePhaseNumber(n) {
    return (Math.floor(n * 4))*2 + !!((n * 100) % 25);
}

function extractPhase(response) {
	const responseObj = JSON.parse(response);
	return responseObj.currentConditions.moonphase;
}

function httpGetAsync(url, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);   
}

const moon_phase_imgs = Array.of(
	"1-first_quarter.jpg",
	"2-waxing_crescent.jpg",
	"3-new_moon.jpg",
	"4-waning_crescent.jpg",

	"5-third_quarter.jpg",
	"6-waning_gibbous.jpg",
	"7-full_moon.jpg",
	"8-waxing_gibbous.jpg"
);

var map = L.map('map1').setView([13.120214088073864, 80.23700235529519], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([13.120214088073864, 80.23700235529519]).addTo(map)
		.bindPopup('Base Location <br> Puzzled')
		.openPopup();	
        var marker2= L.marker([13.082462755140616, 80.27549384469123]).addTo(map)
		.bindPopup('Work_Location')
		.openPopup();        
        var marker3= L.marker([12.082462755140616, 79.27549384469123]).addTo(map)
		.bindPopup('Work_Location2')
		.openPopup();  
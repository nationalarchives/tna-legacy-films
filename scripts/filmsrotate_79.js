var how_many_expics = 4;
var now = new Date()
var sec = now.getSeconds()
var expic = sec % how_many_expics;
expic +=1;

if (expic==1) {
alt="Bullying Tell Someome";
pic="/films/images/1979_2006_bullying.jpg";
url="/films/1979to2006/";
target="self";
}
if (expic==2) {
alt="Climate Change";
pic="/films/images/1979_2006_climate_20.jpg";
url="/films/1979to2006/";
target="self";
}

if (expic==3) {
alt="Close To The Edges";
pic="/films/images/1979_2006_close.jpg";
url="/films/1979to2006/";
target="self";
}

if (expic==4) {
alt="Climate Change";
pic="/films/images/1979_2006-climate_p41.jpg";
url="/films/1979to2006/";
target="self";
}


document.write('<a href="' + url + '" target="_'+ target +'"><img src="' + pic + '" width="182" height="120" alt="' + alt + '" border="0" /></a>');
var how_many_expics = 4;
var now = new Date()
var sec = now.getSeconds()
var expic = sec % how_many_expics;
expic +=1;

if (expic==1) {
alt="Pedestrian Crossing ";
pic="/films/images/1945_1951_bscap610.jpg";
url="/films/1945to1951/";
target="self";
}
if (expic==2) {
alt="The Wonder Jet";
pic="/films/images/1945_1951-bscap158.jpg";
url="/films/1945to1951/";
target="self";
}

if (expic==3) {
alt="Charley in New Town";
pic="/films/images/1945_1951-bscap294.jpg";
url="/films/1945to1951/";
target="self";
}

if (expic==4) {
alt="Men of the World";
pic="/films/images/1945_1951-bscap448.jpg";
url="/films/1945to1951/";
target="self";
}


document.write('<a href="' + url + '" target="_'+ target +'"><img src="' + pic + '" width="182" height="120" alt="' + alt + '" border="0" /></a>');
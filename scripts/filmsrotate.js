var how_many_expics = 5;
var now = new Date()
var sec = now.getSeconds()
var expic = sec % how_many_expics;
expic +=1;

if (expic==1) {
alt="Charley in New Town";
pic="/films/images/index_left_01.jpg";
url="/films/1945to1951/aboutexhibition.htm";
target="blank";
}
if (expic==2) {
alt="The Wonder Jet";
pic="/films/images/index_left_02.jpg";
url="/films/1945to1951/aboutexhibition.htm";
target="self";
}

if (expic==3) {
alt="Festival in London";
pic="/films/images/index_left_03.jpg";
url="/films/1945to1951/aboutexhibition.htm";
target="self";
}

if (expic==4) {
alt="Men of the World";
pic="/films/images/index_left_04.jpg";
url="/films/1945to1951/aboutexhibition.htm";
target="self";
}

if (expic==5) {
alt="Festival in London";
pic="/films/images/index_left_05.jpg";
url="/films/1945to1951/aboutexhibition.htm";
target="self";
}


document.write('<a href="' + url + '" target="_'+ target +'"><img src="' + pic + '" width="266" height="212" alt="' + alt + '" border="0" /></a>');
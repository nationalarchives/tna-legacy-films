var how_many_expics = 4;
var now = new Date()
var sec = now.getSeconds()
var expic = sec % how_many_expics;
expic +=1;

if (expic==1) {
alt="Operation Hurricane ";
pic="/films/images/operation-hurricane-1951.jpg";
url="/films/1951to1964/";
target="self";
}
if (expic==2) {
alt="Atomic Achievement ";
pic="/films/images/atomic-achievement-1951.jpg";
url="/films/1951to1964/";
target="self";
}

if (expic==3) {
alt="The Blue Streak Rocket";
pic="/films/images/blue-streak-rocket-1951.jpg";
url="/films/1951to1964/";
target="self";
}

if (expic==4) {
alt="This Week In Britain No.199 &#145;The Caretaker&#146;";
pic="/films/images/the-caretaker-film-piece.jpg";
url="/films/1951to1964/";
target="self";
}


document.write('<a href="' + url + '" target="_'+ target +'"><img src="' + pic + '" width="182" height="120" alt="' + alt + '" border="0" /></a>');
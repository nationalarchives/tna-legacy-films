var how_many_expics = 4;
var now = new Date()
var sec = now.getSeconds()
var expic = sec % how_many_expics;
expic +=1;

if (expic==1) {
alt="Green Cross Code 1 with Dave Prowse ";
pic="/films/images/1964_1979_green_cross.jpg";
url="/films/1964to1979/";
target="self";
}
if (expic==2) {
alt="Joe & Petunia &ndash; Coastguard ";
pic="/films/images/1964_1979_joe_petunia.jpg";
url="/films/1964to1979/";
target="self";
}

if (expic==3) {
alt="Protect &amp; Survive &ndash; Casualties ";
pic="/films/images/1964_1979_protect.jpg";
url="/films/1964to1979/";
target="self";
}

if (expic==4) {
alt="Charley &#45; Strangers";
pic="/films/images/1964_1979-public_info.jpg";
url="/films/1964to1979/";
target="self";
}


document.write('<a href="' + url + '" target="_'+ target +'"><img src="' + pic + '" width="182" height="120" alt="' + alt + '" border="0" /></a>');
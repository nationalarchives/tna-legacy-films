function PlayClip(mediaType,clipName,clipSpeed,clipTitle)
{
	
	//alert("clipTitle " + clipTitle);
	var clipHeight, popURL;
		popURL="/films/scripts/" + mediaType + ".asp?clip_name="  + clipName + "&title=" + clipTitle + "&clipSpeed=" + clipSpeed;
if (mediaType == "wmv")
		{
			winpops=window.open(popURL,"film","width=480,height=485,left=200,top=130,status")
		}
	else
		{
			winpops=window.open(popURL,"film","width=480,height=485,left=200,top=130,status")
		}
}


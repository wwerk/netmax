/*
bresenham.js

From: https://medium.com/code-music-noise/euclidean-rhythms-391d879494df

-mzed 2021_11_02

*/

autowatch = 1;

function bresenham(onsets, totalPulses) 
{
  var previousVal = null;
  var pattern = [];

  for (var i = 0; i < totalPulses; ++i) 
  {
    var currentVal = Math.floor((onsets  / totalPulses) * i);

	if (currentVal === previousVal) 
	{
		pattern.push(0) //no change, put a 0 in the pattern
	}
	else
	{
		pattern.push(1) //changed! put a 1 in the pattern
	}

    previousVal = currentVal;
  }

  outlet(0, pattern);
}
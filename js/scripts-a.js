function github(){
		window.location.href="https://github.com/lnkstls/acgnv/issues/new";
};
var userAgentInfo = navigator.userAgent;
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
for (var i = 0; i < Agents.length; i++)
{  
		if (userAgentInfo.indexOf(Agents[i]) > 0)
		{
				var lbba = document.querySelectorAll(".lbba");
				for(var i=0; i<lbba.length; i++)
				{
						lbba[i].appendChild(document.createElement("br"));
				}
		}  
}


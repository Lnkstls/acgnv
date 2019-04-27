$(".github-logo").click(function(){
		window.location.href="https://github.com/lnkstls/acgnv/issues/new";
});
/* 判断浏览器 */
var userAgentInfo = navigator.userAgent;
var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
for (var i = 0; i < Agents.length; i++)
{  
		if (userAgentInfo.indexOf(Agents[i]) > 0)
		{
				$('.lbba').append('<br/>');
		}  
}

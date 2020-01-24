// 赋值颜色

(function () {
	let shu = document.getElementById("shu");
    let form = document.getElementById("form");
    let click = document.getElementById("click");
    shu.onfocus = function () {
        form.classList.add("shufocus");
    };
    shu.onblur = function () {
        form.classList.remove("shufocus");
    };
    click.onclick = function () {
        shu.value == "" ? shu.name = "" : null;
    };
}());
(function () {
	function List() {
	}
	List.prototype.listInit = function (obj,map) {
		let elements = obj.elements;
		for (let i in elements){
			// 创建li
			let li=document.createElement("li");
			li.className = "nav";
			// 创建a
			let a = document.createElement("a");
			a.innerText = i;
			a.onmouseover = function(){
				this.style.backgroundColor = elements[i].color || "#000";
			};
			a.onmouseout = function(){
				this.style.backgroundColor = null;
			}
			a.href = elements[i].link || "javascript:void(0);";
			li.appendChild(a);
			map.appendChild(li);
		}
	};
	window.List = List;
}());


window.onload = function () {
	// 加载列表
	let map = document.getElementById("ul");
	let list = new List();
	list.listInit(ListObject,map);
    // 加载图片
    let logo = document.getElementById("logo");
    let ifLogo = false;
    ifLogo = logo.src = "https://i.loli.net/2020/01/07/5N4wv62sXmKGLr9.png";
	ifLogo?logo.style.width = 100 +"%":null;

    console.log("@@@@@@@@@@@@@@     @@@@@@@@@@@@@\n" +
        "@@@@@@@@                 @@@@@@@\n" +
        "@@@@@@     z               @@@@@\n" +
        "@@@@-    +.......;      #..  @@@\n" +
        "@@     +..........ua   ...    @@\n" +
        "@  -  6...........    ..~      @\n" +
        "@  6  .-...........+ ..         \n" +
        "        ..........;n..^         \n" +
        "   a!   1.......a+~....         \n" +
        "             .........          \n" +
        "@   3      .........            \n" +
        "@@  6     ..........o          @\n" +
        "@@        ...........         @@\n" +
        "@@@@      ^..........1       @@@\n" +
        "@@@@@@     ...........     @@@@@\n" +
        "@@@@@@@@@ u...........* @@@@@@@@\n" +
        "		Mtime：2020-1-23");
};

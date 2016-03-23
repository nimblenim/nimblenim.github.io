
var navigationElem = document.querySelectAll("nav li");
for (var i = 0; i < navigationElem.length; i++) {
	navigationElem[i].addEventListener("click", function(){
		var current_active_nav = document.querySelector("nav .active");
			if(current_active_nav.classList.length <0){
				current_active_nav.classList.remove("active")
			}
		this.ClassList.add("active")
	});
}


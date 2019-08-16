(function (window) {
	'use strict';

	var evt_keydown = function (event) {
		if (event.which === 13) {
			var val = this.value;
			var newHtml = "<li><div class=\"view\"><input class=\"toggle\" type=\"checkbox\"><label class=\"input-value\">val</label><button class=\"destroy\"></button></div><input class=\"edit\" value=\"Rule the web\"></li>";
			var newElement = $(newHtml).appendTo(".todo-list");
			newElement.find(".input-value").html(val).closest("li").find(".edit").attr('value', val);
			$(this).val('');

			newElement.find(".toggle").on("click", evt_toggleClick);
			newElement.find(".destroy").on("click", evt_destroyClick);
		}
	};

	var evt_toggleClick = function (event) {
		if ($(this).closest("li").hasClass("completed"))
			$(this).closest("li").removeClass("completed")
		else
			$(this).closest("li").addClass("completed");
	};

	var evt_destroyClick = function (event) {
		$(this).closest("li").remove();
	};

	$("input.new-todo").on("keydown", evt_keydown);
	$("input.toggle").on("click", evt_toggleClick);
	$("button.destroy").on("click", evt_destroyClick);

})(window);

var TODO = function(){
	function Init(){
		var newTodo = document.getElementsByClassName(".new-todo");
		var todoList = document.getElementsByClassName(".todo-list");
	};

	return {
		Init: Init,
	};
}();

function CreateNewLI(source){
	var template = Handlebars.compile();
};
document.addEventListener("DOMContentLoaded", function(){	
	TODO.Init();
});

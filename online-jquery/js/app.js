(function (window) {
	'use strict';

})(window);

var TODO = function () {
	var newTodo;
	var todoList;

	function CreateNewTodo(val) {
		var newTodoHtml =
			"<li>" +
			"<div class=\"view\">" +
			"<input class=\"toggle\" type=\"checkbox\">" +
			"<label>{{input-value}}</label>" +
			"<button class=\"destroy\"></button>" +
			"</div>" +
			"<input class=\"edit\" value={{input-value}}>" +
			"</li>";
		var template = Handlebars.compile(newTodoHtml);
		console.log(todoList);
		
		todoList[0].insertAdjacentHTML("beforeend", template({
			"input-value": val
		}));
	};

	var evt_keydown = function (event) {
		if (event.which === 13) {
			CreateNewTodo(this.value);
			$(this).val('');

			// newElement.find(".toggle").on("click", evt_toggleClick);
			// newElement.find(".destroy").on("click", evt_destroyClick);
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

	function Init() {
		newTodo = document.getElementsByClassName('new-todo');
		todoList = document.getElementsByClassName('todo-list');

		$(newTodo).on("keydown", evt_keydown);
		$("input.toggle").on("click", evt_toggleClick);
		$("button.destroy").on("click", evt_destroyClick);
	};

	return {
		Init: Init,
	};
}();


document.addEventListener("DOMContentLoaded", function () {
	TODO.Init();
});

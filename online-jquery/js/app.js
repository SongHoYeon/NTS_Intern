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

		todoList[0].insertAdjacentHTML("beforeend", template({
			"input-value": val
		}));
	};

	var evt_keydown = function (event) {
		if (event.key === 'Enter') {
			CreateNewTodo(this.value);
			$(this).val('');
		}
	};

	var evt_toggleClick = function (event) {
		if (event.target.type === "checkbox" && event.target.tagName ===
			"INPUT" && event.target.className === "toggle");
		{
			if ($(event.target).closest("li").hasClass("completed"))
				$(event.target).closest("li").removeClass("completed")
			else
				$(event.target).closest("li").addClass("completed");
		}
	};

	var evt_destroyClick = function (event) {
		if (event.target.tagName ===
			"BUTTON" && event.target.className === "destory");
		{
			$(event.target).closest("li").remove();
		}
	};

	function Init() {
		newTodo = document.getElementsByClassName('new-todo');
		todoList = document.getElementsByClassName('todo-list');

		$(newTodo).on("keydown", evt_keydown);
		$(todoList).on("click", evt_toggleClick)
		$(todoList).on("click", evt_destroyClick)
	};

	return {
		Init: Init,
	};
}();


document.addEventListener("DOMContentLoaded", function () {
	TODO.Init();
});

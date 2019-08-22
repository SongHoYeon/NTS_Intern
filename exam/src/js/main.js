var novelPageListener = function () {
	var headerMenuList;
	// var todoList;

	function CreateNewTodo(val) {
		// var newTodoHtml =
		// 	"<li>" +
		// 	"<div class=\"view\">" +
		// 	"<input class=\"toggle\" type=\"checkbox\">" +
		// 	"<label>{{input-value}}</label>" +
		// 	"<button class=\"destroy\"></button>" +
		// 	"</div>" +
		// 	"<input class=\"edit\" value={{input-value}}>" +
		// 	"</li>";
		// var template = Handlebars.compile(newTodoHtml);
		// console.log(todoList);
		
		// todoList[0].insertAdjacentHTML("beforeend", template({
		// 	"input-value": val
		// }));
	};

	// var evt_keydown = function (event) {
	// 	if (event.which === 13) {
	// 		CreateNewTodo(this.value);
	// 		$(this).val('');
	// 	}
	// };

	var headerMenuKeyClickEvent = function (event) {
		// if ($(this).closest("li").hasClass("completed"))
		// 	$(this).closest("li").removeClass("completed")
		// else
        // 	$(this).closest("li").addClass("completed");
        $(this).closest('.menu').addClass('select');
        console.log($(this).closest('.menu'));
	};

	var evt_destroyClick = function (event) {
		$(this).closest("li").remove();
	};

	function Init() {
		headerMenuList = document.getElementsByClassName('header_menu');

		$(headerMenuList).on("click", headerMenuKeyClickEvent);
	};

	return {
		Init: Init,
	};
}();


$(document).ready(function () {
	novelPageListener.Init();
});

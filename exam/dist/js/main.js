var novelPageListener=function(){var n,e,t={Init:function(){(n=$(".header_menu")).on("click",a),(e=n.find(".menu").first()).addClass("select")}};function a(n){e.removeClass("select"),"link"===n.target.className&&($(n.target).closest("li").addClass("select"),e=$(n.target).closest("li"))}var s={Init:function(){$(".customer_info_popup"),$(".banner").on("click",i)}};function i(n){"banner"===n.target.className&&(console.log("a"),$(popupElement).addClass("open"))}return{Init:function(){t.Init(),s.Init()}}}();$(document).ready(function(){novelPageListener.Init()});
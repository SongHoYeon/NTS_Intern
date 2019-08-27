var novelPageListener = function () {
	var headerMenuHandler = function(){
        var $headerMenuList;
        var $lastSelectElement;

        var clickEvent = function (event) {            
            if ($(this).hasClass('link')){
                $lastSelectElement.removeClass('select');
                $(this).closest('.menu').addClass('select');
                $lastSelectElement = $(this).closest('.menu');
            }
        };

        function Init() {
            $headerMenuList = $('.header_menu');
            ($headerMenuList).find('.link').on("click", clickEvent);

            $lastSelectElement = $headerMenuList.find('.menu').first();
            $lastSelectElement.addClass('select');
        };
    
        return {
            Init: Init,
        };
    }();

    var bannerHandler = function(){
        var $popupElement;
        var $bannerElement;

        var clickEvent = function (event) {
            if ($(this).hasClass('banner')){
                $popupElement.fadeIn(1000);
            }
        };

        function Init() {
            $popupElement = $('.customer_info_popup');
            $bannerElement = $('.banner');

            ($bannerElement).on("click", clickEvent);
        };

        return {
            Init: Init,
        };
    }();

    var rankingHandler = function(){
        var $previewArea;
        var $previewElement;
        var $previewIsOpen;
        var $rankingTitleElement;
        var $rankingList;
        var $rankingListOpenBtn;

        var rankingMokupData_offsetValue;
        var rankingMokupData_offset;

        var previewIdx;

        var clickEvent = function (event) { 
            if ($(this).hasClass('ranking_area')){
                $previewIsOpen = !($previewIsOpen);
                if ($previewIsOpen === true){
                    ($previewElement).addClass('open');
                    ($rankingTitleElement).html("실시간 " + "<span class=\"blind\">순위</span>");
                    ($rankingList).removeClass('open');
                    ($rankingListOpenBtn).css("background-image", "url(./img/img8.png)");
                    ($rankingListOpenBtn).find('.blind').html("열기");
                }
                else{
                    ($previewElement).removeClass('open');
                    ($rankingTitleElement).html("실시간 순위");
                    ($rankingList).addClass('open');
                    ($rankingListOpenBtn).css("background-image", "url(./img/img7.png)");
                    ($rankingListOpenBtn).find('.blind').html("닫기");
                }
            }
        };

        var previewRandomRank = function(){
            previewIdx = Math.round(Math.random() * 4) + 1;

            ($previewElement).find('.rank').removeClass().addClass('rank').addClass('rank_' + previewIdx);
            ($previewElement).find('.subject').html(rankingMokupData_value[previewIdx - 1]);
            ($previewElement).find('.offset_wrap').removeClass().addClass('offset_wrap').addClass(rankingMokupData_offset[previewIdx - 1]);
            ($previewElement).find('.offset_value').html(rankingMokupData_offsetValue[previewIdx - 1]+ "<span class=\"blind\"></span>");

            var blindTxt;
            if (rankingMokupData_offset[previewIdx - 1] === "up")
            blindTxt = "위 상승";
            else if (rankingMokupData_offset[previewIdx - 1] === "same")
            blindTxt = "미변동";
            else if (rankingMokupData_offset[previewIdx - 1] === "down")
            blindTxt = "위 하락";
            ($previewElement).find('.offset_value').find('.blind').html(blindTxt);
        }; 

        var previewFixRank = function(idx){
            ($previewElement).find('.rank').removeClass().addClass('rank').addClass('rank_' + idx);
            ($previewElement).find('.subject').html(rankingMokupData_value[idx - 1]);
            ($previewElement).find('.offset_wrap').removeClass().addClass('offset_wrap').addClass(rankingMokupData_offset[idx - 1]);
            ($previewElement).find('.offset_value').html(rankingMokupData_offsetValue[idx - 1]+ "<span class=\"blind\"></span>");

            var blindTxt;
            if (rankingMokupData_offset[idx - 1] === "up")
            blindTxt = "위 상승";
            else if (rankingMokupData_offset[idx - 1] === "same")
            blindTxt = "미변동";
            else if (rankingMokupData_offset[idx - 1] === "down")
            blindTxt = "위 하락";
            ($previewElement).find('.offset_value').find('.blind').html(blindTxt);
        }; 

        var setRankingList = function(){
            for (var i = 0 ; i < 5 ; i ++){
                var $target = ($rankingList).children().eq(i);
                ($target).find('.rank').removeClass().addClass('rank').addClass('rank_' + (i + 1));
                ($target).find('.subject').html(rankingMokupData_value[i]);
                ($target).find('.offset_wrap').removeClass().addClass('offset_wrap').addClass(rankingMokupData_offset[i]);
                ($target).find('.offset_value').html(rankingMokupData_offsetValue[i] + "<span class=\"blind\"></span>");
                
                
                var blindTxt;
                if (rankingMokupData_offset[i] === "up")
                    blindTxt = "위 상승";
                else if (rankingMokupData_offset[i] === "same")
                    blindTxt = "미변동";
                else if (rankingMokupData_offset[i] === "down")
                    blindTxt = "위 하락";
                ($target).find('.offset_value').find('.blind').html(blindTxt);
            }
        }; 

        function interval(){
            setInterval(function(){
                previewFixRank(previewIdx);
                previewIdx += 1;
                if (previewIdx > 5)
                previewIdx = 1;
            }, 5000);
        };

        function Init() {
            $previewArea = $('.ranking_area');
            $previewElement = $previewArea.find('.preview_wrap');
            $previewIsOpen = true;
            $rankingTitleElement = $previewArea.find('.title');
            $rankingList = $('.ranking_wrap .ranking_list');
            $rankingListOpenBtn = $previewArea.find('.arrow');

            $previewRankingImg = $previewElement.find('.rank');
            $previewRankingOffsetWrap = $previewElement.find('.offset_wrap');

            ($previewArea).on("click", clickEvent);

            rankingMokupData_offsetValue = new Array();
            rankingMokupData_offsetValue[0] = 78;
            rankingMokupData_offsetValue[1] = 30;
            rankingMokupData_offsetValue[2] = 0;
            rankingMokupData_offsetValue[3] = 21;
            rankingMokupData_offsetValue[4] = 49;
            rankingMokupData_offset = new Array();
            rankingMokupData_offset[0] = "up";
            rankingMokupData_offset[1] = "up";
            rankingMokupData_offset[2] = "same";
            rankingMokupData_offset[3] = "down";
            rankingMokupData_offset[4] = "down";
            rankingMokupData_value = new Array();
            rankingMokupData_value[0] = "뱀파이어와의 비밀연애";
            rankingMokupData_value[1] = "[r.p] happiness 티아라쓴 개망나니"
            rankingMokupData_value[2] = '일이삼사오육칠팔구십일이삼사오육칠';
            rankingMokupData_value[3] = '[r.p] happiness 티아라쓴 개망나니';
            rankingMokupData_value[4] = '짝사랑 연대기 (over 10 year)';

            previewRandomRank();
            setRankingList();
            interval();
        };

        return {
            Init: Init,
        };
    }();

    var surveyHandler = function(){
        var $surveyparent;
        var $sortList;
        var $lastSelectElement;
        var $surveyList;
        var $surveyElement;

        var surveyMokupDataCategoryIcon;
        var surveyMokupDataCategory;
        var surveyMokupDataTitle;
        var surveyMokupDataLastTitle;
        var surveyMokupDataDesc;

        var clickEvent = function (event) {
            if ($(this).hasClass('btn')){
                $lastSelectElement.removeClass('select');
                $(this).closest('.sort_element').addClass('select');
                $lastSelectElement = $(this).closest('.sort_element');
            }
        };

        var surveyClickEvent = function (event) {
            if ($(this).hasClass('btn')){
                if ($(this).hasClass('complete')){
                    $(this).removeClass('complete')
                    $(this).html("투표하기");
                }else{
                    $(this).addClass('complete')
                    $(this).html("투표완료");
                }
            }
        };

        function setMokupSurveyList(){
            surveyMokupDataCategoryIcon = new Array();
            surveyMokupDataCategoryIcon[0] = "img/thumb.png"
            surveyMokupDataCategoryIcon[1] = "img/thumb_1.png"
            surveyMokupDataCategoryIcon[2] = "img/thumb.png"
            surveyMokupDataCategoryIcon[3] = "img/thumb_1.png"
            surveyMokupDataCategoryIcon[4] = "img/thumb.png"
            surveyMokupDataCategory = new Array();
            surveyMokupDataCategory[0] = "로맨스";
            surveyMokupDataCategory[1] = "SF&판타지";
            surveyMokupDataCategory[2] = "로맨스";
            surveyMokupDataCategory[3] = "SF&판타지";
            surveyMokupDataCategory[4] = "라이트노벨";
            surveyMokupDataTitle = new Array();
            surveyMokupDataTitle[0] = "[R.P] happiness 티아라쓴 공주";
            surveyMokupDataTitle[1] = "황태자의 책사 시엘";
            surveyMokupDataTitle[2] = "연못에 핀 목화 - 송경별곡";
            surveyMokupDataTitle[3] = "[R.P] happiness 티아라쓴 공주";
            surveyMokupDataTitle[4] = "[R.P] happiness 티아라쓴 공주";
            surveyMokupDataLastTitle = new Array();
            surveyMokupDataLastTitle[0] = "일이삼사오육칠팔구십";
            surveyMokupDataLastTitle[1] = "일이삼사오육칠팔구십";
            surveyMokupDataLastTitle[2] = "일이삼사오육칠팔구십";
            surveyMokupDataLastTitle[3] = "일이삼사오육칠팔구십";
            surveyMokupDataLastTitle[4] = "일이삼사오육칠팔구십";
            surveyMokupDataDesc = new Array();
            surveyMokupDataDesc[0] = "일이삼아오육칠팔구십일이삼사오육칠팔구십일이삼사오육";
            surveyMokupDataDesc[1] = "가정학대를 넘어선 폭력을 받아온 비운의 아이 민아";
            surveyMokupDataDesc[2] = "가정학대를 넘어선 폭력을 받아온 비운의 아이 민아";
            surveyMokupDataDesc[3] = "가정학대를 넘어선 폭력을 받아온 비운의 아이 민아";
            surveyMokupDataDesc[4] = "가정학대를 넘어선 폭력을 받아온 비운의 아이 민아";

            for (var i = 1 ; i <= 5 ; i ++){
                var $target = ($surveyList).children().eq(i);
                $target.find('.category .thumbnail').css("background-image", "url(" + surveyMokupDataCategoryIcon[i - 1]+ ")");
                $target.find('.category .text').html(surveyMokupDataCategory[i - 1]);
                $target.find('.subject').html(surveyMokupDataTitle[i - 1]);
                $target.find('.total .last_subject').html(surveyMokupDataLastTitle[i - 1]);
                $target.find('.total .count').html("총 " + (Math.round(Math.random() * 200) + 1) + "회");
                $target.find('.desc').html(surveyMokupDataDesc[i - 1]);
            }
        };

        function Init() {
            $surveyparent = $('.survey_wrap');
            $sortList = $surveyparent.find('.sort_list');
            $surveyList =  $surveyparent.find('.survey_list');
            $surveyElement = $surveyList.find('.survey_element');

            ($sortList).find('.sort_element .btn').on("click", clickEvent);
            ($surveyElement).find('.btn').on("click", surveyClickEvent);

            $lastSelectElement = $sortList.find('.sort_element').first();
            $lastSelectElement.addClass('select');

            setMokupSurveyList();
        };

        return {
            Init: Init,
        };
    }();

    var infoPopupHandler = function(){
        var $popupLayer;
        var $checkList;

        var clickEvent = function (event) {
            if ($(this).hasClass('check_area')){
                if ($(this).find('.check_icon').hasClass('check')){
                    $(this).find('.check_icon').removeClass('check');
                    $(this).find('.check_icon').addClass('uncheck');
                    $(this).find('.blind').html("동의하기");
                }
                else if ($(this).find('.check_icon').hasClass('uncheck')){
                    $(this).find('.check_icon').removeClass('uncheck');
                    $(this).find('.check_icon').addClass('check');
                    $(this).find('.blind').html("미동의하기");
                }
            }
        };

        var closeEvent = function (event) {
            if ($(this).hasClass('close_btn') ||
            $(this).hasClass('popup_dimmed')){
                $popupLayer.fadeOut(1000);
            }
        };

        function Init() {
            $popupLayer = $('.customer_info_popup');
            $checkList = $popupLayer.find('.check_list');

            ($checkList).find('.check_area').on("click", clickEvent);
            ($popupLayer).find('.close_btn').on("click", closeEvent);
            ($popupLayer).find('.popup_dimmed').on("click", closeEvent);
        };

        return {
            Init: Init,
        };
    }();

	function Init() {
        headerMenuHandler.Init();
        bannerHandler.Init();
        rankingHandler.Init();
        surveyHandler.Init();
        infoPopupHandler.Init();
	};

	return {
		Init: Init,
    };
}();


$(document).ready(function () {
    novelPageListener.Init();
});

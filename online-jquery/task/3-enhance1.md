# Task
앞서 진행했던 코드를 다시 검토하고 개선하는 task입니다.

## [과제 영상](http://share.navercorp.com/on-techsession1/lecture/11894/)

## 개선하기-1
- [x] magic number인 13을 제거한다.
- [x] `할 일 추가`할 때, 탬플릿 라이브러리(여기서는 [handlebarsjs](http://handlebarsjs.com/))를 활용한다.
- [x] `완료하기`/`삭제하기`는 event delegation기법을 활용한다.
- [x] 이벤트를 바인딩하는 부분과 동작하는 코드를 개선한다.
	- [x] 초기화하는 함수(`init`)를 만든다. 초기화하는 함수에는 이벤트를 바인딩한다.
	- [x] 모듈패턴을 활용하여 TODO객체를 만든다.
		- [x] 객체는 초기화하는 `init` 메서드가 있고, 그 외 메서드는 노출되지 않는다.
	- [x] `DOMContentLoaded`시점에 `TODO.init`을 실행한다.

# 사전 지식
## jQuery
- [on(delegation)](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/browser-event)
- [ready](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/browser-event)

## FE공통강의
- [module pattern](https://oss.navercorp.com/fe-edu/common-unit/tree/master/unit/module)
- [template pattern](https://oss.navercorp.com/fe-edu/common-unit/tree/master/unit/template)
- [event delegation](https://oss.navercorp.com/fe-edu/common-unit/tree/master/unit/event-delegation)
- [자바스크립트 초기화](https://oss.navercorp.com/fe-edu/js-unit/tree/master/unit/init)

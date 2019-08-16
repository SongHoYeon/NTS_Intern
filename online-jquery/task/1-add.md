# Task
할 일을 추가하는 task입니다.

## [과제 영상](http://share.navercorp.com/on-techsession1/lecture/11892/)

## 추가하기
- [x] `.new-todo`에 todo을 입력하고 `enter`을 누른다.
- [x] `.new-todo`에 입력한 값을 읽는다.
- [x] 아래와 같은 html 구조에서 `{{input-value}}`을 입력한 값으로 변경한 후 `todo-list`에 마지막 엘리먼트로 추가한다.
- [x] `.new-todo`의 값을 빈 값으로 한다.

```html
<li>
	<div class="view">
		<input class="toggle" type="checkbox">
		<label>{{input-value}}</label>
		<button class="destroy"></button>
	</div>
	<input class="edit" value="{{input-value}}">
</li>
```

# 사전 자료
## jQuery
- [$](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/basic)
- [on](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/browser-event)
- [val](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/attr)
- [append](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/dom-insertion)
- [event object](https://oss.navercorp.com/fe-edu/jquery-unit/tree/master/unit/event-object)
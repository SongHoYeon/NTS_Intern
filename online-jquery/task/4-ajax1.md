# Task
[API을 활용](https://oss.navercorp.com/edu/online-jquery/wiki/%EC%84%9C%EB%B2%84-%EC%A0%95%EB%B3%B4)하여 앞에서 진행한 할 일 추가하기를 ajax로 서버와 연동하고, 초기에 불러오기를 ajax로 가져옵니다.

## [과제 영상](http://share.navercorp.com/on-techsession1/lecture/11896/)

## 초기 데이터 불러오기/추가하기
- [ ] 페이지가 로딩되면 서버에 등록된 data을 보여준다.
	- [ ] 없는 경우, 아래 style, html나와야 한다.
- [ ] todo을 추가하는데 서버에 post로 등록되어야 한다.
	- [ ] 등록된 todo는 첫 번째에 등록되어야 한다.
	- [ ] 등록된 결과가 정상적일때(파라메터의 message가 없을 때)만 등록한다
	- [ ] 등록이 실패한 경우, alert으로 경고한다.(적절한 메시지는 보이면 된다.)

```html
<style>
.todo-list li label.not-found {
	margin-left : 5px;	
	color:#4d4d4d;
}
</style>

<li>
<div class="view">
	<label class="not-found">등록된 TODO가 없습니다.</label>
</div>
</li>
```

# 사전 지식
## jQuery
- [Ajax](https://oss.navercorp.com/edu/jquery-unit/tree/master/unit/ajax)

## FE공통강의
- [method의 이해](http://blog.remotty.com/blog/2014/01/28/lets-study-rest/#method)
- [비동기의 이해](http://altitudelabs.com/blog/what-is-the-javascript-event-loop/)
- [타도메인간의 통신](http://www.html5rocks.com/en/tutorials/cors/)
- handlebars [helper](http://handlebarsjs.com/builtin_helpers.html)

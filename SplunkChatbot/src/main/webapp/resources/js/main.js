const sendBtn = document.getElementById('SendBtn');	// send 버튼
const question = document.getElementById('QuestionBox'); // 질문란
const botMessage = document.querySelector('.helloBox');	// bot 처음 메시지
let chatQuestions;
let lastQIndex;
const createQuestion = () => {
	const firstQ = '<div id=\'firstQuestion\' class=\'chatQuestion\'><span class=\'mb-4 p-3 bg-\[\#fae5ca\] rounded-l-xl rounded-l-xl\'>'+question.value+'</span></div>';
	var questionVal = question.value;
	const firstQuestion = document.getElementById('firstQuestion');
	chatQuestions = document.querySelectorAll('.chatQuestion');
	lastQIndex = chatQuestions.length -1;
	if(questionVal.includes('접속 이상')){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.helloBox');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			setTimeout(createAnswer1(), 5000);
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			setTimeout(createAnswer1(), 5000);
		}
	}else if(questionVal.includes('개인 정보 조회')){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.helloBox');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer2();
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer2();
		}
	}else if(questionVal.includes('계정 관리 위반')){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.helloBox');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer3();
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer3();
		}
	}else if(questionVal.includes('splunk query')){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.helloBox');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer4();
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer4();
		}
	}	
}

const createAnswer1 = () => {
	const firstA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과 URL:</b><br>'+
		'<a href=\'https://bit.ly/3Igxohr\' target=\'_blank\'>https://bit.ly/3Igxohr</a></span></div></div>';
	const secondA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과화면:</b><br>'+
		'<img src=\'resources/image/result1.png\'></span></div></div>';
	const firstQ = document.getElementById('firstQuestion');
	chatQuestions = document.querySelectorAll('.chatQuestion');
	lastQIndex = chatQuestions.length -1;
	chatQuestions[lastQIndex].insertAdjacentHTML('afterend', firstA+secondA);
}

const createAnswer2 = () => {
	const firstA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과 URL:</b><br>'+
		'<a href=\'https://bit.ly/49wWGUB\' target=\'_blank\'>https://bit.ly/49wWGUB</a></span></div></div>';
	const secondA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과화면:</b><br>'+
		'<img src=\'resources/image/result2.png\'></span></div></div>';
	const firstQ = document.getElementById('firstQuestion');
	chatQuestions = document.querySelectorAll('.chatQuestion');
	lastQIndex = chatQuestions.length -1;
	chatQuestions[lastQIndex].insertAdjacentHTML('afterend', firstA+secondA);
}

const createAnswer3 = () => {
	const firstA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과 URL:</b><br>'+
		'<a href=\'https://bit.ly/3P4bWA7\' target=\'_blank\'>https://bit.ly/3P4bWA7</a></span></div></div>';
	const secondA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과화면:</b><br>'+
		'<img src=\'resources/image/result3.png\'></span></div></div>';
	const firstQ = document.getElementById('firstQuestion');
	chatQuestions = document.querySelectorAll('.chatQuestion');
	lastQIndex = chatQuestions.length -1;
	chatQuestions[lastQIndex].insertAdjacentHTML('afterend', firstA+secondA);
}

const createAnswer4 = () => {
	const firstA = '<div class=\'helloBox\'><div class="icon"></div><div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-xl rounded-t-xl leading-relaxed prose prose-sm\'>'+
		'<ul><li><b>관리자 로그인:</b></li>'+
		'<li>\`index=audit action=login status=success user=\"admin\"\`</li>'+
		'<li><b>관리자 로그아웃:</b></li><li>\`index=audit action=logout status=success user=\"admin\"\`</li><li><b>관리자 추가:</b></li>'+
		'<li>\`index=_internal sourcetype=splunkd_ui_access method=POST uri_path=\*/services/authentication/users\*\`</li></ul>'+
		'<ul class=\'explanation\'><li><i>참고 : 이 쿼리는 관리자가 추가되는 행위를 추정합니다. 실제 필드 값은 Splunk 설정에 따라 다를 수 있습니다.</i></li></ul><ul><li><b>관리자 수정:</b></li>'+
		'<li>\`index=_internal sourcetype=splunkd_ui_access method=POST uri_path=\*/services/authentication/users\*\`</li></ul>'+
		'<ul class=\'explanation\'><li><i>참고 : 이 쿼리는 관리자가 수정되는 행위를 추정합니다. 실제 필드 값은 Splunk 설정에 따라 다를 수 있습니다.</i></li></ul></span></div></div>';
	const firstQ = document.getElementById('firstQuestion');
	chatQuestions = document.querySelectorAll('.chatQuestion');
	lastQIndex = chatQuestions.length -1;
	chatQuestions[lastQIndex].insertAdjacentHTML('afterend', firstA);
}

question.addEventListener('keyup',(e) => {
	if(e.keyCode == 13){
		createQuestion()
	}
});
sendBtn.addEventListener('click', createQuestion);
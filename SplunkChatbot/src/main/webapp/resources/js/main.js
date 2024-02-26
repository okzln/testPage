const sendBtn = document.getElementById('SendBtn');	// send 버튼
const question = document.getElementById('QuestionBox'); // 질문란
const botMessage = document.querySelector('.helloBox');	// bot 처음 메시지

const createQuestion = () => {
	const firstQ = '<div id=\'firstQuestion\' class=\'chatQuestion\'><span class=\'mb-4 p-3 bg-\[\#fae5ca\] rounded-l-xl rounded-l-xl\'>'+question.value+'</span></div>';
	const firstQuestion = document.getElementById('firstQuestion');
	if(question.value == "접속 이상 징후 탐지 결과 알려줘"){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.chatAnswer');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer1();
		}
	}else if(question.value == "DB에서 개인 정보 조회 사용자 탐지 결과 알려줘"){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.chatAnswer');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer2();
		}
	}else if(question.value == "계정관리 위반 탐지"){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.chatAnswer');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer3();
		}
	}else if(question.value == "관리자 로그인, 관리자 로그아웃, 관리자 추가, 관리자 수정, 관리자 삭제에 대한 splunk query 만들어줘"){
		if(firstQuestion){
			let chatAnswers = document.querySelectorAll('.chatAnswer');
			let lastIndex = chatAnswers.length -1;
			chatAnswers[lastIndex].insertAdjacentHTML('afterend', firstQ);
			question.value = "";
		}else{
			botMessage.insertAdjacentHTML('afterend', firstQ);
			question.value = "";
			createAnswer4();
		}
	}	
}

const createAnswer1 = () => {
	const firstA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과 URL:</b><br>'+
		'https://es-demo-apac.splunk.show/en-US/app/SplunkEnterpriseSecuritySuite/search</span></div>';
	const secondA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과화면:</b><br>'+
		'<img src=\'resources/image/result1.png\'></span></div>';
	const firstQ = document.getElementById('firstQuestion');
	firstQ.insertAdjacentHTML('afterend', '<div class=\'helloBox\'><div class=\'icon\'>'+firstA+secondA+'</div></div>');
}

const createAnswer2 = () => {
	const firstA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과 URL:</b><br>'+
		'https://es-demo-apac.splunk.show/en-US/app/SplunkEnterpriseSecuritySuite/search</span></div>';
	const secondA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과화면:</b><br>'+
		'<img src=\'resources/image/result2.png\'></span></div>';
	const firstQ = document.getElementById('firstQuestion');
	firstQ.insertAdjacentHTML('afterend', firstA+secondA);
}

const createAnswer3 = () => {
	const firstA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과 URL:</b><br>'+
		'https://es-demo-apac.splunk.show/en-US/app/SplunkEnterpriseSecuritySuite/search</span></div>';
	const secondA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm\'><b>결과화면:</b><br>'+
		'<img src=\'resources/image/result3.png\'></span></div>';
	const firstQ = document.getElementById('firstQuestion');
	firstQ.insertAdjacentHTML('afterend', firstA+secondA);
}

const createAnswer4 = () => {
	const firstA = '<div class=\'chatAnswer\'><span class=\'mb-4 bg-zinc-100 p-3 rounded-r-xl rounded-t-xl leading-relaxed prose prose-sm\'><b>관리자 로그인:</b><br>'+
		'\`index=audit action=login status=success user=\"admin\"\`<br>'+
		'<b>관리자 로그아웃:</b><br>\`index=audit action=logout status=success user=\"admin\"\`<br><b>관리자 추가:</b><br>'+
		'\`index=_internal sourcetype=splunkd_ui_access method=POST uri_path=\*/services/authentication/users\*\`';
	const firstQ = document.getElementById('firstQuestion');
	firstQ.insertAdjacentHTML('afterend', firstA);
}

sendBtn.addEventListener('click', createQuestion);
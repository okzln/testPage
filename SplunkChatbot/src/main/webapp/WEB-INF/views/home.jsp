<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="header.jsp" %>

	<div class="container">
		<div class="wrapper">
			<div class="main header">
				<div class="title"><span>Chatbot</span></div>
				<div class="subtitle"><span>ITU, ITM, Splunk 파일에 대해서 질문을 받고 있습니다.</span></div>
			</div>
			<div class="main section">
				<div>
					<img class="firstMessage" alt="Hello" src="/resources/image/firstHello.png">
				</div>
			</div>
			<div class="main footer">
				<input id="QuestionBox" class="questionBox" type="text" placeholder="How can I help you?">
				<input id="SendBtn" class="sendBtn" type="button" value="Send">
			</div>
		</div>
	</div>
</body>
</html>

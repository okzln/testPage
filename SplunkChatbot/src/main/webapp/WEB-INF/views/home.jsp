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
				<div class="helloBox">
					<div class="icon"></div>
					<div class="message mb-4 bg-zinc-100 p-3 rounded-r-2xl rounded-t-2xl leading-relaxed prose prose-sm">
						<span>Hello! 👋</span>
					</div>
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

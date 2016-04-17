'use strict'
$(function() {
	var headerHtml = $('#header').html(); 
	var myData = [
	'Гапоненко Марина Анатольевна',
	'https://vk.com/id5548230',
	'./img/mylogo.jpg',
	'Изучаю frontend в GoIt. Окончила курсы QA.'
	];
	
	var headerContent = tmpl(headerHtml, { 
	data: myData  
	});

	$('body').append(headerContent);
	
	var learnHtml = $('#learn').html(); 
	var myLearn = [
	{
	list: 'Мне это интересно'
	},
	{
	list: 'Востребованная проффесия'
	},
	{
	list: 'Постоянное развитие вместе с IT сферой'
	}
	];
	
	var learnContent = tmpl(learnHtml, { 
	data1: myLearn  
	});

	$('.centre').append(learnContent);
	
	var contactsHtml = $('#contacts').html(); 
	var myContacts = [
	'+380954961781',
	'https://vk.com/id5548230',
	'vk.com'
	];
	
	var contactsContent = tmpl(contactsHtml, { 
	data2: myContacts  
	});

	$('.centre').append(contactsContent);
	
	var feedbackHtml = $('#feedback').html(); 
	var myFeedback = [
	'Приложу все усилия чтобы получить по максимальному знания на курсе'
	];
	
	var feedbackContent = tmpl(feedbackHtml, { 
	data3: myFeedback  
	});

	$('.centre').append(feedbackContent);
});	
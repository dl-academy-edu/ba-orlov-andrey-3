let count=10;
const interval = setInterval(function(){console.log(--count)}, 1000);

console.log('Внимание на консоль. Через 10 секунд появятся три рассказа.\n10');

setTimeout(function(){ 
	clearInterval(interval);
	for (let i=0; i<3; i++){
		
		let name = data[i].name, 
		year = data[i].year, 
		index = developers.findIndex(item => item.index === data[i].developerIndex);
		coder = developers[index].name,
		profession = developers[index].work, 
		extensions = '.'+data[i].filenameExtensions.split(', ').join(', .'), 
		listInfluencedLength = data[i].influencedBy.length, 
		listInfluenced = data[i].influencedBy.join(', '), 
		listAffected = data[i].affectedBy.slice(0,4).join(', ')+
			(data[i].affectedBy.length > 4 ? ' и другие языки программирования' : '' );	
			
		console.log(
`
${name} - язык программирования выпущенный в ${year} году.
Автором языка стал ${coder} - ${profession}.
Файлы программ, написанных на ${name}, могут иметь расширения ${extensions}.
${name} испытал влияние ${listInfluencedLength} языков программирования: ${listInfluenced}.
${name} повлиял на ${listAffected}.
`)
		}
	},10000);

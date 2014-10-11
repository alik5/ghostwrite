$('a.pop_business').on('click',function(e) {
$('#index').empty(); 
console.log("emptied")
$('#index').load('business.html');
console.log("loaded")
//$('#index').hide();
});

$('a.pop_personal').on('click',function(e) {
$('#index').empty();
console.log("emptied")
//$('#index').hide();
$('#index').load('personal.html')
console.log("loaded")
});

$('a.pop_network').on('click',function(e) {
$('#index').empty();
console.log("emptied") 
$('#index').load('network.html');
console.log("loaded")
});

$('a.pop_coverLetter').on('click',function(e) {
$('#index').empty();
console.log("emptied") 
$('#index').load('cover_letter.html');
console.log("loaded")
});





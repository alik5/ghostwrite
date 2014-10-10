var xhr = new XMLHttpRequest();
xhr.onreadystatechange= function() {
    if (xhr.readyState!==4) {
    document.getElementById('ajax').innerHTML = xhr.responseText;
		}
	};
	xhr.open('GET', 'business.html');
	function sendAjax() {
	xhr.send();
	document.getElementById('button').style.display = "none";
}
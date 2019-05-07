var ajax = {};
ajax.x = function () {
	if (typeof XMLHttpRequest !== 'undefined') {
		return new XMLHttpRequest();
	}
	var versions = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];
	var xhr;
	for (var i = 0; i < versions.length; i++) {
		try {
			xhr = new ActiveXObject(versions[i]);
			break;
		} catch (e) {}
	}
	return xhr;
};
ajax.send = function (url, callback, method, data, async) {
	if (async === undefined) {
		async = true;
	}
	var x = ajax.x();
	x.open(method, url, async);
	x.onprogress = function () {
		//console.log(x.onprogress);
	};
	x.onLoading = function () {
		//console.log(x.onLoading);
	};
	x.onreadystatechange = function () {
		if (x.readyState == 4) {
			callback(x.responseText)
		} else {
			//console.log(x.readyState);
		}
	};
	if (method == 'POST') {
		x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	}
	x.send(data)
};
ajax.get = function (url, data, callback, async) {
	var query = [];
	for (var key in data) {
		query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};
ajax.post = function (url, data, callback, async) {
	var query = [];
	for (var key in data) {
		query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	}
	ajax.send(url, callback, 'POST', query.join('&'), async)
};

function useData(data) {
	var obj = JSON.parse(data);
	var dataTable = '<table class="table table-striped table-hover" style="font-size: 14px;"><thead><tr><th scope="col">ID</th><th scope="col">Status</th><th scope="col">Title</th><th scope="col">Created</th></tr></thead><tbody>';
	for (i = 0; i < obj.length; i++) {
		dataTable += '<tr style="cursor: pointer;"><th scope="row">' + obj[i].id + '</th><td>' + obj[i].status + '</td><td>' + obj[i].title.rendered + '</td><td>' + obj[i].date + '</td></tr>';
	}
	document.getElementById('main').innerHTML = dataTable + '</tbody></table>';
}

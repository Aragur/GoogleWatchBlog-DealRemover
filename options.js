function save_options() {
	chrome.storage.sync.set({
		hideDeals: document.getElementById('display_hide').checked ? true : false
	}, function() {
		var status = document.getElementById('status');
		status.textContent = '✔ Gespeichert';
		setTimeout(function() {
			status.textContent = ''
		}, 1000);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		hideDeals: false
	}, function(items) {
		document.getElementById('display_hide').checked = items.hideDeals;
		document.getElementById('display_fade').checked = !items.hideDeals;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

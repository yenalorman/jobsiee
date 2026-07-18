(function () {
	var section = document.querySelector('.whatsapp-contact');
	if (!section) return;

	var link = document.getElementById('whatsapp-link');
	var phone = (section.getAttribute('data-phone') || '').replace(/\s+/g, '');
	var message = section.getAttribute('data-message') || 'Hello, I would like to learn more about JobSieve.';

	function buildWhatsAppUrl(rawPhone, text) {
		var normalized = rawPhone.replace(/[^\d]/g, '');
		return 'https://wa.me/' + normalized + '?text=' + encodeURIComponent(text);
	}

	if (!phone) {
		if (link) {
			link.removeAttribute('href');
			link.setAttribute('aria-disabled', 'true');
		}
		return;
	}

	if (link) {
		link.href = buildWhatsAppUrl(phone, message);
	}
})();

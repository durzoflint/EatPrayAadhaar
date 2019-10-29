$(window).on('load', function () {
	setTimeout(function() {
		document.getElementById('card-inner').className = 'flip';
		setTimeout(function() {
			document.getElementById('card').style.display = 'none';
			setTimeout(function() {
				document.getElementById('eat').style.display = 'block';
				document.getElementById('eat').className = 'animated fadeInUp';
				setTimeout(function() {
					document.getElementById('pray').style.display = 'block';
					document.getElementById('pray').className = 'animated fadeInUp';
					setTimeout(function() {
						document.getElementById('aadhaar').style.display = 'block';
						document.getElementById('aadhaar').className = 'animated fadeInUp';
						setTimeout(function() {
							document.getElementById('stamp').style.display = 'inline-block';
							document.getElementById('stamp').className = 'animated fadeInUp';
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 600);
	}, 1000);
})
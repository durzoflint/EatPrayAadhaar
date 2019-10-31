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
							document.getElementById('tagline').style.display = 'block';
							document.getElementById('tagline').className = 'animated fadeInUp';
							document.getElementById('illustration').style.display = 'block';
							document.getElementById('illustration').className = 'animated fadeInUp';
							setTimeout(function() {
								document.getElementById('scroll-down').style.display = 'block';
								document.getElementById('scroll-down').className = 'col-sm-12 text-center animated fadeInUp';
								setTimeout(function() {
									document.getElementById('stuff').style.display = 'block';
									document.getElementById('stuff').className = 'container animated fadeInUp';
								}, 1000);
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 600);
	}, 1000);
})
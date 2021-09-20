let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	const prevBtn = document.getElementById('prev-button');
	const nextBtn = document.getElementById('next-button');
	let l = 0;
	let movePer = 34.15;
	let maxMove = 307.34999999999997;

	if(l=== 0){
		prevBtn.style.opacity= '0';
	} else{
		prevBtn.style.opacity= '1';	
	}

		// laptop_view	
		let laptop_view = window.matchMedia("(max-width: 1280px)");
		if (laptop_view.matches)
		 {
			 movePer = 51.36;
			 maxMove = 513.6;
		 }

		// mini_view	
		let mini_view = window.matchMedia("(max-width: 970px)");
		if (mini_view.matches)
		 {
			 movePer = 52;
			 maxMove = 520;
		 }

		 		// tablet_view	
		let tablet_view = window.matchMedia("(max-width: 768px)");
		if (tablet_view.matches)
		 {
			 movePer = 50.8;
			 maxMove = 508.00000000000006;
		 }

	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 600px)");
	if (mob_view.matches)
	 {
	 	movePer = 100;
	 	maxMove = 1100;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		console.log(l)
		if(l === 0){
			prevBtn.style.opacity= '0';
			prevBtn.style.pointerEvents= 'none';
		} else{
			prevBtn.style.opacity= '1';	
			prevBtn.style.pointerEvents= 'all';

		}
		if(l >= maxMove){
			nextBtn.style.opacity= '0';
			nextBtn.style.pointerEvents= 'none';
		} else{
			nextBtn.style.opacity= '1';
			nextBtn.style.pointerEvents= 'all';

		}
		console.log(l)
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		console.log(l)
		if(l<= 0){
			prevBtn.style.opacity= '0';
			prevBtn.style.pointerEvents= 'none';
		} else{
			prevBtn.style.opacity= '1';	
			prevBtn.style.pointerEvents= 'all'

		}
		if(l<1100){
			nextBtn.style.opacity = '1';
			nextBtn.style.pointerEvents= 'all';

		}
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
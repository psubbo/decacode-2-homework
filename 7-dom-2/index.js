

    //Find all elems where to init slider
    const elements = document.querySelectorAll('[data-slides]');
    //Making an array with elements to init slider
    const dataArr = [].slice.call(elements);
    // initiate slider structure creation in every init element 
    dataArr.forEach(function(elem){
        //Get value of data-slides attribute to define number of sliders
        let data = elem.getAttribute('data-slides');
        let slidesArray = data.split(', ');
        let slider = document.createElement('div');

        slider.classList.add('slider');

        //Navigation buttons build and add to the slider
        let sliderNav = document.createElement('div');
        sliderNav.classList.add('slider-nav');
        let next = document.createElement('div');
        next.classList.add('next');
        next.textContent = 'next';
        let prev = document.createElement('div');
        prev.classList.add('prev');
        prev.textContent= 'prev';
        sliderNav.appendChild(prev);
        sliderNav.appendChild(next);
        
        const slides = [];

        for (var i=0; i < slidesArray.length; i++)
        {
            let slide = document.createElement('div');
            slider.appendChild(slide);
            slide.innerHTML = '<img src="http://lorempixel.com/600/400/abstract/'+(i+1)+'/Slide'+(i+1)+'" alt="Slide'+(i+1)+'">'
            slide.classList.add('slide');
            slide.dataset.key = i; 
            slides.push(slide);
            
        };
       
        slides[0].classList.add('active');
        elem.appendChild(slider);
        slider.appendChild(sliderNav);
        

        window.onload = function(){    
                    
            next.addEventListener('click', () => {moveNext()});
            prev.addEventListener('click', () => {goBack()});

            setInterval(moveNext, 4000);
        };

        function moveNext(){
            let active =  document.querySelector('.active') 
            if (active.dataset.key == slides.length-1) {
                active.classList.remove('active');
                slides[0].classList.add('active');
            }
            else {
            active.classList.remove('active');
            active.nextSibling.classList.add('active');
            }
        };

        function goBack(){
            let active =  document.querySelector('.active') 
            console.log(slides.length - 1);
            if (active.dataset.key == 0) {
                active.classList.remove('active');
                slides[slides.length - 1].classList.add('active');
            }
            else {
            active.classList.remove('active');
            active.previousSibling.classList.add('active');
            }
        }
    })









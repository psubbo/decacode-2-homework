

    const elements = document.querySelectorAll('[data-slides]');
    const dataArr = [].slice.call(elements);    
    dataArr.forEach(function(elem){
        //Получаем строку со слайдами
        let data = elem.getAttribute('data-slides');
        //Разбиваем ее на массив
        let array = data.split(', ');
    
        let main = document.createElement('div');
        
        elem.appendChild(main);
        elem.classList.add('dataSlides');
        main.classList.add('main');
        
        let slider = document.createElement('div');
        
        slider.classList('slider');
        slider.style.width = array.lenght*600 +'px';
        main.appendChild(slider);

        for (var i=0; i < array.length; i++)
        {
        slide.classList.add('page')
        main.appendChild(slide)
        }
    
        var buttonNext = document.createElement("button");
        buttonNext.classList.
        main.appendChild(buttonNext);
    
    })









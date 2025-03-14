let currentIndex = 0;
      let slides = document.querySelectorAll('.slide');
      let totalSlides = slides.length;

      function showSlider(index){
          if(index >= totalSlides){
              currentIndex = 0
          } else if(index < 0){
              currentIndex = totalSlides - 1
          }else{
              currentIndex = index
          }
          document.querySelector('.slider').style.transform = `translateX(-` + (currentIndex * 100) +  `%)`
      }

      function nextSlider(){
          console.log('click on next slider....')
          showSlider(currentIndex + 1)
      }

      function previousSlider(){
          console.log('click on previous slider...')
          showSlider(currentIndex - 1)
      }
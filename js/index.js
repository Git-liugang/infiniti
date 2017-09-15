   var btnNext = document.getElementById("btnNext");
   var music = document.getElementById("music");
   var musicPlay = document.getElementById("musicplay");
   var video1 = document.getElementById("video");
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    //loop: true,
    autoplay:false,
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    btnFn(swiper);
		  } 
  }) 

  
   function btnFn(swiper){
		  if(swiper.activeIndex==0||swiper.activeIndex==11){
		  	btnNext.style.backgroundImage = "url(img/bottom_logo_black.png)";
		  }else{
		  	btnNext.style.backgroundImage = "url(img/bottom_logo.png)";
		  }
   }
  var  switch0 = true;
   music.onclick = function(){
		if(switch0==true){
   			musicPlay.pause();
   			music.src = "img/music_off.png";
   			music.style.animationPlayState = "paused";
			switch0 = false;
		}	
		else if(switch0==false){
			switch0=true;
			musicPlay.play();
   			music.style.animationPlayState = "running";
   			music.src = "img/music_on.png";
		}
   }
   video.onclick = function(){
   		window.open("https://v.qq.com/x/cover/fmvlb0yhhxmr8by.html")
   }


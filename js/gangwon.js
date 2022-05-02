(function($){

   // 객체(Object) 형식의 이벤트
  $('.main-btn').on({
      mouseenter: function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
      },
      focusin: function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
      }
  });


  $('#nav').on({
    mouseleave:function(){
      $('.sub').stop().fadeOut(300);
      $('.main-btn').removeClass('on');
    }
  });



  //메인슬라이드
  let cnt=0;
  
  //1. 메인슬라이드함수
  function mainSlide(){
    $('.slide-wrap').animate({top:-300*cnt},600, function(){
        cnt>2?cnt=0:cnt;  //다음
        cnt<0?cnt=2:cnt;  //이전
      $('.slide-wrap').animate({top:-300*cnt},0);
    });
  }

  //2. 다음카운트함수
  function nextCount(){  //다음슬라이드 : 아래에서 위로
    cnt++;
    mainSlide();
  }
  //2. 이전카운트함수
  function prevCount(){ //이전슬라이드 : 위에서 아래로
    cnt--;
    mainSlide();
  }

  //3. 자동타이머함수
  function autoTimer(){
    //setInterval(nextCount, 3000);  //다음
    setInterval(prevCount, 3000);  //이전
  }
  autoTimer();



  //공지사항 & 갤러리 탭메뉴 클릭 이벤트
  // 갤러리버튼 클릭
  $('.gallery-btn').on({
      click: function(){  //마우스 클릭  그리고 키보드는 엔터(Enter)
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');
      }
  });

  // 공지사항버튼 클릭
  $('.notice-btn').on({
      click: function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');
      }
  });


  // 레이어팝업창 
  $('.link-btn').on({
      click: function(){
        $('#modal').stop().fadeIn(300);
      }
  });


  // 닫기
  $('.close-btn').on({
      click: function(){
        $('#modal').stop().fadeOut(300);
      }
  });


 

})(jQuery);
$(function(){
  let docHeight = $(document).height();
  let winHeight = $(window).height();
  let scTop = $(document).scrollTop();
  let fixClass = $("header");

  // 초기화
  let barInitial = (scTop/(docHeight-winHeight))*100;
  $('.progress_bar').css('width',barInitial+'%')
  // headerFix();

  $('nav li').click(function(){
    let navId = $(this).text();

    $('section').each(function(){
      let secId = $(this).attr('id');
      let secTop = $(this).offset().top;
      if( navId.toLowerCase() == secId ){
        window.scroll({ top: secTop, behavior: 'smooth' });
      }
    })
  })

  // 홈 클릭 시 스크롤 이동
  $('#home').on('click',function(){
    if(!$('html,body').is(':animated')){
      $('html,body').animate( { scrollTop: $('#project').offset().top, behavior: 'smooth' },400,'swing',function(){
        // event.preventDefault();
        window.addEventListener('wheel', (e) => {
          if (e.deltaY != 0 ) {
            $('html,body').stop();
          }
        });
      })
    }
  })

  // 스크롤 진행도
  $(window).scroll(function(){
    docHeight = $(document).height();
    winHeight = $(window).height();
    scTop = $(this).scrollTop();
    // headerFix();
    let bar = (scTop/(docHeight-winHeight))*101.25;
    $('.progress_bar').css('width', bar+'%')
  })

  // 헤더 고정
  // function headerFix(){
  //   if( scTop >= winHeight ){
  //     fixClass.addClass("fixed");
  //   }else{
  //     fixClass.removeClass("fixed");
  //   }
  // }

  $('.percent p').each(function(){
    $(this).css('width',$(this).text())
  })
 });

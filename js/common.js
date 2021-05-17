$(function(){
  // 선언
  let docHeight = $(document).height();
  let winHeight = $(window).height();
  let scTop = $(document).scrollTop();
  let fixClass = $("header");

  // 초기화
  let barInitial = (scTop/(docHeight-winHeight))*100;
  $('.progress_bar').css('width',barInitial+'%')
  headerFix();

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
    if(!$('html').is(':animated')){
      $('html').animate( { scrollTop: $('#about').offset().top, behavior: 'smooth' },400,'swing',function(){
      // $('html, body').animate( { scrollTop: $('#about').offset().top, behavior: 'smooth' },400,'swing',function(){
        // event.preventDefault();
      })
    }
  })

  // 스크롤 진행도
  $(window).scroll(function(){
    docHeight = $(document).height();
    winHeight = $(window).height();
    scTop = $(this).scrollTop();
    headerFix();
    // console.log('진행도: '+(scTop/(docHeight-winHeight))*100+'%')
    let bar = (scTop/(docHeight-winHeight))*101.25;
    $('.progress_bar').css('width', bar+'%')
  })

  // 헤더 고정
  function headerFix(){
    if( scTop >= winHeight ){
      fixClass.addClass("fixed");
    }else{
      fixClass.removeClass("fixed");
    }
  }
 });

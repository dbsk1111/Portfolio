$(function(){
  $(window).scroll(function(){
    let winHeight = $(window).height();
    let scTop = $(this).scrollTop();
    let headerFix = $("header");


    console.log(winHeight);
    console.log(scTop);

    if( scTop > winHeight ){
      headerFix.addClass("fixed");
    }else{
      headerFix.removeClass("fixed");
    }
  });
 });

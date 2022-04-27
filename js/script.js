$(document).ready(function(){

    //네비게이션 메뉴
    $("header .nav_box ul.main>li").mouseenter(function(){
        $(this).find("ul.sub_menu").stop().slideDown();
    });
    $("header .nav_box ul.main>li").mouseleave(function(){
        $(this).find("ul.sub_menu").stop().slideUp();
    });
    
});
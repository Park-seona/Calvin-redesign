$(document).ready(function(){

    //네비게이션 메뉴
    $("header .nav_box ul.main>li").mouseenter(function(){
        $(this).find("ul.sub_menu").stop().fadeIn();
    });
    $("header .nav_box ul.main>li").mouseleave(function(){
        $(this).find("ul.sub_menu").stop().fadeOut();
    });

    //이미지 슬라이드
    $(".slide li").eq(0).siblings().hide();

    var slideI=0;
    setInterval(function(){

        if(slideI<2) {
            slideI++;
        } else {
            slideI=0;
        }
    $(".slide li").eq(slideI).siblings().fadeOut(500);
    $(".slide li").eq(slideI).fadeIn(500);
    },3000);

    //컬렉션 배너
    $(".contents .item1_wrapper .item1 img,.item1_wrapper .item1_box").mouseenter(function(){
        $(".contents .collection_banner .collec_nav .item1_wrapper .item1_box").stop().animate({"bottom":"15px"},280);
    });
    $(".contents .item1_wrapper .item1 img,.item1_wrapper .item1_box").mouseleave(function(){
        $(".contents .collection_banner .collec_nav .item1_wrapper .item1_box").stop().animate({"bottom":"-50px"},280);
    });
    $(".contents .item2_wrapper .item2 img,.item2_wrapper .item2_box").mouseenter(function(){
        $(".contents .collection_banner .collec_nav .item2_wrapper .item2_box").stop().animate({"bottom":"15px"},280);
    });
    $(".contents .item2_wrapper .item2 img,.item2_wrapper .item2_box").mouseleave(function(){
        $(".contents .collection_banner .collec_nav .item2_wrapper .item2_box").stop().animate({"bottom":"-50px"},280);
    });
    
});
$(document).ready(function(){

    //네비게이션 메뉴
    $("header .nav_box ul.main>li").mouseenter(function(){
        $(this).find("ul.sub_menu").stop().fadeIn();
    });
    $("header .nav_box ul.main>li").mouseleave(function(){
        $(this).find("ul.sub_menu").stop().fadeOut();
    });
    
    //뉴배너 스와이퍼
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3, // 한 화면에 보일 슬라이드 개수
        spaceBetween: 20, // 슬라이드 간의 간격 설정
      
        // 화살표 필요 없으니 제거
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // 스크롤바 필요 !
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true, // 지우면 `false` 기본값, 스크롤바 드래그해서 이동 가능
        },
    });

    // //뷰몰배너 스와이퍼 
    // var swiper = new Swiper('.swiper2', {
    //     direction: 'vertical',
    //     slidesPerView: 2, 
    //     slidesperColumn: 2;
    //     spaceBetween: 14,

    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //         draggable: true, // 지우면 `false` 기본값, 스크롤바 드래그해서 이동 가능
    //       },

    // });
    //컬렉션 배너
    $(".contents .item1_wrapper .item1 img,.item1_wrapper .item1_box").mouseenter(function(){
        $(".contents .collection_banner .item1_wrapper .item1_box").stop().animate({"bottom":"15px"},280);
    });
    $(".contents .item1_wrapper .item1 img,.item1_wrapper .item1_box").mouseleave(function(){
        $(".contents .collection_banner .item1_wrapper .item1_box").stop().animate({"bottom":"-50px"},280);
    });
    $(".contents .item2_wrapper .item2 img,.item2_wrapper .item2_box").mouseenter(function(){
        $(".contents .collection_banner .item2_wrapper .item2_box").stop().animate({"bottom":"15px"},280);
    });
    $(".contents .item2_wrapper .item2 img,.item2_wrapper .item2_box").mouseleave(function(){
        $(".contents .collection_banner .item2_wrapper .item2_box").stop().animate({"bottom":"-50px"},280);
    });
    
});
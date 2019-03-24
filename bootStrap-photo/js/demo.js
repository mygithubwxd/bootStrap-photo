// $('#swiper').sliderImg({
//     image: ['./images/banner1.jpg', './images/banner2.jpg', './images/banner3.jpg', './images/banner4.jpg', './images/banner1.jpg']
// })
$(".navigation a").click(function () {

    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top  + "px" }, 500);
    // 参数：（1）target 目标位置（在原来的基础上,对于所有属性值可计算的css属性都可以进行动画操作)
    // （2）duration 变化时间(默认:400，slow:600,fast:200)  
    // （3）easing  过渡效果（方式）  
    // （4）callback 回调函数  可以进一步操作其他css属性

    return false;  //阻止默认事件

});
// $(document).ready(function () {
//     $('#myCarousel').carousel({ interval: 1800 });//每隔5秒自动轮播 
// }); 
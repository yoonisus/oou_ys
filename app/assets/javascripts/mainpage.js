/*global jQuery*/
/*global events*/
/*global TweenMax*/
/*global Expo*/
/*global e*/

(function(){
    var current = 0;
    var max = 0;
    var container;
    var Interval;

    function init(){
        container = jQuery(".main_notice_slider ul");
        max = container.children().length;
        
        console.log("init");
        
        events();
        
    }
    function events(){
        jQuery("button.prev").on("click",prev);
        jQuery("button.next").on("click",next);
        jQuery(window).on("keydown", keydown);
    }
    function prev( e ){
        current--;
        if(current<0) current =max-1;
        animate();
    }
    function next( e ){
        current++;
        if(current>max-1) current =0;
        animate();
    }
    function animate(){
        var moveX = current * 700;
        TweenMax.to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut});
    }
    function keydown(e){
        if(e.which == 39/*right direction key*/ ){
            next();    
        } else if(e.which == 37/*left key*/){
            prev();
        }
    }
    jQuery(document).ready(init);
})();

$(function(){


    //Hassan I use http://jqueryrotate.com/ to do this


    /* +++++++++++++++++++++++++++++++
    *  IMAGE ROTATE without animate
    * +++++++++++++++++++++++++++++++*/


    $("#rotateImage").on( "click", function() {
        var angle = Number($("#angle").val());
        $("#img").rotate(angle);
    });

    /* +++++++++++++++++++++++++++++++
     *  IMAGE ROTATE with animate
     * +++++++++++++++++++++++++++++++*/

    //$("#rotateImage").rotate({bind:{
    //    click: function(){
    //        var angle = Number($("#angle").val());
    //        $("#img").rotate({
    //            angle: 0,
    //            animateTo:angle
    //        })
    //    }
    //}
    //});

});
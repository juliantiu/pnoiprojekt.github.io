$( document ).ready(function() {
    $("#second-half").scroll(function(){
        var currentScroll = $(this).scrollTop();
        var scrollHeight = $("#second-half").height()*6;
        if(currentScroll > scrollHeight*.06 && currentScroll < scrollHeight*.32) {
            $("#youtube").removeClass("hidden");
        }
        else if(currentScroll > scrollHeight*.32 && currentScroll < scrollHeight*.48) {
            $("#youtube").addClass("hidden");
            $("#spotify").removeClass("hidden");
        }
        else if(currentScroll > scrollHeight*.48 && currentScroll < scrollHeight*.64) {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").removeClass("hidden");
        }
        else {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").addClass("hidden");
        }
    });
});
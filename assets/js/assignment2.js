$( document ).ready(function() {
    $("#second-half").scroll(function(){
        var currentScroll = $(this).scrollTop();
        var scrollHeight = $("#second-half").height()*6;
        if(currentScroll > scrollHeight*.0 && currentScroll < scrollHeight*.40) {
            $("#youtube").removeClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").addClass("hidden");
            $("#gmail").addClass("hidden");
            $("#soundcloud").addClass("hidden");
            $("#slack").addClass("hidden");
            $("small").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*.40 && currentScroll < scrollHeight*.73) {
            $("#youtube").addClass("hidden");
            $("#spotify").removeClass("hidden");
            $("#groupme").addClass("hidden");
            $("#gmail").addClass("hidden");
            $("#soundcloud").addClass("hidden");
            $("#slack").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*.73 && currentScroll < scrollHeight*.98) {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").removeClass("hidden");
            $("#gmail").addClass("hidden");
            $("#soundcloud").addClass("hidden");
            $("#slack").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*.98 && currentScroll < scrollHeight*1.26) {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").addClass("hidden");
            $("#gmail").removeClass("hidden");
            $("#soundcloud").addClass("hidden");
            $("#slack").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*1.26 && currentScroll < scrollHeight*1.51) {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").addClass("hidden");
            $("#gmail").addClass("hidden");
            $("#soundcloud").removeClass("hidden");
            $("#slack").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*1.51 && currentScroll < scrollHeight*1.9) {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").addClass("hidden");
            $("#gmail").addClass("hidden");
            $("#soundcloud").addClass("hidden");
            $("#slack").removeClass("hidden");
        }
        else {
            $("#youtube").addClass("hidden");
            $("#spotify").addClass("hidden");
            $("#groupme").addClass("hidden");
            $("#gmail").addClass("hidden");
            $("#soundcloud").addClass("hidden");
            $("#slack").addClass("hidden");
            $("small").removeClass("hidden");
        }
    });
});

function back() {
    window.location.href = './index.html';
}
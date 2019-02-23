$( document ).ready(function() {
    $("#second-half").scroll(function(){
        var currentScroll = $(this).scrollTop();
        var scrollHeight = $("#second-half").height()*4;
        if(currentScroll > scrollHeight*.0 && currentScroll < scrollHeight*.62) {
            $("#same").removeClass("hidden");
            $("#why-same").addClass("hidden");
            $("#diff").addClass("hidden");
            $("#why-diff").addClass("hidden");
            $("small").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*.62 && currentScroll < scrollHeight*.96) {
            $("#same").addClass("hidden");
            $("#why-same").removeClass("hidden");
            $("#diff").addClass("hidden");
            $("#why-diff").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*.96 && currentScroll < scrollHeight*1.29) {
            $("#same").addClass("hidden");
            $("#why-same").addClass("hidden");
            $("#diff").removeClass("hidden");
            $("#why-diff").addClass("hidden");
        }
        else if(currentScroll > scrollHeight*1.29) {
            $("#same").addClass("hidden");
            $("#why-same").addClass("hidden");
            $("#diff").addClass("hidden");
            $("#why-diff").removeClass("hidden");
        }
        else {
            $("#same").addClass("hidden");
            $("#why-same").addClass("hidden");
            $("#diff").addClass("hidden");
            $("#why-diff").addClass("hidden");
            $("small").removeClass("hidden");
        }
    });
});

function back() {
    window.location.href = './index.html';
}
$(document).ready(function () {

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $(".img-jquery").hover(function () {
        $(this).attr("src", function (index, attr) {
            return attr.replace(".svg", "-active.svg");
        });
    }, function () {
        $(this).attr("src", function (index, attr) {
            return attr.replace("-active.svg", ".svg");
        });
    });


    $(".img-bootstrap").hover(function () {
        $(this).attr("src", function (index, attr) {
            return attr.replace(".svg", "-active.svg");
        });
    }, function () {
        $(this).attr("src", function (index, attr) {
            return attr.replace("-active.svg", ".svg");
        });
    });

});

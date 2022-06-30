function slideSwitch() {
        var $active = $('div#slidesh IMG.active');
        var $next = $active.next();

        $next.addClass('active');

        $active.removeClass('active');
    }

    $(function() {
        setInterval( "slideSwitch()", 5000 );
    });
var myIndex = 0;
carousel1();

function carousel1() {
    var i;
    var x = document.getElementsByClassName("myslide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

var a = 0;
document.onmousewheel = function( e ) {
    handleMouseWheelDirection( detectMouseWheelDirection( e ) );
};
if ( window.addEventListener ) {
    document.addEventListener( 'DOMMouseScroll', function( e ) {
        handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });
}
function handleMouseWheelDirection( direction )
{
    console.log( direction ); // see the direction in the console
    if ( direction == 'down' ) {
        a += 1;
        a = a > 120 ? 120 : a;
    } else if ( direction == 'up' ) {
        a -= 1;
        a = a < 0 ? 0 : a;
    }
    document.getElementById('showScroll').innerHTML = a;
}
function detectMouseWheelDirection( e )
{
    var delta = null,
        direction = false;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
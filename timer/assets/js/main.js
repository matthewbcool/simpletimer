var clock;

$(document).ready(function() {

    clock = new FlipClock($('.clock'), 1500, {
    autoStart: false,
    countdown: true,
    clockFace: 'MinuteCounter',
    callbacks: {
        stop: function() {
            //howl
        }
    }
});

$('.start-btn').click(function(){
    clock.start();
});

$('.increment').click(function(){
    clock.increment();
});

$('.reset-btn').click(function() {
    clock.reset();
});

});    



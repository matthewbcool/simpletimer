var clock;
var time = 25;

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

var timerSound = new Howl({
    src: ['assets/timerup.mp3']
  });


$('.increment').click(function(){
    time += 1;
    $('.time-input').val(time);
});

$('.decrement').click(function(){
    if (time === 0) {
        time = 0;
        $('.time-input').val(time);
    } else {
        time -= 1;
        $('.time-input').val(time);
    }
});


$('.start-btn').click(function(){
    $('.clock').empty();
    time = $('.time-input').val();
    clock = new FlipClock($('.clock'), time*60, {
        autoStart: false,
        countdown: true,
        clockFace: 'MinuteCounter',
        callbacks: {
            stop: function() {
                timerSound.play();
            }
        }
    });
    clock.start();
});


$('.reset-btn').click(function() {
    // reset fails to clearInterval...  have to find a way
    $('.clock').empty();
    clock = new FlipClock($('.clock'), 1500, {
        autoStart: false,
        countdown: true,
        clockFace: 'MinuteCounter',
        callbacks: {
            stop: function() {
                timerSound.play();
            }
        }
    });

});

});    



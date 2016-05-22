(function($) {
        "use strict";




        var lla;  //low latency audio
        var theme1 = 'sound/background/theme1.wav';
        var theme1 = 'sound/background/theme2.wav';
        var preloadAudio = function(){
            // https://github.com/floatinghotpot/cordova-plugin-nativeaudio/blob/89fa228/README.md
            lla = window.plugins.LowLatencyAudio;
            lla.preloadAudio( theme1, theme1, 1, function(msg){
            }, function(msg){
                console.log( 'error: ' + msg );
            });
            lla.preloadAudio( theme2, theme2, 1, function(msg){
            }, function(msg){
                console.log( 'error: ' + msg );
            });
        };
        var playMusic = function(){
            lla.loop(theme1);
            window.setTimeout( function(){
                lla.stop(theme1);
            }, 1000 * 60 );
        };




        $( document ).on( "ready", function(){
            $('#playbutton').on('click', playMusic);
        });

        $( document ).on( "deviceready", function(){
            StatusBar.overlaysWebView( false );
            StatusBar.backgroundColorByName("gray");
            preloadAudio();
        });

}
)(jQuery);


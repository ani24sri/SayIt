console.log('This would be the main JS file.');

              $(document).ready(function ()
                               {
                 $('#banner').append(new Date().getFullYear().toString()); 
              });

   $( function() {
    $( "#intro" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        
        effect: "explode",
        duration: 1000
      }
    }).on('close',function(e){
   var player = videojs('my-video');
VideoJS.DOMReady(function(){
  player.pause();  
});
        });
    $( "#vid" ).on( "click", function() {
      $( "#intro" ).dialog( "open" );
    });
  } );

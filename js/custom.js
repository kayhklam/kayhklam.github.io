$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '10983788711',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '10983788711.1677ed0.045fc628888443fa886dd783a4322315',
        sortBy: 'most-recent',
        template: '<div class="row-lg-1 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
add_comma = function(elem_selector){
    var elem_children = $(elem_selector).children();
    elem_children.each(function(){
        var child = $(this);
        if (child.next().length > 0) {
            child.html(child.html() + ',');
        }
    });
};

$(document).ready(function(){
    add_comma("ul.comma_separated");
    /* Twitter Widget */
    new TWTR.Widget({
        profile: true,
        id: 'twtr-profile-widget',
        loop: true,
        width: 200,
        height: 300,
        theme: {
            shell: {
                background: '#3082af',
                color: '#ffffff'
            },
            tweets: {
                background: '#ffffff',
                color: '#444444',
                links: '#1985b5'
            }
        }
    }).render().setProfile('eller86').start();
});


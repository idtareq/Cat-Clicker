$(function  () {
        
var model = {
    cats : [
    ['Scaredy','https://i.imgur.com/dQX78lP.jpg',0],
    ['Shadow', 'https://i.imgur.com/2NwiW2p.jpg',0],
    ['Sleepy', 'https://i.imgur.com/hkfP9Cm.jpg',0],
    ['Tabby',  'https://i.imgur.com/ICFPHbc.jpg',0],
    ['Tiger',  'https://i.imgur.com/kp9U5N2.jpg',0],
    ],
    current_cat_index : 0,
    get_current_cat : function(){
        return this.cats[this.current_cat_index];
    },
    set_current_cat : function(index){
        this.current_cat_index=index;
    },
    increase_current_cat_click_counter_by_one : function () {
        this.cats[this.current_cat_index][2]+=1;
    }

};

var octopus = {
    init : function () {
        view.init();
        view.render_menu(model.cats);
        this.set_cat(0);
    },
    set_cat : function (index) {
        model.set_current_cat(index);
        view.render_cat(model.get_current_cat());
    },
    click_cat : function () {
        model.increase_current_cat_click_counter_by_one();
    },
    get_cat_src : function () {
        return model.get_current_cat()[1];
    }
};

var view = {
    init : function () {
        var img = $("#Main img");
        var clicks = $("#Main p");
        img.click(function(e){
            octopus.click_cat();
            clicks.text(parseInt(clicks.text())+1);

            var box = $("body");
            var x = e.pageX;
            var y = e.pageY;
            var clickY = y - box.offset().top;
            var clickX = x - box.offset().left;
            
               
            var setX = parseInt(clickX);
            var setY = parseInt(clickY);
            //box.find("svg").remove();
            box.append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="'+0+'"></circle></svg>');
               
            var c = box.find("circle");
            c.animate(
              {
                "r" : box.outerWidth()
              },
              {
                easing: "easeOutQuad",
                duration: 100,
                step : function(val){
                          c.attr("r", val/8);
                },
                complete:  function() { box.find("svg").remove(); }
              }
            );
        });

    },
    render_menu : function (data) {
        var menu = $('#LeftSide');
        for (var i = 0; i < data.length; i++) {
            var li=$(document.createElement('li'));
            li.html( '<a href="#">' + data[i][0] + '</a>');
            li.click(

            function(copy_i) {
                return function(){
                    $.sidr('close');
                    var img = $(".imagecontainer img");
                    img.fadeOut("300",function () {
                        var newimg = new Image();
                        $(newimg).on("load",function() {
                            img.attr('src',octopus.get_cat_src());
                            img.fadeIn("300");
                            newimg.remove();
                        }).attr('src', octopus.get_cat_src());
                    });
                    octopus.set_cat(copy_i);
                };
            }(i)

            );
            menu.append(li);
        };
    },
    render_cat : function (data) {
        var catname = $("#catName");
        catname.text(data[0]);
        var clicks = $("#Main p");
        clicks.text(data[2]);
    }
}

octopus.init();
});
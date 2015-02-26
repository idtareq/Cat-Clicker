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
    },
    udpate_current_cat : function (data) {
        this.cats[this.current_cat_index][0]=data[0];
        this.cats[this.current_cat_index][1]=data[1];
        this.cats[this.current_cat_index][2]=data[2];
    }

};

var octopus = {
    init : function () {
        view.init();
        view.render_menu(model.cats);
        this.set_cat(0);
    },
    set_cat : function (index) {
        if (typeof index!=='undefined')
            model.set_current_cat(index);
        view.render_cat(model.get_current_cat());
    },
    click_cat : function () {
        model.increase_current_cat_click_counter_by_one();
    },
    get_cat_src : function () {
        return model.get_current_cat()[1];
    },
    click_admin : function () {
        view.render_admin(model.get_current_cat());
    },
    admin_save : function (data) {
        if (isNaN(parseInt(data[2]))) data[2]=0; else data[2]=parseInt(data[2]);
        model.udpate_current_cat(data);
        view.render_menu(model.cats);
    }
};

var view = {
    init : function () {
        /// Image clicks and Ripple effect
        var img = $("#Main img");
        var clicks = $("#Main p");
        img.click(function(e){
            octopus.click_cat();
            clicks.text(parseInt(clicks.text())+1);
            var box = $("body");
            var x = e.pageX; var y = e.pageY;
            var clickY = y - box.offset().top; var clickX = x - box.offset().left;
            var setX = parseInt(clickX); var setY = parseInt(clickY);
            box.append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="'+0+'"></circle></svg>');
            var c = box.find("circle");
            c.animate({"r" : box.outerWidth()}, {easing: "easeOutQuad",duration: 100,
                step : function(val){
                          c.attr("r", val/8);
                },
                complete:  function() { box.find("svg").remove(); }});
        });

        /// ADMIN 
        var admin = $("#admin_button");
        admin.click(function(event) {
            octopus.click_admin();
        });
        $('#save').click(function(event) {
            var data=[];
            data[0]= $('#admin input:nth(0)').val();
            data[1]= $('#admin input:nth(1)').val();
            data[2]= $('#admin input:nth(2)').val();
            octopus.admin_save(data);
            octopus.set_cat();
        });
        $('#cancel').click(function(event) {
          $('#admin').toggle("700");
        });

    },
    render_admin :function (data) {
        $('#admin input:nth(0)').val(data[0]);
        $('#admin input:nth(1)').val(data[1]);
        $('#admin input:nth(2)').val(data[2]);
        $('#admin').show("700");
    },
    render_menu : function (data) {
        $('#LeftSide li').remove();
        var menu = $('#LeftSide');
        for (var i = 0; i < data.length; i++) {
            var li=$(document.createElement('li'));
            li.html( '<a data="' + i +'" href="#">' + data[i][0] + '</a>');
            li.click(

            function(copy_i) {
                return function(){
                    $.sidr('close');
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

        var img = $(".imagecontainer img");
        img.fadeOut("300",function () {
            var newimg = new Image();
            $(newimg).on("load",function() {
                img.attr('src',octopus.get_cat_src());
                img.fadeIn("300");
                newimg.remove();
            }).attr('src', octopus.get_cat_src());
        });
        $('#admin').hide("700");

    }
}

octopus.init();
});
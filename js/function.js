$('document').ready(function(){
    $('.prevent').on('click',function(e){
        e.preventDefault();
    });
    $('.link').on('click',function(){
        var link = $(this).attr('data-link');
        document.location.href = link;
    });
    //漢堡選單開合menu
    $('#tag,#tagShow,#menu-toggle').on('click', function (e) {
        e.preventDefault();
        $("#menu-toggle").toggleClass("change");
        $('.right_ul').toggleClass("menu_show");
    });
    //認識DPNP的slider

});

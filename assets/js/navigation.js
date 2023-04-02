$(".menu").on("click", function(){
    $("#top_menu .menu").removeClass('active');
    $(this).addClass('active');
   window.location.href = this.id+'.html'; 
});

$("#open_serivice").on("click", function(){
   $("#services").trigger('click');
});

// $("#top_menu_bar").on("click", function(){
//    $("#top_menu").toggle("display", "block");
// });

$("#top_menu_bar").click(function(){
  $("#top_menu").toggle();
});

$("#features .effect").on('click', function(){
     console.log(this.id);
    if(this.id != 'service_menu'){
        $(".page").addClass('hide');
        $("#"+this.id+"_page").removeClass('hide');  
    }
});

$("#service_menu .close_service").on('click', function(){
  $(".page").addClass('hide');
});

$("#service_menu .page").on('click', function(){
  $(".page").addClass('hide');
});

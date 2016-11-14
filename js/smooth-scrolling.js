$(document).ready(function(){  
    $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 

        $("ul.nav li").removeClass("active");
        $(this).parent().addClass("active") 
    });   


});

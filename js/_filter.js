filterSelection(jQuery(".section").first().data("type"))
function filterSelection(c) {
    jQuery(".section").each(function (){
        if (jQuery(this).data("type") == c) {
            jQuery(this).removeClass("hidden");
        } 
        
        else {
            jQuery(this).addClass("hidden");
        }
    });
}



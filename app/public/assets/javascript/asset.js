$("#submit-button").on("click", function(event){
    event.preventDefault();
    
    location.href = "mailto:bshankar12@comcast.net?subject=" + $("#subject").val() + "&body=" + $("#form-textarea").val() + "";
    
    $("#name").val("");
    $("#subject").val("");
    $("#email").val("");
    $("#form-textarea").val("");
})
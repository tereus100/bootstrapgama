function showAlert(){
    if($("#myAlert").find("div#myAlert2").length==0){
      $("#myAlert").append("<div class='alert alert-success' id='myAlert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> Login realizado com sucesso.</div>");
    }
    $("#myAlert").css("display", "");
  }

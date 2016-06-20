(function () {


    function resetForm(){
        document.getElementById('txtID').value='';
        document.getElementById('txtName').value='';
        document.getElementById('txtMedName').value='';
        document.getElementById('txtQtd').value=''; 
        document.getElementById('timebtwn').value='';         
    }

    function addMedication(event) {
        event.preventDefault();
        var medication = {
            ID: $("#txtID").val(),
            Name: $("#txtName").val(),
            MedName: $("#txtMedName").val(),
            Qtde: $("#txtQtd").val(),
            Select: $("#select option:selected").text(),
            Time: $("#timebtwn").val()
        };
        medicationService.addMedication(medication);
        resetForm();
        $("#alert-registration").removeClass("hide");
        $('#alert-registration').fadeIn( 300 ).delay( 2000 ).fadeOut( 400 );
        
    }

    function addListener() {
        var btn = document.getElementById("btnAdd");
        btn.addEventListener('click', addMedication);
    }

    addListener();

})();
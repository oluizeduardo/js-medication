(function () {

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
        alert("Novo medicamento registrado!");
    }

    function addListener() {
        var btn = document.getElementById("btnAdd");
        btn.addEventListener('click', addMedication);
    }

    addListener();

})();
(function () {
    $("#tblList").html("");
    $("#tblList").html(
        "<thead>" +
        "<tr>" +
        "<th>ID</th>" +
        "<th>Nome do Idoso</th>" +
        "<th>Nome do Medicamento</th>" +
        "<th>Quantidade</th>" +
        "<th>Dosagem</th>" +
        "<th>Intervalo de Horário</th>" +
        "<th>Ações</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );

    medicationService.getMedications().forEach(writeDocument);

    function writeDocument(med, i) {
        $("#tblList tbody").append("<tr>" +
            "<td>" + med.ID + "</td>" +
            "<td>" + med.Name + "</td>" +
            "<td>" + med.MedName + "</td>" +
            "<td>" + med.Qtde + "</td>" +
            "<td>" + med.Select + "</td>" +
            "<td>" + med.Time + "</td>" +
            "<td><img src='imgs/edit.png' alt='Edit" + i + 
            "' class='btnEdit' id='myModal' data-toggle='modal' data-target='.bd-example-modal-lg'/>&nbsp &nbsp<img src='imgs/delete.png' alt='Delete" + i + 
            "' class='btnDelete'/></td></tr>");
    }

    $(".btnDelete").bind("click", function () {
        var selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
        deleteItem(selected_index);
    });

    function deleteItem(selected_index) {
        var medicationList = medicationService.getMedications();        
        medicationList.splice(selected_index, 1);
        window.localStorage.setItem("medication", JSON.stringify(medicationList));                 
        alert('Registro apagado!!');
        window.location.reload();      
    }  
    
    var selected_index = -1;
    
    $(".btnEdit").bind("click", function () {      
        selected_index = parseInt($(this).attr("alt").replace("Edit", ""));      
        var medicationList = medicationService.getMedications();        
        var med = medicationList[selected_index]; 
                
        $("#txtID").val(med.ID);
        $("#txtName").val(med.Name);
        $("#txtQtd").val(med.Qtde);
        $("#select").val(med.Select);
        $("#txtMedName").val(med.MedName);
        $("#timebtwn").val(med.Time);        
        $("#select option:contains('"+med.Select+"')").attr('selected',true);
    });
    
    
    function updateMedication(event){
        event.preventDefault();
        var medication = {
            ID: $("#txtID").val(),
            Name: $("#txtName").val(),
            MedName: $("#txtMedName").val(),
            Qtde: $("#txtQtd").val(),
            Select: $("#select option:selected").text(),
            Time: $("#timebtwn").val()
        };
        medicationService.updateMedication(medication, selected_index); 
        $('#myModal').modal('hide');            
    }
    
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }
    
    
    function addListener() {
        var btn = document.getElementById("btnAdd");
        btn.addEventListener('click', updateMedication);                      
    }

    addListener();
    
})();

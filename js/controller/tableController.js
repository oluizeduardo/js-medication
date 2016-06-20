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
        "<th>Intervalo de Tempo</th>" +
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
            "<td><img src='imgs/edit.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='imgs/delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
            "</tr>");
    }
    
})();
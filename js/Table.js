
var Tabela = (function () {
    
    function listMedication(){
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
                "</tr>" +
                "</thead>" +
                "<tbody>" +
                "</tbody>"
                );
               
        /*for (var i in tblMedication) {
            var med = JSON.parse(tblMedication[i]);
            $("#tblList tbody").append("<tr>" +                    
                    "<td>" + med.ID + "</td>" +
                    "<td>" + med.Name + "</td>" +
                    "<td>" + med.MedName + "</td>" +
                    "<td>" + med.Qtde + "</td>" +      
                    "<td>" + med.Select + "</td>" +  
                    "<td>" + med.Time + "</td>" +                
                    "<td><img src='edit.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
                    "</tr>" );
        }*/
    }


    listMedication();

})();
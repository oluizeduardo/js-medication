var Functions = (function () {
    
    // Try serch for datas on the local storage.
    var tblMedication = localStorage.getItem("tblMedication");
    // It converts from String to Object.
    tblMedication = JSON.parse(tblMedication); 
    // If the list is empty, it initializes this list.
    if (tblMedication === null){
        tblMedication = [];
    } 

    function gettblMedication(){
        return tblMedication;
    }



    function addMedication(event) {
        event.preventDefault();
        var medication = JSON.stringify({
        ID: $("#txtID").val(),
        Name: $("#txtName").val(),
        MedName: $("#txtMedName").val(),
        Qtde: $("#txtQtd").val(),
        Select: $("#select").val(),
        Time: $("#timebtwn").val()
        }); 
        
        tblMedication.push(medication);
        localStorage.setItem("tblMedication", JSON.stringify(tblMedication));
        alert("Novo medicamento registrado!"); 
        return true;
    }



    function addListener(){
        var btn = document.getElementById("btnAdd");
        btn.addEventListener("click", addMedication);
    }

    

    addListener();
    
})();
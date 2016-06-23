var chartService = (function () {
    
     // var visualization = new google.charts.load('current', {'packages':['bar']});
      //visualization.google.charts.setOnLoadCallback(drawChart); 
      
      function drawChart() { 
   
        var data = google.visualization.arrayToDataTable([
         ['Remédio', 'Quantidade' ],
         ['Novalgina', 8.94 ],
         ['Anador', 10.49 ],
         ['Magnopirol', 19.30 ],
         ['Multigripe', 21.45 ]
      ]);

        var options = {
          chart: {
            title: 'Relação da Quantidade de Remédios Tomados',
            subtitle: 'O número em cada título representa a quantidade de pessoas que o consome',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, options);
        
        console.log('Chegou aqui!!');
      }
    
      //var visualization = new google.setOnLoadCallback(drawChart);
      
      
      function chartValuesAdapter() {
          var medicationList = medicationService.getMedications();
          var listValues = [];
          listValues = medicationList;
          
      }
      
        
    chartValuesAdapter();
})();
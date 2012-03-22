$(function(){
  $('#shoe_list').kendoListView({
    template: kendo.template($('#shoe_template').html()),
    dataSource: {
      data: [{
        name: 'Vibram Five Fingers',
        currentMileage: 400,
        maxMileage: 500
      }, 
      {
        name: 'Nike Free',
        currentMileage: 150,
        maxMileage: 350
      }, 
      {
        name: 'Saucony Series 7',
        currentMileage: 225,
        maxMileage: 300
      }]
    }
  });

  $('.gauge').each(function() {
    var mileage = $(this).data('mileage'),
        maxMileage = $(this).data('max');

    $(this).kendoGauge({
      theme: "blueopal", 

      pointer: {
        value: mileage
      },

      scale: {
        majorUnit: maxMileage/5,
        minorUnit: maxMileage/50,
        startAngle: 0,
        endAngle: 90,
        max: maxMileage,

        ranges: [
          {
            from: 0,
            to: maxMileage*.70,
            color: "#00ab00" // green
          }, {
            from: maxMileage*.70,
            to: maxMileage*.90,
            color: "#d3ce37" // yellow
          }, {
            from: maxMileage*.90,
            to: maxMileage,
            color: "#ae130f" // red
          }
        ]
      }
    });
  });
});
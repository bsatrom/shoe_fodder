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
    $(this).kendoGauge({
      theme: "blueopal",

      pointer: {
        value: 0
      },

      scale: {
        majorUnit: 50,
        minorUnit: 10,
        startAngle: 0,
        endAngle: 90,
        max: 400,

        ranges: [
          {
            from: 0,
            to: 300,
            color: "#00ab00"
          }, {
            from: 300,
            to: 350,
            color: "#d3ce37"
          }, {
            from: 350,
            to: 400,
            color: "#ae130f"
          }
        ]
      }
    });
  });
});
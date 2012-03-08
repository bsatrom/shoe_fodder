$(function(){
  $('.gauge').kendoGauge({
    theme: "blueopal",

    pointer: {
      value: $('.currentMileage').text()
    },

    scale: {
      majorUnit: 50,
      minorUnit: 10,
      startAngle: 0,
      endAngle: 90,
      max: 350
    }
  });
});
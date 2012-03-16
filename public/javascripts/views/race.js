$(function() {
  var gauge,
  funds = new kendo.data.DataSource({
    data: [{
      name: 'Hurke Bolland',
      donation: 300,
      avatar: '/img/people/hurkeBolland.jpg'
    }, 
    {
      name: 'Burke Holland',
      donation: 25,
      avatar: '/img/people/hurkeBolland.jpg'
    }, 
    {
      name: 'Brandon Satrom',
      donation: 15,
      avatar: '/img/people/bsatrom-house.jpg'
    }],
    pageSize: 4
  });

	gauge = $('#fundraising_guage').kendoGauge({
      theme: "blueopal",

      scale: {
        majorUnit: 500,
        minorUnit: 100,
        startAngle: 0,
        endAngle: 180,
        max: 5000,
        
        labels: {
          format: "{0:c0}"
        },

        ranges: [
          {
            from: 4000,
            to: 5000,
            color: "#00ab00"
          }, {
            from: 3000,
            to: 4000,
            color: "#d3ce37"
          }, {
            from: 0,
            to: 3000,
            color: "#ae130f"
          }
        ]
      }
  }).data('kendoGauge');

  $("#fundraising_pager").kendoPager({
      dataSource: funds
  });

  $('#fundraising_list').kendoListView({
    template: kendo.template($('#fundraising_template').html()),
    dataSource: funds
  });

  funds.bind('change', function() {
    var funds = this.data(),
        total = 0;

    $.each(funds, function() {
      total += this.donation;
    });
      
    gauge.value(total);
  });

  var timer = setInterval(function() {
    funder = { name: 'John Bristowe', donation: 35, avatar: '/img/people/bristowe.jpg' };

    funds.insert(0, funder);
  }, 1000);
});
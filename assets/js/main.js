(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // Nice-select
  $('select').niceSelect();

  //  owlCarousel
  $(".plan-slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 2,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

  //  owlCarousel
  $(".new-slider").owlCarousel({
    loop: true, 
    items: 1, 
    dots: true, 
  });

  //  owlCarousel
  $(".rimgsld").owlCarousel({
    loop: true, 
    items: 3,
    margin:15,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    nav: true, 
    dots: false, 
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  //  owlCarousel
  $(".rimgsld2").owlCarousel({
    loop: true, 
    items: 4, 
    dots: true, 
    margin:15,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  //  owlCarousel
  $(".resurse-slider").owlCarousel({
    loop: true, 
    items: 4, 
    dots: true, 
    margin:15,
    navText: [
      '<i class="far fa-angle-left"></i>',
      '<i class="far fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  //  owlCarousel
  $(".user-slider").owlCarousel({
    loop: false,
    margin: 10,
    items: 7,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items:3
      },
      767: {
        items: 5
      },
      992: {
        items: 6
      }
    }
  });

  //  owlCarousel
  $(".all-blocks").owlCarousel({
    loop: false,
    margin: 30,
    items: 4,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  //  owlCarousel
  $(".all-blocks-big").owlCarousel({
    loop: false,
    margin: 30,
    items: 4,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  
  //  owlCarousel
  $(".meteg-sld").owlCarousel({
    loop: true, 
    margin: 30,
    items: 2,
    navText: [
      '<i class="far fa-long-arrow-alt-left"></i>',
      '<i class="far fa-long-arrow-alt-right"></i>'
    ],
    stagePadding: 150,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });
  
  // Calendeer
  $(document).ready(function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#external-events div.external-event').each(function() {

        // create an Event Object (https://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    var calendar =  $('#calendar').fullCalendar({
        header: {
            left: 'title',
            center: 'agendaDay,agendaWeek,month',
            right: 'prev,next today'
        },
        editable: true,
        firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
        selectable: true,
        defaultView: 'month',

        axisFormat: 'h:mm',
        columnFormat: {
            month: 'ddd',    // Mon
            week: 'ddd d', // Mon 7
            day: 'dddd M/d',  // Monday 9/7
            agendaDay: 'dddd d'
        },
        titleFormat: {
            month: 'MMMM yyyy', // September 2009
            week: "MMMM yyyy", // September 2009
            day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
        },
        allDaySlot: false,
        selectHelper: true,
        select: function(start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (https://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },

        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false,
                className: 'info'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false,
                className: 'info'
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                className: 'important'
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                className: 'important'
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false,
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'https://google.com/',
                className: 'success'
            }
        ],
    });


  }); 

  // Circle Progress JS 
  $(".circle_percent").each(function() {
      var $this = $(this),
      $dataV = $this.data("percent"),
      $dataDeg = $dataV * 3.6,
      $round = $this.find(".round_per");
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
      $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
      $this.prop('Counter', 0).animate({Counter: $dataV},
    {
      duration: 2000, 
      easing: 'swing', 
      step: function (now) {
              $this.find(".percent_text").text(Math.ceil(now)+"%");
          }
      });
    if($dataV >= 51){
      $round.css("transform", "rotate(" + 360 + "deg)");
      setTimeout(function(){
        $this.addClass("percent_more");
      },1000);
      setTimeout(function(){
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      },1000);
    } 
  });

  // Ranges
  $(".slider")
    .slider({
        max: 30
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
  });


  // Chart
  Highcharts.chart('chartOne', {
      chart: {
          type: 'spline'
      },
      title: {
          text: ' '
      },
      subtitle: {
          text: ' '
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
          text: ' '
          } 
      },
      tooltip: {
          crosshairs: false,
          shared: false
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 3,
                  lineColor: '#BDDAF5',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: ' ',
          marker: {
          symbol: 'round' },
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
          y: 26.5, 
          }, 23.3, 18.3, 13.9, 9.6]

      }, {
          name: ' ',
          marker: {
          symbol: 'round'},
          data: [{
          y: 3.9, 
          }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
  });
  Highcharts.chart('chartOne2', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ' '
    }, 
    xAxis: {
        categories: [
        'Text',
        'Text',
        'Text',
        'Text',
        'Text',
        ] 
    },
    yAxis: {
        title: {
        text: ' '
        }
    }, 
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
        fillOpacity: 0.5
        }
    },
    series: [ {
        name: ' ',
        data: [3, 5, 1, 6, 8]
    }]
  });
 
 
})(jQuery);

$(document).ready(function() {

  var network = {
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  };

  var toggleOptions = function(event) {
    ( event && event.preventDefault ) && event.preventDefault();
    $('.menu_line_level').toggle();
  };

  var displayStationDropdown = function(event) {
    event.stopPropagation();
    var $this = $(this);
    var selected_line = network[this.id];
    console.log('I clicked ' + this.id);
    // console.log(selected_line);
    var $ul = $('<ul>');
    $ul.attr('class', 'menu_station_level');
    elem.append($ul);


    $.each(selected_line, function(key, value) {
      var $li = $('<li>');
      $li.attr('class', 'station_options');
      $li.attr('id', value);
      $li.text(value);
      $li.appendTo($ul);
    });
  };

  var displayLineDropdown = function(event) {
    event.stopPropagation();
    var $this = $(this);
    // console.log('displaying dropdown for ' + elem[0].id);
    for (var key in network) {
      // console.log(key);
      var $li = $('<li>');
      $li.text(key);
      $li.attr('class', 'line_options');
      $li.attr('id', key);
      $li.appendTo(elem);
      $('.line_options').on('click', toggleOptions);
    };
    
  };

  $('#start_select').on('click', displayLineDropdown);
  $('#stop_select').on('click', togglex);

  

});








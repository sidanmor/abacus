var updateLimits = function() {
  var td, left, right, prevIndex, nextIndex, prevTD, nextTD;
  for (var index = 1; index <= 70; index++) {
    left = 10;
    right = 373;
    prevIndex = index - 1;
    nextIndex = index + 1;
    if (prevIndex % 10 !== 0) {
      prevTD = $("#td" + prevIndex);
      left = prevTD.position().left + 17;
    }
    if (nextIndex % 10 !== 1) {
      nextTD = $("#td" + nextIndex);
      right = nextTD.position().left - 17;
    }
    $("#td" + index).draggable({
      axis: 'x',
      containment: [left, 0, right, 0],
      cursor: 'move',
      stop: function(event, ui) {
        updateLimits();
      }
    });
  }
};

updateLimits();

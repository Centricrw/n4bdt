
$(document).ready(function(){
  
  $('.widget-tab').click(function() {
    alert("clicked");
    switchTabs($(this));
  });
});


// 
function switchTabs(that) {
  var parent = that.parent();
  var grandparent = parent.parent();
  var showSegment = that.attr('data-tab') + '-seg';
  
  // remove selected class from tabs and add it to the current tab
  parent.find('.selected').removeClass('selected');
  that.addClass('selected');
  
  // display selected segment
  grandparent.find('.visible').removeClass('visible');
  console.log(grandparent.find('[data-tab=' + showSegment + ']'));
  grandparent.find('[data-tab=' + showSegment + ']').addClass('visible');
}// end switchTabs(that)
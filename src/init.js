$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    let defaultNode = $('<span class="dancer"><img class="dolphin" src="http://rs276.pbsrc.com/albums/kk28/mnstrkpixels/disney%20pixels/the%20little%20mermaid/cutefish.gif~c200" /></span>');

    var dancer = new dancerMakerFunction(
      ($('body').height() * Math.random() - 100),
      ($('body').width() * Math.random() - 100),
      (1000 + Math.random() * 1000),
      defaultNode
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node); 
  });

  $('#lineup').on('click', function() {
    window.dancers.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    window.dancers.forEach(function(dancer, i) {
      dancer.lineup(i);
    });
  });

  $('#dance').on('click', function() {
    window.dancers.forEach(function(dancer) {
      dancer.step();
    });
  });
});


	$( ".next" ).click(function() {
        $( "#nor5" ).hide();
        $( "#nor4" ).hide();
        $( "#nor3" ).hide();
		$( "#nor2" ).hide();
	  $( "#nor1" ).show("slow");
    })
    $( ".prevLeftSecond" ).click(function() {
        $( "#nor5" ).hide();
        $( "#nor3" ).hide();
        $( "#nor2" ).hide();
        $( "#nor1" ).hide();
	  $( "#nor4" ).show("slow");
    })
    $( ".hideLeft" ).click(function() {
        $( "#nor5" ).hide();
        $( "#nor4" ).hide();
        $( "#nor2" ).hide();
        $( "#nor1" ).hide();
	  $( "#nor3" ).show("slow");
    })
    $( ".selected" ).click(function() {
        $( "#nor4" ).hide();
        $( "#nor3" ).hide();
        $( "#nor2" ).hide();
        $( "#nor1" ).hide();
	  $( "#nor5" ).show("slow");
	})
	$( ".prev" ).click(function() {
        $( "#nor5" ).hide();
        $( "#nor4" ).hide();
        $( "#nor3" ).hide();
		$( "#nor1" ).hide();
      $( "#nor2" ).show("slow");
      
	});
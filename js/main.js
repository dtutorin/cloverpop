/**
 * Created by D.Tutorin on 01/03/17
 */
jQuery(function(){
    var $decision = $(".mod-decision-backlog"),
        $clsBtn = $(".remove-tile");

    $decision.on( 'click', function(event){

        var $target = $(event.target),
            $par =  $target.parent();

        if ($target.is($clsBtn)){
            $par.toggle();
        }

    });
});
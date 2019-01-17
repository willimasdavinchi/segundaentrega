$( document ).ready(function() {
	$(window).width(function(){
		if ($(window).width() <= 990) {  
			$("source").attr("src","assets/video/background_mobile.mp4");
		}     

	});

	/* PREGUNTAR COMO HACER QUE 0SE EJECUTE UNO POR VEZ */
	$(document).on('scroll', function(){
		$('.hidden').each(function(){
			if(isScrolledIntoView($(this))){
        var _this = this
			  setTimeout(function() {
          $(_this).removeClass('hidden').addClass("visible");
        }, 250);
        
			}
		});
    $('.hidden2').each(function(){
      if(isScrolledIntoView($(this))){
        var _this = this
        setTimeout(function() {
          $(_this).removeClass('hidden').addClass("visible");
        }, 500);
        
      }
    });
	});
	$(function(){
		$(".introheader__expandbutton").on("click", function(){
			var muted = $("video").prop("muted");
			$("video").prop("muted", muted==false);
			$(".fa-expand").toggleClass("fa-compress");
			$(".introheader__control").toggleClass("introheader__control--active");
			$(".introheader__controlvideo").toggleClass("introheader__controlvideo--active");

			$("body").toggleClass("body--active");
			$(".introheader").toggleClass("introheader--active");
			$(".introheader__text").toggleClass("introheader__text--active");
			$(".background__video").toggleClass("background__video--active");
		})

	});

	$(".main__button").mouseover(function() {
		$("img", this).addClass("main__buttonimg--active");
		$(".main__buttontext", this).addClass("main__buttontext--active");
	}).mouseout(function() {
		$(".main__buttontext").removeClass("main__buttontext--active");
		$("img").removeClass("main__buttonimg--active");
	});

	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

$(function(){
    $(".boton_publicar").on("click", function(){
      var comentario = $.trim($("#textcomment").val());
            if(comentario == ""){
                alert("No se va a publicar nada");
      }
      var $newtwit = $(".comment_mockup.hidde").clone()
      $($newtwit).removeClass("hidde")
      $($newtwit).find("span").html(comentario);
      $(".new_comment").prepend($newtwit);
    })
  })

});

let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });



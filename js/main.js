$(document).ready(function() {

		var collapsibleEl = $('#left'); //collapsible element
		var mainEL = $('#main'); //main div
		var buttonEl =  $("#left #collapse-link"); //button inside elemen
		
		if (document.documentElement.clientWidth < 768) {
			collapsibleEl.addClass("close");
			mainEL.addClass("close");
		} else {
			collapsibleEl.addClass("open");
			mainEL.addClass("open");
		}

		$(buttonEl).click(function()
		{
			if(collapsibleEl.hasClass("open")) {
				collapsibleEl.stop().animate({width: "3em" }, 200 );
				mainEL.stop().animate({marginLeft: "5em" }, 200 );
				collapsibleEl.removeClass("open").addClass("close");
				mainEL.removeClass("open").addClass("close");
			}else{
				collapsibleEl.stop().animate({width: "13em" }, 200 );
				mainEL.stop().animate({marginLeft: "15em" }, 200 );
				collapsibleEl.removeClass("close").addClass("open");
				mainEL.removeClass("close").addClass("open");
			}
		});
		$('body').append('<div id="blackout"></div>');
     
    	var boxWidth = $(".popup-box").width();
		
		function centerBox() {
		    var winWidth = $(window).width();
		    var winHeight = $(window).height();
		    var docHeight = $(document).height();
		    var scrollPos = $(window).scrollTop();
		    var disWidth = (winWidth - boxWidth) / 2
		    var disHeight = scrollPos + winHeight / 3;
		     
		    $('.popup-box').css({'left' : disWidth+'px', 'top' : disHeight+'px'});
		    $('#blackout').css({'width' : winWidth+'px', 'height' : docHeight+'px'});
		     
		    return false;       
		}
		$(window).resize(centerBox);
		$(window).scroll(centerBox);
		centerBox(); 
		
		$('[class*=popup-link]').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var name = $(this).attr('class');
        var id = name[name.length - 1];
        var scrollPos = $(window).scrollTop();
         
        $('#popup-box-'+id).show();
        $('#blackout').show();
        $('html,body').css('overflow', 'hidden');
        $('html').scrollTop(scrollPos);
    });
     
    $('[class*=popup-box]').click(function(e) { 
        e.stopPropagation(); 
    });

    $('html').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Скрыть окно, когда кликаем вне его области */
        $('[id^=popup-box-]').hide(); 
        $('#blackout').hide(); 
        $("html,body").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });
    
    $('.close').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Скрываем тень и окно, когда пользователь кликнул по X */
        $('[id^=popup-box-]').hide(); 
        $('#blackout').hide(); 
        $("html,body").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });

		$('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    	});

		if($('input:radio[name=logo-radio]:checked').val() == "image") { 
   			$("#section-logo-image").css("display", "block"); $("#section-logo-typography").css("display", "none");
   		} else if ($('input:radio[name=logo-radio]:checked').val() == "text") {
   			$("#section-logo-typography").css("display", "block"); $("#section-logo-image").css("display", "none");
   		} else {
   			$("#section-logo-typography").css("display", "none"); $("#section-logo-image").css("display", "none");
   		}

    	$('input:radio[name=logo-radio]').click(function() {
   			if($('input:radio[name=logo-radio]:checked').val() == "image") { 
   				$("#section-logo-image").css("display", "block"); $("#section-logo-typography").css("display", "none");
   		} else if ($('input:radio[name=logo-radio]:checked').val() == "text") {
   			 $("#section-logo-typography").css("display", "block"); $("#section-logo-image").css("display", "none");
   			}	
		});
		
		$("#body-bg-color-selector").css("background-color", $("#body-bg-picker").val());
		$("#header-bg-color-selector").css("background-color", $("#header-bg-picker").val());
		$("#link-color-selector").css("background-color", $("#link-color-picker").val());
		$("#link-hover-selector").css("background-color", $("#link-hover-picker").val());
		$("#logo-color-selector").css("background-color", $("#logo-color-picker").val());
		
		$('#body-bg-picker-wrap').ColorPicker({
			color: $("#body-bg-picker").val(),
			onChange:  function(hsb, hex, rgb) {
				$("#body-bg-picker").val("#"+hex);
				$("#body-bg-picker").ColorPickerHide();
				$("#body-bg-color-selector").css("background-color", "#"+hex);
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor($("#body-bg-picker").val());
			}	
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor($("#body-bg-picker").val());
		});
		
		$('#header-bg-picker-wrap').ColorPicker({
			color: $("#header-bg-picker").val(),
			onChange:  function(hsb, hex, rgb) {
				$("#header-bg-picker").val("#"+hex);
				$("#header-bg-picker").ColorPickerHide();
				$("#header-bg-color-selector").css("background-color", "#"+hex);
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor($("#header-bg-picker").val());
			}	
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor($("#header-bg-picker").val());
		});
		
		$('#link-color-picker-wrap').ColorPicker({
			color: $("#link-color-picker").val(),
			onChange:  function(hsb, hex, rgb) {
				$("#link-color-picker").val("#"+hex);
				$("#link-color-picker").ColorPickerHide();
				$("#link-color-selector").css("background-color", "#"+hex);
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor($("#link-color-picker").val());
			}	
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor($("#link-color-picker").val());
		});
		
			
		$('#link-hover-picker-wrap').ColorPicker({
			hover: $("#link-hover-picker").val(),
			onChange:  function(hsb, hex, rgb) {
				$("#link-hover-picker").val("#"+hex);
				$("#link-hover-picker").ColorPickerHide();
				$("#link-hover-selector").css("background-color", "#"+hex);
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor($("#link-hover-picker").val());
			}	
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor($("#link-hover-picker").val());
		});
		
		$('#logo-color-picker-wrap').ColorPicker({
			hover: $("#logo-color-picker").val(),
			onChange:  function(hsb, hex, rgb) {
				$("#logo-color-picker").val("#"+hex);
				$("#logo-color-picker").ColorPickerHide();
				$("#logo-color-selector").css("background-color", "#"+hex);
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor($("#logo-color-picker").val());
			}	
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor($("#logo-color-picker").val());
		});



		
});


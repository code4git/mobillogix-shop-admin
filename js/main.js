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
			$('[id^=popup-box-]').hide(); 
			$('#blackout').hide(); 
			$("html,body").css("overflow","auto");
			$('html').scrollTop(scrollPos);
		});
    
		$('.close').click(function() { 
			var scrollPos = $(window).scrollTop();
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
		
		$('select').customSelect();
		
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
/*!jquery.customSelect*/
(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);

(function(a){a(function(){var b={p:function(d){return a("#cws-wp-help-"+d)},init:function(){c.settingsButton.click(function(d){d.preventDefault();b.revealSettings(true)});c.h2.display.text.dblclick(function(){b.revealSettings();c.h2.edit.input.focus()});c.h3.display.text.dblclick(function(){b.revealSettings();c.h3.edit.input.focus()});c.labels.bind("keydown",function(d){if(13==d.which){a(this).blur();b.saveSettings()}});c.h2.edit.input.bind("keyup",function(){c.menu.text(a(this).val())})},fadeOutIn:function(e,d){e.fadeOut(150,function(){d.fadeIn(150)})},hideShow:function(e,d){e.hide();d.show()},revealSettings:function(d){a([c.h2,c.h3]).each(function(){b.hideShow(this.display.wrap,this.edit.wrap)});b.fadeOutIn(c.doc,c.settings);if(d){(function(e){e.focus().val(e.val())})(c.h2.edit.input)}},saveSettings:function(){a([c.h2,c.h3]).each(function(){this.display.text.text(this.edit.input.val())});a.post(ajaxurl,{action:"cws_wp_help_settings",nonce:a("#_cws_wp_help_nonce").val(),h2:c.h2.edit.input.val(),h3:c.h3.edit.input.val()},b.hideSettings)},hideSettings:function(){a([c.h2,c.h3]).each(function(){b.hideShow(this.edit.wrap,this.display.wrap)});b.fadeOutIn(c.settings,c.doc)}};var c={h2:{edit:{input:b.p("h2-label"),wrap:b.p("h2-label-wrap")},display:{text:a(".wrap h2:first"),wrap:a(".wrap h2:first"),}},h3:{edit:{input:b.p("listing-label"),wrap:b.p("listing-labels")},display:{text:b.p("listing h3 i"),wrap:b.p("listing h3")}},settingsButton:b.p("settings-on"),menu:a("#adminmenu a.current"),doc:b.p("document"),settings:b.p("settings"),labels:a("#cws-wp-help-listing-label, #cws-wp-help-h2-label"),};b.init()})})(jQuery);
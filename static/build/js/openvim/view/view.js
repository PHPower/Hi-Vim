function create_VIM_VIEW(e,t,n){function o(e){$(".searchText",n).text(e)}function r(e){e?$(".searchbar",n).show():$(".searchbar",n).hide()}function i(){e.isCommandMode()?($(".statustext",n).text("mode: COMMAND"),$(".insert-mode",n).hide(),$(".command-mode",n).show()):($(".insert-mode",n).show(),$(".command-mode",n).hide(),$(".statustext",n).text("mode: INSERT"));var t=1+s.currentRowIndex(),o=1+s.currentColumnIndex();$(".cursorlocation").text(t+", "+o)}function d(e){i()}var s=e.executor;return t.listenTo("interpreter_initialized",d),t.listenTo("cursor_changed",d),t.listenTo("interpreter_interpreted",d),t.listenTo("updated_mode",d),t.listenTo("updated_searchtext",o),t.listenTo("searchbar_visible",r),{update:i}}
function create_VIM_VISUAL_COMMANDS(n,o,r){function t(n,o){A.registerCommand(n,o)}function e(){return g.cursor()}function i(n){return function(o){n(o,n)}}function c(n){A.addAction("visual_select_area",i(n))}function u(){function n(n,o){I.existsIn(n,["h","j","k","l","w","e","b"])?(A.interpretOneCommand(n),C(),c(o)):"d"===n?(l(),_()):"y"===n?(a(),g.changeCursorTo(w()),_()):"Esc"===n?_():c(o)}g.withAttribute(e(),x),C(),c(n)}function a(){var n=f(),o=g.copyLineContent(n.from,n.to);A.saveToRegister(o)}function f(){var n=w(),o=e();return v(s(n),s(o))?{from:n,to:o}:{from:o,to:n}}function l(){var n=f();g.removeBetween(n.from,n.to,!0,!0)}function s(n){return{row:g.lineIndex(g.line(n)),col:g.colIndex(n)}}function v(n,o){return n.row===o.row?n.col<=o.col:n.row<o.row}function m(n){var o=s(n),r=s(e());return v(o,r)?{from:o,to:r}:{from:r,to:o}}function h(n){return g.lines().slice(n.from.row,n.to.row+1)}function w(){return $(".char["+x+"]")}function _(){w().removeAttr(x),d()}function d(){$(".visual_char").removeClass("visual_char")}function C(){d();var n=w();if(0!==n.length){var o=m(n),r=h(o);r.each(function(n){var t=$(this),e=g.charsInLine(t),i=0===n?o.from.col:0,c=n+1>=r.length?o.to.col:e.length;e.slice(i,c).addClass("visual_char")})}}var I=VIM_GENERIC,g=n.executor,A=n,x="visual_origin";t("v",u)}
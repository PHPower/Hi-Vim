function create_VIM_VIRTUAL_KEYBOARD(){function e(e,t){return{primary:e,secondary:t}}function t(e){if(e.configuration){void 0==e.clazz&&(e.clazz="");var t=$("<div />",{text:e.label,class:"keyButton "+e.clazz,style:e.style});return t.data("keyboard",e.label),t}if("hid"===e){var t=$("<div />",{text:"_",class:"keyButton hiddenButton"});return t}if(void 0!==e.primary){var t=$("<div />",{text:e.primary+" "+e.secondary,class:"keyButton"});return t.data("keyboard",e.primary),t}if(void 0!==e.key){var t=$("<div />",{text:e.label,class:"keyButton"});return t.data("keyboard",e.key),t}var t=$("<div />",{text:e,class:"keyButton"});return t.data("keyboard",e),t}function n(e){var n=$("<div />",{class:"keyboardRow"});return y.for_each(e,function(e){n.append(t(e))}),n}function a(e){var t=$("<div />",{class:"keyboard"});return y.for_each(e,function(e){var a=n(e);t.append(a)}),o(t),i(t),r(t),t}function o(e){$(".toggle_keyboard_size").on("click",function(){$(this).toggleClass("pressed_down"),e.toggleClass("small_keyboard")})}function i(e){$(".toggle_screen_brightness").on("click",function(){$(this).toggleClass("pressed_down"),$(".editor").toggleClass("darker")})}function r(e){$(".toggle_3d_keyboard").on("click",function(){$(this).toggleClass("pressed_down"),$(".screen_view").toggleClass("view_3d")})}function l(e){return p.find(".keyButton").filter(function(){var t=$(this).data("keyboard");return t===e}).first()}function s(e){u(x,e)}function d(e){f(x,e)}function c(){f(x)}function u(e,t){l(t).addClass(e)}function f(e,t){void 0===t?p.find("."+e).removeClass(e):l(t).removeClass(e)}var y=VIM_GENERIC,g=["Esc","hid","hid","hid","hid","hid","hid","hid","hid","hid"],v=["`","1","2",e("3","#"),e("4","$"),e("5","%"),e("6","^"),"7","8","9","0","-","=",{label:"Del",configuration:!0,style:"flex:2"}],b=[{label:"tab",configuration:!0,style:"flex:1.5"},"q","w","e","r","t","y","u","i","o","p","[","]",{configuration:!0,label:"\\",style:"flex:1.5"}],k=[{configuration:!0,label:"caps",style:"flex:1.7"},"a","s","d","f","g","h","j","k","l",";","'",{configuration:!0,label:"Enter",style:"flex:2"}],h=[{configuration:!0,label:"shift",style:"flex:2.5"},"z","x","c","v","b","n","m",",",".",e("?","/"),{configuration:!0,label:"shift",style:"flex:2.5"}],_=["ctrl","win","alt",{configuration:!0,label:"space",style:"flex:7"},"alt","win","menu","ctrl"],p=a([g,v,b,k,h,_]),x="pressed_down";return{addClass:u,removeClass:f,pressButtonDown:s,releaseButton:d,releaseButtons:c,keyboardAsDom:p}}
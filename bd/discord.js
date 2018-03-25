function getMessages() {
try{
    for (var e = document['getElementsByClassName']('guilds-wrapper')[0]['getElementsByClassName']('badge'), t = 0, r = 0; r < e['length']; r++) {
        var n = parseInt(e[r]['innerText']['replace'](/[^0-9.]/g, ''));
        n > 0 && t++
    };
    ipcRenderer['sendToHost']('message-discord', {
        count: t
    })
} catch (err) { console.log("Franz-Error Reading Discord Unread Messages Badge: " + err); }
}
//
var _require = require('electron'), ipcRenderer = _require['ipcRenderer'], path = require('path');
require(path['join'](__dirname, 'util', 'init.js'));
//
console.log("Aliasing LocalStorage before its deleted... ");
document.localStorage = window.localStorage;
//
document.addEventListener('DOMContentLoaded', function () {
    setInterval(getMessages, 1e3);
});
//BetterDiscord: Stage 1
document.addEventListener('DOMContentLoaded', function () {

    console.log("BetterDiscord Stage 1: Loading jQuery...");
    var script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";
    document.head.appendChild(script1);
    
    //Needed these because main2 had REACT-DOM stuff coming from NODE-js through electron
    // Main3 uses internal WebPack from a remote url:    
    // console.log("BetterDiscord Stage 1: Loading React.js ...");
    // var script7 = document.createElement("script");
    // script7.type = "text/javascript";
    // script7.src = "//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js";
    // document.head.appendChild(script7);

    // console.log("BetterDiscord Stage 1: Loading React DOM.js ...");
    // var script8 = document.createElement("script");
    // script8.type = "text/javascript";
    // script8.src = "//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js";
    // document.head.appendChild(script8);
});

//BetterDiscord: Stage 2
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        function injectJs() {
            console.log("BetterDiscord Stage 2: Loading Jquery-Cookie");
            var script2 = document.createElement("script");
            script2.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script2);
            script2.src = "//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js";
        }
        function jqDefer() {
            if (window.jQuery) {
                injectJs();
            } else {
                setTimeout(function () {
                    jqDefer();
                }, 250)
            }
        }
        jqDefer();
    })();
});
//BetterDiscord: Stage 3
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        function injectJs() {

            console.log("BetterDiscord Stage 3: Loading DoubleClickEdit2 plugin...");
            var script6 = document.createElement("script");
            script6.type = "text/javascript";
            script6.src = "https://genbtc.github.io/bd/dblClickEdit2.plugin.js";
            document.head.appendChild(script6);

            console.log("BetterDiscord Stage 3: Loading MediaSupport2 plugin...");
            var script5 = document.createElement("script");
            script5.type = "text/javascript";
            script5.src = "https://genbtc.github.io/bd/mediaSupport2.plugin.js";
            document.head.appendChild(script5);
            
            console.log("BetterDiscord Stage 3: Downloading BetterDiscord CSS & main script...");
            //Load the BD script itself (had to copy it from URL below and edit a bit)
            var script3 = document.createElement("script");
            script3.type = "text/javascript";
            script3.id = "bdMain";
            //script3.src = "//cdn.rawgit.com/Jiiks/BetterDiscordApp/master/js/main.js";
            //script3.src = "https://localhost:4443/main2.js";
            //script3.src = "https://genbtc.github.io/bd/main2.js";
            script3.src = "https://genbtc.github.io/bd/main3.js";
            document.head.appendChild(script3);

            //Load BD's CSS file
            var css1 = document.createElement("link");
            css1.rel = "stylesheet";
            css1.type = "text/css";
            css1.href = "https://genbtc.github.io/bd/main.css";
            document.head.appendChild(css1);

            //Direct Load a personal CSS file to modify discord's appearance here
            var css2 = document.createElement("link");
            css2.rel = "stylesheet";
            css2.type = "text/css";
            css2.href = "https://genbtc.github.io/bd/genbtc.css";
            document.head.appendChild(css2);


        }
        function jqDefer() {
            if (window.jQuery) {
                injectJs();
            } else {
                setTimeout(function () {
                    jqDefer();
                }, 450)
            }
        }
        jqDefer();
    })();
});

//BetterDiscord: Stage 4
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        function injectJs() {
            console.log("BetterDiscord Stage 4: Initializing Variables...");
            var script4 = document.createElement("script");
            script4.type = "text/javascript";
            script4.src = "https://genbtc.github.io/bd/cfg.cfg";
            script4.id = "Stage4Loaded";
            document.head.appendChild(script4);
            var bdVersion = "0.2.81";
        }
        function jqDefer() {
            if (typeof(Core) == "function") {
                injectJs();
            } else {
                setTimeout(function () {
                    jqDefer();
                }, 750)
            }
        }
        jqDefer();
    })();
});

//BetterDiscord: Stage 5
document.mainCore = null;
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        function injectJs() {
            console.log("BetterDiscord Stage 5: Final: Core() exists, starting mainCore() automatically!");
            document.mainCore = new Core();
            document.mainCore.init();
            var script5 = document.createElement("script");
            script5.innerHTML = '\
                var mainCore = document.mainCore;\
              ';
            script5.id = "Stage5Loaded";
            document.head.appendChild(script5);

            //Apply CSS Fixes with jQuery that we couldnt apply in the normal way.
            var f1 = $("[class*=emojiButtonNormal]").filter(function() { return $(this).css('top') == '11.5px'; });
            f1.css("top","1.5px");
            f1 = $("[class*=textAreaEdit]");
            f1.css("padding","0px");
            f1 = $("[class*=textAreaEnabled]");
            f1.css("padding","0px");
        }
        function jqDefer() {
            if (document.getElementById('Stage4Loaded') !== null) {
                injectJs();
            } else {
                setTimeout(function () {
                    jqDefer();
                }, 950)
            }
        }
        jqDefer();
    })();
});

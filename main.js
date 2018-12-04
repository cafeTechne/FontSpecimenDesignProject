//$("#PCmonitorInside:last-child").empty();   turns off tv heheh

var counter = 0;
$(document).ready(function () {

    //power button sentinel value 
    var powerOn = true;

    $("#powerButton").click(function () {

        if (powerOn == true) {
            alert("You have turned the power to the monitor off.");
            $("#screen").css("color", "black");
            powerOn = false;
        } else if (powerOn == false) {
            alert("You have turned the power to the monitor on.");
            $("#screen").css("color", "rgb(0, 166, 0)");
            location.reload();
            powerOn = true;
        }
    });


    function checkCounter() {
        if (counter % 360 == 0 && counter != 0) {
            alert("You've reached the character limit for this demo. Clearing Screen.");
            //reloads page when there are 360 characters.
            location.reload();
            counter = 0;
        }
    };

    //loads sound
    //need to prompt the user to interact with the DOM before
    //loading sound up per  https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'keyClick.mp3');
    $.get();
    audioElement.addEventListener("load", function () {
        audioElement.play();
    }, true);

    //audioElement.play();

    //courtesy of 
    //https://stackoverflow.com/questions/40822531/jquery-audio-how-to-allow-overlapping-sounds


    function cloneAndPlay(audioElement) {
        // the true parameter will tell the function to make a deep clone (cloning attributes as well)
        var clone = audioElement.cloneNode(true);
        //makes playing the noise contingent on whether or not the power is on : )
        if (powerOn == true) {
            clone.play();
        }
    }

    document.addEventListener('keydown', function (event) {
        checkCounter();
        if (event.keyCode == 48) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r0</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>0</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        if (event.keyCode == 49) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r1</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>1</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 50) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r2</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>2</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 51) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r3</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>3</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 52) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r4</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>4</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 53) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r5</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>5</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 54) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r6</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>6</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 55) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r7</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>7</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 56) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r8</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>8</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 57) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r9</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>9</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 65) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\ra</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>a</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 66) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rb</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>b</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 67) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rc</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>c</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 68) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rd</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>d</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 69) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\re</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>e</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 70) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rf</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>f</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 71) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rg</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>g</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 72) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rh</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>h</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 73) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\ri</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>i</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 74) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rj</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>j</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 75) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rk</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>k</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 76) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rl</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>l</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 77) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rm</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>m</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 78) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rn</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>n</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 79) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\ro</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>o</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 80) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rp</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>p</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 81) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rq</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>q</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 82) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rr</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>r</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 83) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rs</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>s</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 84) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rt</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>t</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 85) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\ru</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>u</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 86) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rv</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>v</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 87) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rw</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>w</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 88) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rx</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>x</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 89) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\ry</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>y</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        if (event.keyCode == 90) {
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rz</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>z</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //backspace
        //a little hacky---needs some TLC lol
        //good enough for now... but can't figure out the weirdness! lol.
        if (event.keyCode == 8) {
            if (counter > 0) {
                $("#fontDemoArea > span:nth-child(" + counter + ")").remove();
                cloneAndPlay(audioElement);
                counter -= 1;
            } else {
                //resetting the page fixes a negative counter issue
                //this is just a dirty fix for a problem I didn't
                //understand... the problem reflects my ignorance about the
                //deep inner workings of javascript in the DOM
                //must fix. until then... this works nicely.
                location.reload();
            }

        }

        //space bar
        if (event.keyCode == 32) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r&nbsp;</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>&nbsp;</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        //tilde
        if (event.keyCode == 192) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r~</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>~</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //minus
        if (event.keyCode == 189) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r-</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>-</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        //plus
        if (event.keyCode == 187) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r+</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>+</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }


        //TAB
        if (event.keyCode == 9) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>\r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }


        //OPEN BRACKET
        if (event.keyCode == 219) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r[</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>[</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        //CLOSE BRACKET
        if (event.keyCode == 221) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r]</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>]</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }



        //backslash
        if (event.keyCode == 220) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r\\</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>\\</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //CAPS
        if (event.keyCode == 20) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\rCAPS LOCK</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>CAPS LOCK</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //Semi-Colon
        if (event.keyCode == 186) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r;</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>;</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //Single Quote
        if (event.keyCode == 222) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r'</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>'</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //Enter ... how to make this work in this context?
        //fixed number of spaces based on the counter math?
        //not worth thinking about for this simple demo
        if (event.keyCode == 13) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r\n</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>\n</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //Ctrl
        if (event.keyCode == 17) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span></span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //ALT
        if (event.keyCode == 18) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span></span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //SHIFT
        if (event.keyCode == 16) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span></span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }


        //LESS THAN
        if (event.keyCode == 188) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r<</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span><</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        //GREATER THAN
        if (event.keyCode == 190) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r></span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>></span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }
        //QUESTION MARK
        if (event.keyCode == 191) {
            event.preventDefault();
            if (counter % 40 == 0) {
                $("#fontDemoArea").append("<span>\r?</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            } else {
                $("#fontDemoArea").append("<span>?</span>");
                cloneAndPlay(audioElement);
                counter += 1;
            }
        }

        //112-123

        //QUESTION MARK
        if (event.keyCode == 112 ||
            event.keyCode == 113 ||
            event.keyCode == 114 ||
            event.keyCode == 115 ||
            event.keyCode == 116 ||
            event.keyCode == 117 ||
            event.keyCode == 118 ||
            event.keyCode == 119 ||
            event.keyCode == 120 ||
            event.keyCode == 121 ||
            event.keyCode == 122 ||
            event.keyCode == 123) {
            event.preventDefault();
            cloneAndPlay(audioElement);
        }


    });
});
(function () {
    if (!($ = window.jQuery)) {
        script = document.createElement('script');
        script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        script.onload = getCaptions;
        document.body.appendChild(script);
    }
    else {
        getCaptions();
    }

    function showHTLYRemoveOption() {
        var body = $("body");
        body.append("<div  title='One more step.' id='htlyOverthrower'>Hey, if you look at the top of this page, you'll see a toolbar and some twitter-related stuff, you're not actually on the Guardian site, would you like to go there?<div>");
        $("#htlyOverthrower").dialog({
            dialogClass: "no-close",
            resizable: false,
            height: 200,
            modal: true,
            buttons: {
                "Remove that toolbar :)": function () {
                    $(this).dialog("close");
                    window.location = $("#hootFrame").attr("src");
                },
                "Cancel :(": function () {
                    $(this).dialog("close");
                }
            }
        });
    }

    function getCaptions() {
        htly = document.getElementById("hootFrame");
        if (!htly) {
            m = $("img[typeof='foaf:Image']");
            $(m).hover(showCaption, hideCaption);
        }
        else {
            link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css";
            document.head.appendChild(link);

            script = document.createElement('script');
            script.src = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.js';
            script.onload = showHTLYRemoveOption;
            document.body.appendChild(script);
        }
    }
    function showCaption() {
        var par = $(this).parent();
        var href = par.attr("href");
        console.log(href);
        par.append($("<p style='background-color:white;margin-top:-20px; opacity:0.8;clear:both;display:block;text-decoration:none !important'>retrieving caption...</p>"));
        lastH = href;
        $.get(lastH, function (data) { parseAndPrint(par, data); });
    }

    function hideCaption() { $(this).parent().find("p:last").remove(); }

    function parseAndPrint(parent, html) {
        var h = $(html).find("#block-system-main p");
        sp = parent.find("p:last");
        sp.text(h.text());
        sp.css("margin-top", "-" + sp.height() + "px");
        sp.css(":hover", "text-decoration:none !important");
    }
} ());

//http://www.guardian.co.tt/gallery/talk-trinidad-09-march-2013

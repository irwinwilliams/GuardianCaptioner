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
    function getCaptions() {
        m = $("img[typeof='foaf:Image']");
        $(m).hover(showCaption, hideCaption);
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
}());

//http://www.guardian.co.tt/gallery/talk-trinidad-09-march-2013

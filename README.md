GuardianCaptioner
=================

Saw this tweet on @GuardianTT's feed: 

"Check out today’s Talk of Trinidad photoblog. 
http://www.guardian.co.tt/gallery/talk-trinidad-09-march-2013?utm_source=iStarr&utm_medium=github&utm_campaign=innovation 
Click any photo to see the caption." 

and I thought better could be done.

so, if you make a bookmarklet using the captioner.js contents, it will display captions.

How to make it work (easy way):
1. Drag -> <a style="background-color:#ee432e;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#ee432e),color-stop(50%,#c63929),color-stop(50%,#b51700),color-stop(100%,#891100));background-image:-webkit-linear-gradient(top,#ee432e 0%,#c63929 50%,#b51700 50%,#891100 100%);background-image:-moz-linear-gradient(top,#ee432e 0%,#c63929 50%,#b51700 50%,#891100 100%);background-image:-ms-linear-gradient(top,#ee432e 0%,#c63929 50%,#b51700 50%,#891100 100%);background-image:-o-linear-gradient(top,#ee432e 0%,#c63929 50%,#b51700 50%,#891100 100%);background-image:linear-gradient(top,#ee432e 0%,#c63929 50%,#b51700 50%,#891100 100%);border:1px solid#951100;border-radius:5px;-webkit-box-shadow:inset 0px 0px 0px 1px rgba(255,115,100,0.4),0 1px 3px#333333;box-shadow:inset 0px 0px 0px 1px rgba(255,115,100,0.4),0 1px 3px#333333;color:#fff;font:bold 20px/1"helvetica neue",helvetica,arial,sans-serif;padding:12px 0 14px 0;text-align:center;text-shadow:0px-1px 1px rgba(0,0,0,0.8);width:150px;" href="javascript:(function(){s=document.createElement('SCRIPT');s.type='text/javascript';s.src='https://raw.github.com/irwinwilliams/GuardianCaptioner/master/captioner.min.js';  document.getElementsByTagName('head')[0].appendChild(s);})();">this link</a> <- to your browser's favorites bar.
2. Go to a Trinidad Guardian photoblog, like, http://www.guardian.co.tt/gallery/talk-trinidad-09-march-2013?utm_source=iStarr&utm_medium=github&utm_campaign=innovation
3. Click the favorite you just made.

You should see a caption for every photo you hover over in the gallery.

How to make it work (technical way):

1. Go to a Trinidad Guardian photoblog, like, http://www.guardian.co.tt/gallery/talk-trinidad-09-march-2013?utm_source=iStarr&utm_medium=github&utm_campaign=innovation
2. Clear the address bar
3. Type javascript:
4. Copy/paste this script command
(function(){
  s=document.createElement('SCRIPT');
  s.type='text/javascript';
  s.src='https://raw.github.com/irwinwilliams/GuardianCaptioner/master/captioner.min.js';
  document.getElementsByTagName('head')[0].appendChild(s);
})();

so that your browser's address bar reads:
javascript:(function(){
  s=document.createElement('SCRIPT');
  s.type='text/javascript';
  s.src='https://raw.github.com/irwinwilliams/GuardianCaptioner/master/captioner.min.js?';
  document.getElementsByTagName('head')[0].appendChild(s);
})();

You should see a caption for every photo you hover over in the gallery.

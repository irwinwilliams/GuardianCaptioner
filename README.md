GuardianCaptioner
=================

Saw this tweet on @GuardianTT's feed: 

"Check out today’s Talk of Trinidad photoblog. 
http://www.guardian.co.tt/gallery/talk-trinidad-09-march-2013?utm_source=iStarr&utm_medium=github&utm_campaign=innovation 
Click any photo to see the caption." 

and I thought better could be done.

so, if you make a bookmarklet using the captioner.js contents, it will display captions.

How to make it work:

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

5. Press enter.
If it works, you should see a caption for every photo you hover over in the gallery.

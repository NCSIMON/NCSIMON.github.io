var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="(ᗒᗣᗕ)՞· "+OriginTitile,clearTimeout(titleTime)):(document.title="♪(・∀・)/ · "+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));
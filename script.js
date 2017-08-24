$('body.home .tag-google-play-aktion').each(function(k, item){
  chrome.storage.sync.get({
    hideDeals: false
  }, function(items) {
    if(items.hideDeals){
      item.remove();
    } else {
      $(item).css({'opacity' : '0.2', 'transition' : 'opacity 0.25s ease'})
      $(item).mouseover(function(){
        $(this).css({'opacity' : '1.0'})
        $(this).css({'transition' : 'opacity .8s ease'})
      })
      $(item).mouseout(function(){
        $(this).css({'opacity' : '0.2'})
      })
    }
  });
})

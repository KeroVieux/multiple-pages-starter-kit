$body = $('body')
config =
  domain: 'https://www.xxx.com/'
extraData = {
  ieNotice : '<!-- Older IE warning message --> <!--[if lt IE 9]> <div class="ie-warning"> <h1 class="c-white">注意!!</h1> <p>您正在使用一个老掉牙的浏览器请升级 <br/>到以下任意一款现代浏览器！</p> <div class="iew-container"> <ul class="iew-download"> <li> <a href="http://www.google.com/chrome/"> <img src="images/browsers/chrome.png" alt=""> <div>Chrome</div> </a> </li> <li> <a href="https://www.mozilla.org/en-US/firefox/new/"> <img src="images/browsers/firefox.png" alt=""> <div>Firefox</div> </a> </li> <li> <a href="http://www.opera.com"> <img src="images/browsers/opera.png" alt=""> <div>Opera</div> </a> </li> <li> <a href="https://www.apple.com/safari/"> <img src="images/browsers/safari.png" alt=""> <div>Safari</div> </a> </li> <li> <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie"> <img src="images/browsers/ie.png" alt=""> <div>IE (New)</div> </a> </li> </ul> </div> <p>如给您带来不便，请谅解，一切都是为了与时俱进！</p> </div> <![endif]-->'
}
$body.append(extraData.ieNotice)
commonFn = {
  stopBubble: (e) ->
    if e and e.stopPropagation
      e.stopPropagation()
    else
      window.event.cancelBubble = true
    return
  stopDefault: (e) ->
    if e and e.preventDefault
      e.preventDefault()
    else
      window.event.returnValue = false
    false
  urlParamToObj: ()->
    if location.search
      u = location.search
    else
      u = location.href
      u = u.slice(0, u.indexOf("#"))
    p = {}
    if -1 != u.indexOf("?")
      sear = u.slice(u.indexOf("?")+1).split("&")
      for item in sear
        do(item)->
          s = item.split("=")
          p[s[0]] = s[1]
    return p
  hbsRender: (arg) ->
    extRes = '.hbs'
    dataRes = {}
    callbackRes = ->
      console.log "#{arg.hbs} 渲染完成"
    if arg.ext
      extRes = arg.ext
    if arg.dataJSON
      dataRes = arg.dataJSON
    if arg.callback
      callbackRes = arg.callback
    if $(arg.selector).size() >0
      $(arg.selector).loadFromTemplate
        template: arg.hbs
        data: dataRes
        callback: callbackRes
        extension : extRes
    else
      console.log('没有所选的dom')
  hbsRender1: (selector,hbs,dataJSON,callback,ext) ->
    extRes = '.hbs'
    dataRes = {}
    callbackRes = ->
      console.log "#{hbs} 渲染完成"
    if ext
      extRes = ext
    if dataJSON
      dataRes = dataJSON
    if callback
      callbackRes = callback
    $(selector).loadFromTemplate
      template: hbs
      data: dataRes
      callback: callbackRes
      extension : extRes
  fillToForm: (formName,data) ->
    if $("#{formName}").size() <1 and _.isObject(data)
      $inputs = $(".#{formName} input")
      $.each data, (key, value) ->
        $inputs.filter ->
          return key is this.id
        .val(value)
    else
      console.warn 'form不存在或供填充的data不是json'
}
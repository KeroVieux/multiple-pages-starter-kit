// Generated by CoffeeScript 1.10.0
var $body, commonFn, config, extraData;

$body = $('body');

config = {
  domain: 'https://www.xxx.com/'
};

extraData = {
  ieNotice: '<!-- Older IE warning message --> <!--[if lt IE 9]> <div class="ie-warning"> <h1 class="c-white">注意!!</h1> <p>您正在使用一个老掉牙的浏览器请升级 <br/>到以下任意一款现代浏览器！</p> <div class="iew-container"> <ul class="iew-download"> <li> <a href="http://www.google.com/chrome/"> <img src="images/browsers/chrome.png" alt=""> <div>Chrome</div> </a> </li> <li> <a href="https://www.mozilla.org/en-US/firefox/new/"> <img src="images/browsers/firefox.png" alt=""> <div>Firefox</div> </a> </li> <li> <a href="http://www.opera.com"> <img src="images/browsers/opera.png" alt=""> <div>Opera</div> </a> </li> <li> <a href="https://www.apple.com/safari/"> <img src="images/browsers/safari.png" alt=""> <div>Safari</div> </a> </li> <li> <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie"> <img src="images/browsers/ie.png" alt=""> <div>IE (New)</div> </a> </li> </ul> </div> <p>如给您带来不便，请谅解，一切都是为了与时俱进！</p> </div> <![endif]-->'
};

$body.append(extraData.ieNotice);


/**
  @namespace
 */

commonFn = {
  stopBubble: function(e) {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    } else {
      window.event.cancelBubble = true;
    }
  },
  stopDefault: function(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    } else {
      window.event.returnValue = false;
    }
    return false;
  },
  urlParamToObj: function() {
    var fn, i, item, len, p, sear, u;
    if (location.search) {
      u = location.search;
    } else {
      u = location.href;
      u = u.slice(0, u.indexOf("#"));
    }
    p = {};
    if (-1 !== u.indexOf("?")) {
      sear = u.slice(u.indexOf("?") + 1).split("&");
      fn = function(item) {
        var s;
        s = item.split("=");
        return p[s[0]] = s[1];
      };
      for (i = 0, len = sear.length; i < len; i++) {
        item = sear[i];
        fn(item);
      }
    }
    return p;
  },

  /**
    Function for rendered the components
    @param {object} arg The arguments for render
    @example
    hbsRender({
     selector:'#bar',
     hbs:'bar',
     dataJSON:{title:'barTitle'},
     callback:function(){ console.log('there was a bar hbs has rendered')}
    })
   */
  hbsRender: function(arg) {
    var callbackRes, dataRes, extRes;
    extRes = '.hbs';
    dataRes = {};
    if (arg.ext) {
      extRes = arg.ext;
    }
    if (arg.dataJSON) {
      dataRes = arg.dataJSON;
    }
    if (arg.callback) {
      callbackRes = arg.callback;
    }
    return $(arg.selector).loadFromTemplate({
      template: arg.hbs,
      data: dataRes,
      callback: callbackRes,
      extension: extRes
    });
  },

  /**
  Function for specified json to fill into a form
  @param {string} formName The Class name of the target(form)
  @param {object} data It's would be a json
  @example
  fillToForm('formClass',json)
   */
  fillToForm: function(formClass, data) {
    var $inputs;
    if ($("" + formClass).size() < 1 && _.isObject(data)) {
      $inputs = $("." + formClass + " input");
      return $.each(data, function(key, value) {
        return $inputs.filter(function() {
          return key === this.id;
        }).val(value);
      });
    } else {
      return console.warn('form不存在或供填充的data不是json');
    }
  }
};

$body.find('.overlay').fadeOut();

//# sourceMappingURL=common.js.map

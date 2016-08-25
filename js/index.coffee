$ ->
  commonFn.hbsRender({
    selector:'#bar'
    hbs:'bar'
    dataJSON:{title:'abc1'}
    callback: ->
      console.log('ccc1')
  })
  $('.btn-test').click ->
    $('#modal').modal('show');
    console.log(config.domain);
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
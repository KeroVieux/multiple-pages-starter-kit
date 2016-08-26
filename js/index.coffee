$ ->
  commonFn.hbsRender({
    selector:'#navBar'
    hbs:'nav_bar'
  })
  commonFn.hbsRender({
    selector:'#carousel'
    hbs:'carousel'
  })
  commonFn.hbsRender({
    selector:'#imgList'
    hbs:'img_list'
  })
  commonFn.hbsRender({
    selector:'#productsList'
    hbs:'products_list'
  })
  commonFn.hbsRender({
    selector:'#pageFooter'
    hbs:'page_footer'
  })
  $('.btn-test').click ->
    $('#modal').modal('show');
    console.log(config.domain);
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
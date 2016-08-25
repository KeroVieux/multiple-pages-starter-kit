/**
 * Created by kerovieux on 16/8/26.
 */
$(function () {
  commonFn.hbsRender('#bar', 'bar',{title:'abc'});
  $('.btn-test').click(function () {
    console.log('b');
    $('#modal').modal('show');
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
  })
})
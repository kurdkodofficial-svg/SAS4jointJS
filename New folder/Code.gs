// لە شوێنی ACCESS_LINK بەستەری لاپەڕەی کەنڤاسەکەت بنووسە
var ACCESS_LINK = ScriptApp.getService().getUrl() + '?page=canvas'; 

function doGet(e){
  var p = (e && e.parameter && e.parameter.page) || 'join';
  
  // زیادرکردنی بەشی کەنڤاس
  if (p === 'canvas') {
    return HtmlService.createTemplateFromFile('CanvasPage').evaluate()
      .setTitle('SAS4jointJS — Workspace')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
  
  var t = HtmlService.createTemplateFromFile(p === 'admin' ? 'AdminPage' : 'CustomerPage');
  t.key = ADMIN_KEY;
  t.accessLink = ACCESS_LINK;
  return t.evaluate().setTitle('SAS4jointJS').addMetaTag('viewport','width=device-width,initial-scale=1');
}
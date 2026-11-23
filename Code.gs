function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('訪客使用紀錄');
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.id || '',
    data.timestamp || new Date(),
    data.visitorName || '匿名訪客',
    data.relation || '朋友',
    data.device || '其他',
    data.osBrowser || '',
    data.mainActivity || '瀏覽網站',
    data.details || '',
    data.durationMins || 1,
    data.cheers || 0,
    data.notes || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

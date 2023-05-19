function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('ZUX作業')
      // .addItem('画面クリア', 'clearAll')
      // .addSeparator()
      .addItem('对话整理', 'formatChat')
      // .addItem('レポート作成', 'makeReport')
      // .addSubMenu(ui.createMenu('Sub-menu')
      //     .addItem('Second item', 'menuItem2'))
      .addToUi();
}

function formatChat() {
  convertChatList();
  SpreadsheetApp.getUi().alert('对话整理完了しました。');
}

// function makeReport() {
//   sumOrderAmountByBrand();
//   SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
//      .alert('レポートを作成しました。');
// }

// function clearAll() {
//   var sheet = SpreadsheetApp.getActiveSheet();
//   sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
//     .clear()
//     .removeCheckboxes();
//   SpreadsheetApp.getUi().alert('画面クリアしました。');
// }

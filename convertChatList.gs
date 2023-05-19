function convertChatList() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const chatSheet = ss.getSheetByName('Chat'); // 假设原始聊天记录在名为 Chat 的 Sheet 中
  var chatData = chatSheet.getRange("A1:A").getValues();
  const newSheet = ss.insertSheet(); // 新建 Sheet

  var existingSheet = ss.getSheetByName('New Chat');
  if (existingSheet != null) {
    ss.deleteSheet(existingSheet);
  }
  newSheet.setName('New Chat'); // 将新 Sheet 命名为 New Chat

  // 初始化表头
  var tableData = [];
  tableData.push(["Time", "User", "Message"]);

  // var dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
  var dateRegex =   /^\d{4}-\d{1,2}-\d{1,2}$/
  var timeRegex = /^\d{1,2}:\d{2}:\d{2}$/;

  for (var i = 0; i < chatData.length; i++) {
    var chat = chatData[i][0];
    if (dateRegex.test(chat)) {
      var currentDateString = chat;
      // newSheet.getRange(currentRow, 1, 1, 1).setValue(currentDateString); 
    } else if (timeRegex.test(chat)) {
      // let time = chat;
      let time = currentDateString + ' ' + chat;
      let message = '';
      let user = '';
      user = chatData[i + 2][0];
      message = chatData[i + 1][0];
      tableData.push([time, user, message]);

    }
  }

  var range = newSheet.getRange(1, 1, tableData.length, tableData[0].length);
  range.setValues(tableData);
  // newSheet.autoResizeColumns(1, tableData[0].length);

}

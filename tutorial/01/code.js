function helloWorld() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("App")
    .getRange("A1")
    .setValue("Hello, Apps Script!");
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("ASS01")
    .addItem("Hello World", "helloWorld")
    .addToUi();
}

function sendEmail() {
  GmailApp.sendEmail("email@gmail.com", "Subject", "Body");
}

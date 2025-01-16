function doGet() {
  return createHomePage_();
}

function createHomePage_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  const htmlTable = createHtmlTable_(values);

  const html = `<div>${htmlTable}</div>`;
  console.log(html);
  return HtmlService.createHtmlOutput()
    .setContent(html)
    .setTitle("ASS04: Understanding Apps Script Editor Features")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function createHtmlTable_(values) {
  const createTableRow_ = (row, isHeader = false) => {
    const htmlRow = row
      .map((value) => {
        const tag = isHeader ? "th" : "td";
        return `<${tag}>${value}</${tag}>`;
      })
      .join("\n");
    return `<tr>${htmlRow}</tr>`;
  };

  const htmlTable = values
    .map((row, index) => {
      if (index == 0) return createTableRow_(row, true);
      return createTableRow_(row, false);
    })
    .join("\n");
  return `<table>${htmlTable}</table>`;
}

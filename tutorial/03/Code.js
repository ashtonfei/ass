/**
 * Special trigger in Apps Script which will be called when a document opens
 */
function onOpen() {
  // call function here to update the file name
  updateFileName_();
}

/**
 * The hidden function to update the current Spreadsheet name by adding current
 * timestamp
 */
function updateFileName_() {
  // get the active Spreadsheet
  const ss = SpreadsheetApp.getActive();

  // get the name of the active Spreadsheet,
  // use let here because we'll need to mutate the name later
  let name = ss.getName();

  // the timestamp format: M - month, m: minute
  const datetimeFormat = "ddMMyy hh:mm:ss";

  // get the current datetime value
  const now = new Date();

  // get the script timezone which can be defined in the project settings or
  // appsscript.json file
  const timezone = Session.getScriptTimeZone();

  // get the formatted timestamp for using the Utilities API
  const timestamp = Utilities.formatDate(now, timezone, datetimeFormat);

  // Check if the filename ends with a timestamp format
  if (/\d{6}\s\d{2}:\d{2}:\d{2}/.test(name)) {
    // If yes, replace the old one with the new one to create the new file name
    name = name.slice(0, name.length - datetimeFormat.length) + timestamp;
  } else {
    // If no, append the timestamp to the name to create new file name
    name = `${name} ${timestamp}`;
  }

  // finally, rename the Spreadsheet with the new file name
  ss.rename(name);
}

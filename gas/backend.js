
const SETTINGS = {
    APP_NAME: "GAS Vue Web App Template",
    DBID: "1ZlPaODaQXI4kgvbizq-XFLEdiFR55o5ABW0M9PKubZA",
}

function doGet(e) {
    const htmlOuput = HtmlService.createTemplateFromFile("index.html").evaluate()
    htmlOuput.setTitle(SETTINGS.APP_NAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag("viewport", "width=device-width,initial-scale=1")
    return htmlOuput
}

function include(filename) {
    return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

function createUser(data) {
    // sotre your user in a spreadsheet or somewhere else
    const ss = SpreadsheetApp.openById(SETTINGS.DBID)
    const userTable = ss.getSheetByName("user")
    userTable.appendRow(data)
    return {user: data[0], email: data[1], id: 100}
}
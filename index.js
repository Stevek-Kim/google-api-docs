// npm install - whole googleapis
$ npm install googleapis

// import as Obj
const {google} = require('googleapis');

// create google sheet auth
const auth = new google.auth.GoogleAuth({ 
  keyFile: "credentials.json",  
  scopes: "https://www.googleapis.com/auth/spreadsheets", 
});

// Create client instance for auth
 const client = auth.getClient();


 // Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client });
const spreadsheetId = "192Odsm4rsz3cKVDJtwN6qrlKnN1Q4K8C7mZLXHH9efo";

// read from the google sheet.

// read the whole date from the seet.
  const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Bookings!A2:lastColumn"
      })

  
  const getArrayOfBookNums = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      majorDimension: "COLUMNS", // --> set values into an arry(all data in one array) from data and read
      majorDimension: "ROWS", // --> set values into arrays(one row one array) from data and read
      range: "Bookings!A2:A", // --> from A2 to the lastRow
      range: "Bookings!A2:2", // --> from A2 to the lastColumn
    })
  console.log(getArrayOfBookNums.data.values) // --> get values from the range

    const newArray = await getArrayOfBookNums.data.values.map((element)=>{return element[0]})
    const rowIndex = await newArray.indexOf(data.bookNum)+2



// write to the google sheet.
// update > set values to the specific range.   append > set values to the lastRow from the specific cell
  const getArrayOfBookNums = await googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: "Bookings!A2:A" // --> from A2 to the lastRow
      valueInputOption: 'USER_ENTERED',
      resource: {
        values:[
          ["Item", "Cost", "Stocked", "Ship Date"],
          ["Wheel", "$20.50", "4", "3/1/2016"],
          ["Door", "$15", "2", "3/15/2016"],
          ["Engine", "$100", "1", "3/20/2016"],
          ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"] // --> you can write google sheet functions directly.
        ]
      }
    })

    






  

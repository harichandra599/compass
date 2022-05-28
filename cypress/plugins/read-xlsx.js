const fs = require('fs');
const XLSX = require('xlsx');

const read = ({file, sheet, JSONFilepath}) => {
   const buf = fs.readFileSync(file);
   const workbook = XLSX.read(buf, { type: 'buffer' });
   const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
   fs.writeFileSync(JSONFilepath,JSON.stringify(rows, null, 4), "utf-8");
   return rows
}

module.exports = {
   read,
}
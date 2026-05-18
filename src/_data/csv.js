const fs = require('fs');
const path = require('path');

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"') {
        if (next === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(field.trim());
        field = '';
      } else if (ch === '\n' || (ch === '\r' && next === '\n')) {
        row.push(field.trim());
        if (row.length > 0 && row.some(c => c !== '')) {
          rows.push(row);
        }
        row = [];
        field = '';
        if (ch === '\r') i++;
      } else if (ch === '\r') {
        row.push(field.trim());
        if (row.length > 0 && row.some(c => c !== '')) {
          rows.push(row);
        }
        row = [];
        field = '';
      } else {
        field += ch;
      }
    }
  }

  row.push(field.trim());
  if (row.length > 0 && row.some(c => c !== '')) {
    rows.push(row);
  }

  if (rows.length === 0) return [];

  const headers = rows[0];
  const result = [];

  for (let r = 1; r < rows.length; r++) {
    const obj = {};
    const cols = rows[r];
    for (let c = 0; c < headers.length; c++) {
      obj[headers[c]] = cols[c] !== undefined ? cols[c] : '';
    }
    result.push(obj);
  }

  return result;
}

function readCSV(filename) {
  const filePath = path.join(__dirname, 'csv', filename);
  const text = fs.readFileSync(filePath, 'utf-8');
  return parseCSV(text);
}

module.exports = { readCSV };

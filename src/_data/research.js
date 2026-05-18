const { readCSV } = require('./csv');

module.exports = function() {
  return {
    areas: readCSV('areas.csv').map(a => ({
      ...a,
      tags: a.tags ? a.tags.split(';').map(t => t.trim()) : []
    })),
    applications: readCSV('applications.csv'),
  };
};

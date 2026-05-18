const { readCSV } = require('./csv');

const sortByName = (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });

module.exports = function() {
  const allStudents = readCSV('students.csv');

  return {
    faculty: readCSV('faculty.csv'),
    currentStudents: {
      phd: allStudents.filter(s => s.status === 'current' && s.level === 'phd').sort(sortByName),
      msc: allStudents.filter(s => s.status === 'current' && s.level === 'msc').sort(sortByName),
      undergrad: allStudents.filter(s => s.status === 'current' && s.level === 'undergrad').sort(sortByName),
    },
    alumni: {
      phd: allStudents.filter(s => s.status === 'alumni' && s.level === 'phd').sort(sortByName),
      msc: allStudents.filter(s => s.status === 'alumni' && s.level === 'msc').sort(sortByName),
      undergrad: allStudents.filter(s => s.status === 'alumni' && s.level === 'undergrad').sort(sortByName),
    },
    collaborators: readCSV('collaborators.csv').sort(sortByName),
  };
};

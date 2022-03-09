const outputTemplate = require('./timemarch_list.hbs');

/*
# type      totaltime          timestep       accuracy      pseudocycles
*/

const COLUMN_SPACING = 5;

module.exports = function convert(dataModel) {
  const results = {};
  // Start with a standard header
  const lines = [['# type  ', 'totaltime  ', 'timestep  ', 'accuracy  ', 'pseudocycles']];

  dataModel.data.timemarcher.forEach((attributes) => {
    const timemarch = {};
    Object.keys(attributes.timemarch).forEach((fieldName) => {
      const value = attributes.timemarch[fieldName].value;
      if (value.length === 1) {
        timemarch[fieldName] = value[0];
      } else {
        timemarch[fieldName] = value;
      }
    });
    lines.push([
      `${timemarch.type}`,
      `${timemarch.totaltime}`,
      `${timemarch.timestep}`,
      `${timemarch.accuracy}`,
      `${timemarch.pseudocycles}`,
    ]);
  });

  // Compute max size of each column
  const sizes = [0, 0, 0, 0, 0];
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    for (let tokenIdx = 0; tokenIdx < line.length; tokenIdx++) {
      sizes[tokenIdx] = Math.max(sizes[tokenIdx], line[tokenIdx].length);
    }
  }

  // Add padding to align columns
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    for (let tokenIdx = 0; tokenIdx < line.length; tokenIdx++) {
      while (line[tokenIdx].length < sizes[tokenIdx] + COLUMN_SPACING) {
        line[tokenIdx] += ' ';
      }
    }
    // collapse tokens
    lines[lineIdx] = { line: lines[lineIdx].join('') };
  }

  // Use dummy line writer
  results['timemarch_list.osc'] = outputTemplate({ lines });

  return { results, model: dataModel };
};

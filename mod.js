// parse CSV from string
export default (str) => {
  let columnNames
  const arr = []
  str.split('\n').forEach((line, index) => {
    const columns = line.split(',')
    if (index === 0) {
      columnNames = columns
    } else {
      const result = {}
      columnNames.forEach((columnName, index) => {
        result[columnName] = columns[index]
      })
      arr.push(result)
    }
  })
  return arr
}

const fs = require('fs')
const path = require('path')

const getFileList = (filePath, exclude = []) => {
  const dirAndFileList = []
  readdirOrfile(filePath, exclude, dirAndFileList)
  return dirAndFileList
}

const readdirOrfile = (filePath, exclude = [], list) => {
  // const dirAndFile = {
  //   dir: "",
  //   file: [],
  // };
  const files = fs.readdirSync(filePath)
  files
    .filter((filename) => !exclude.includes(filename))
    .forEach((filename) => {
      const fileDir = path.join(filePath, filename)
      const stats = fs.statSync(fileDir)
      const isFile = stats.isFile()
      const isDir = stats.isDirectory()
      if (isFile) {
        list.forEach((obj) => {
          const filePathWithNoFilename = getFilePathWithNoFilename(fileDir)
          if (filePathWithNoFilename === obj.dir) {
            obj.file.push(fileDir)
          }
        })
      } else if (isDir) {
        const obj = {
          dir: fileDir,
          file: [],
        }
        list.push(obj)
        readdirOrfile(fileDir, exclude, list)
      }
    })
}

const getFilePathWithNoFilename = (path) => {
  const arr = path.split('/')
  arr.pop()
  const pathWithNoFilename = arr.join('/')
  return pathWithNoFilename
}

module.exports = getFileList

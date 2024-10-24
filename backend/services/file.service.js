const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const BaseError = require("../errors/base.error");

class FileService {
  save(file) {
    try {
      const fileName = `${uuidv4()}.jpg`;
      const currentDir = __dirname;
      const staticDir = path.join(currentDir, "..", "static");
      const filePath = path.join(staticDir, fileName);

      if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir, { recursive: true });
      }

      file.mv(filePath);

      return fileName;
    } catch (error) {
      throw BaseError.BadRequest("Error saving file!");
    }
  }

  delete(fileName) {
    try {
      const filePath = path.join(__dirname, "..", "static", fileName);
      fs.unlinkSync(filePath);
    } catch (error) {
      throw BaseError.BadRequest("Error deleting file!");
    }
  }
}

module.exports = new FileService();

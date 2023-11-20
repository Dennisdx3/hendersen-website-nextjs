import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "public/db/db.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData.toString());

    // console.log(objectData[1]);

    res.json(objectData);
  } else if (req.method === "POST") {
    // Code for POST requests goes here
    try {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData.toString());

      // Get the data from the request body
      const { id, title, date, image_link, html_link } = req.body;

      // Add the new data to the object
      const newData = {
        id,
        title,
        date,
        image_link,
        html_link,
      };

      objectData.push(newData);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(201).json({ message: "Data stored successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error storing data" });
    }
  }
}

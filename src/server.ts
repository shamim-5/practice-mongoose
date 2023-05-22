import app from "./app";
import mongoose from "mongoose";

const port: number = 5000;

// database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`\u{1F4F1}Database connection successful!`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

bootstrap();

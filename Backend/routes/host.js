const express = require("express");
const Router = express.Router();
const teacher = require("../models/teacher");
const fetchUser = require("../middleware/fetchUserr");
const QuizCounter = require("../models/quiz_count");
const dashboard = require("../models/dashboard");
const leaderboard = require("../models/leaderboard");

// ROUTE 1: Create a Quiz using:POST "/api/host/createquiz".
Router.post("/createquiz", fetchUser, async (req, res) => {
  try {
    await QuizCounter.updateOne(
      { _id: "6547ba752a935f3835211124" },
      {
        $inc: { value: 1 },
        $currentDate: { lastModified: true },
      }
    );
    let counter = await QuizCounter.findById("6547ba752a935f3835211124");
    const quiz_id = counter.value;
    const quizObj = {
      ...req.body,
      quiz_id: counter.value,
      creator_id: req.user.id,
    };
    quiz = await teacher.create(quizObj);
    res.json({ quiz_id });

    //update dashboard
    const id = req.user.id;

    let id_check = await dashboard.findById(id);

    const newHost = {
      quiz_name: req.body.quiz_name,
      no_of_question: req.body.no_of_question,
      duration: req.body.duration,
      quiz_id: counter.value,
    };

    try {
      if (id_check == null) {
        await dashboard.create({ _id: id }, { join: [] }, { host: [newHost] });
      } else {
        await dashboard.updateOne({ _id: id }, { $push: { host: newHost } });
      }
    } catch (error) {
      console.log(error);
    }

    //Create LeaderBoard for each quiz
    try {
      await leaderboard.create({
        creater_id: id,
        quiz_id: counter.value,
        quiz_name: req.body.quiz_name,
        candidate: [],
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = Router;

{
  /*
//Unique no Generator (6-digit)
async function generateUniqueNumber() {
  let randomNum = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number

  try {
    //Checking that it already exist or not
    const existingNumber = await teacher.findOne({ quiz_id: randomNum });
    if (existingNumber) {
      // If the number already exists, generate a new one recursively
      return generateUniqueNumber();
    } else {
      // If the number is unique, return it
      return randomNum;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

*/
}

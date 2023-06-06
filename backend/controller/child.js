const Child = require('../models/childSchema');


function calculateAgeFromDOB(dobString) {
  const dob = new Date(dobString);
  const currentDate = new Date();
  const age = currentDate.getUTCFullYear() - dob.getUTCFullYear();
  const hasNotHadBirthday = (
    currentDate.getUTCMonth() < dob.getUTCMonth() ||
    (currentDate.getUTCMonth() === dob.getUTCMonth() && currentDate.getUTCDate() < dob.getUTCDate())
  );
  const finalAge = hasNotHadBirthday ? age - 1 : age;
  return finalAge;
}

exports.insertChildData = async (req, res) => {

  console.log(req.body);
  var age = calculateAgeFromDOB(req.body.dateOfBirth);
  console.log(age);

  var cnt = await Child.count({}) + 1;

  if (cnt < 9)
    cnt = "000" + cnt;
  else if (cnt < 99)
    cnt = "00" + cnt;
  else if (cnt < 999)
    cnt = "0" + cnt;

  var caseNumber = "BAT" + "/" + cnt;

  req.body.age = age;
  req.body.caseNumber = caseNumber;
  req.body.childClassification = "Abandoned";

  console.log(req.body);

    try {
        const newChild = new Child(req.body);
        const savedChild = await newChild.save();
        res.status(200).json(savedChild);
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
      }
};

exports.updateChildData = async (req, res) => {

  try {

  } catch (error) {

  }

};

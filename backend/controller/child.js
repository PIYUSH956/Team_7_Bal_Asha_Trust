const Child = require('../models/childSchema');


function calculateAge(birthdate) {
  
  var today = new Date();
  var birthdate = new Date(birthdate);

  var age = today.getFullYear() - birthdate.getFullYear();

  var monthDiff = today.getMonth() - birthdate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
    monthDiff += 12;
  }

  return age + " years and " + monthDiff + " months";
}

exports.insertChildData = async (req, res) => {


  var age = calculateAge(req.body.dateOfBirth);
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
  req.body.childClassification = "abandoned";
  console.log(age);


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


exports.getChildData = async (req, res) => {

  console.log(req.body);
  try {

    if (req.body.status != null) {
      const data = await Child.find({ status: req.body.status }).select("-image");
      console.log(data);
      return res.status(200).json(data);
    }else if(req.body._id != null){
      const data = await Child.find({ _id: req.body._id }).select("-image");
      console.log(data);
      return res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);

    return res.status(401).json(error.message);
  }

};


// IMP
exports.getChildDataWithImage = async (req, res) => {

  console.log(req.body);
  try {
      const data = await Child.find({ _id: req.body._id })
      console.log(data);
      return res.status(200).json(data);
  
  } catch (error) {
    console.log(error);
    return res.status(401).json(error.message);
  }

};



// IMP
exports.getAllChildData = async (req, res) => {

  console.log(req.body);
  try {

   
      const data = await Child.find({ });
      return res.status(200).json(data);
   
  } catch (error) {
    console.log(error);

    return res.status(401).json(error.message);
  }

};

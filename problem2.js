function averageMarks (biology,chemistry,mathMatics,physics) {
    const totalSubjectMarks = biology + chemistry + mathMatics + physics;
    const average = totalSubjectMarks/4;
    return average;
};


const biology = 80;
const chemistry = 70;
const mathMatics = 50;
const physics = 90;


const getAverage = averageMarks(biology,chemistry,mathMatics,physics);
console.log(getAverage);
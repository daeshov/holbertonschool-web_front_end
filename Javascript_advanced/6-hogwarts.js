function studentHogwarts() {
  let privateScore = 0;
  let name = null;
  function changeScoreBy(points) {
    privateScore += points;
  }
  
  return {
    setName: function(newName){
      newName = name;
    },
    rewardStudent: function() {
      changeScoreBy(1);
    },
    penalizeStudent: function() {
      changeScoreBy(-1);
    },
    getScore: function() {
      return   `${name}: ${privateScore}`;
    }
  }
}

let harry = studentHogwarts();
harry.setName('harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('draco');
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());



const INDEX_X = 0;
const INDEX_Y = 1;
let isXupdated = false;
let isYupdated = false;
let pointer = INDEX_Y;

function trackRobot(...steps: any[]) {
  let coordinates = [0, 0];

  steps.map((item) => {
    if (isXupdated && isYupdated) {
      if (pointer == INDEX_Y) {
        coordinates[pointer] = coordinates[pointer] - item;
        pointer = INDEX_X;
      } else if (pointer == INDEX_X) {
        coordinates[pointer] = coordinates[pointer] - item;
        pointer = INDEX_Y;
      }
    } else {
      if (!isYupdated) {
        coordinates[pointer] = item;
        pointer = INDEX_X;
        isYupdated = true;
      } else if (!isXupdated) {
        coordinates[pointer] = item;
        pointer = INDEX_Y;
        isXupdated = true;
      }
    }
  });

  console.log(coordinates);
}

trackRobot(20, 30, 10, 20, 10, 20);
trackRobot();

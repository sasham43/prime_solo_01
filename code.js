var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// Step 1

var step1 = 'Months listed are';

for(var i = 0; i < stringList.length; i++){
  if(i === stringList.length-1){
    step1 = step1 + ' ' + stringList[i] + '.';
  } else {
    step1 = step1 + ' ' + stringList[i] + ',';
  }
}

console.log('Step 1:', step1);

// Step 2

var numListlast = numList.length-1;

console.log('Step 2:', numList[numListlast]);

// Step 3

var step3 = '';

for(var j = 0; j < numList.length; j++){
  step3 = step3 + ' ' + numList[j];
}

console.log('Step 3:', step3);

// Step 4

var step4 = 0;

for (var k = 0; k < numList.length; k++){
  step4 += numList[k];
}

console.log('Step 4:',step4);

// Step 5

var step5 = 0;

if(boolList[1]){
  step5 =  numList[0] + numList[numList.length-1];
} else {
  step5 = numList[1] * numList[1];
}

console.log("Step 5:", step5);

// Step 6

for (var n = 0; n < boolList.length; n++){
  if (boolList[n]){
    console.log('Step 6.' + n + ':', numList[n]);
  }
}

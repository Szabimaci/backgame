var statesArrayP1 = [];
var statesArrayP2 = [];
//var stateArrayNew = [];
//var stateArrayNew2 = [];
var stateArrayStart = [0,2,0,0,0,0,-5,0,-3,0,0,0,5,-5,0,0,0,3,0,5,0,0,0,0,-2,0];
//var dice1 = 3;
//var dice2 = 5;
 
/*function examineMoves2(dice, stateArrayInner) { 
	//document.getElementById("newstates2").innerHTML = "";
  var i, j, k, m;                    
  //var infoRow;
  var validMoves = new Array();
  stateArrayInnerNew = arrayEqualizer(stateArrayInner);
  for (i = 1; i < (stateArrayInner.length - 1 - dice); i++) {
    if (stateArrayInner[i] > 0){
      if (isValidMoveP1(i, dice, stateArrayInner)){
        stateArrayInnerNew[i] -= 1; 
        if (stateArrayInnerNew[i+dice] == -1) stateArrayInnerNew[i+dice] += 2; else stateArrayInnerNew[i+dice] += 1;
        //validMoves[i] = 1;
      }  
    }
  } 
  return stateArrayInnerNew;
}

function moves(dice1, dice2, stateArrayStart){
  stateArrayNew = examineMoves(dice1, stateArrayStart);
  stateArrayNew = examineMoves(dice2, stateArrayNew);

}*/

/* function examineMoves2(dice1, dice2, stateArrayInner) { 
  document.getElementById("newstates2").innerHTML = "";
  var i, j, k, m;                    
  var infoRow;
  stateArrayInnerNew = arrayEqualizer(stateArrayInner);
  for (i = 1; i < (stateArrayInner.length - 1 - dice1); i++) {
    if (stateArrayInner[i] > 0){
      if (isValidMoveP1(i, dice1, stateArrayInner)){
        stateArrayInnerNew[i] -= 1; 
        if (stateArrayInnerNew[i+dice1] == -1) stateArrayInnerNew[i+dice1] += 2;
        else stateArrayInnerNew[i+dice1] += 1;
        examineMoves2(dice1, dice2, stateArrayInnerNew)
      }  
    }
  }
} */

function examineMoves() {
	var i, j, k;
	/*for (i = 1; i < 7; i++) {
		for (j = 1; j < 7; j++) {
			//document.getElementById("newstates").innerHTML += i + " | " + j + " :\n";
  		examineMovesP1(i, j, stateArrayStart);
		}
	}*/
	examineMovesP1(1, 1, stateArrayStart);
	console.log(statesArrayP1.length);
	var filteredStatesArrayP1 =  filterStatesArray(statesArrayP1);
	console.log(filteredStatesArrayP1.length);
	for (k = 0; k <filteredStatesArrayP1.length; k++) {
		document.getElementById("newstates").innerHTML += k + " :\n";
		for (i = 1; i < 7; i++) {
			for (j = 1; j < 7; j++) {
				//document.getElementById("newstates").innerHTML += i + " | " + j + " :\n";
				examineMovesP2(i, j, filteredStatesArrayP1[k]);
			//console.log(i, j);
			}
		}
	}
	console.log(statesArrayP2.length);
	var filteredStatesArrayP2 =  filterStatesArray(statesArrayP2);
	console.log(filteredStatesArrayP2.length);
		
	//selection();
}

function filterStatesArray(arrayToFilter){
	var i, j;
	var str1, str2;
	for (i = 0; i <arrayToFilter.length-1; i++) {
		document.getElementById("newstates2").innerHTML += i + " :\n";
		for (j = i + 1; j <arrayToFilter.length; j++) {
			str1 = arrayToFilter[i].join("");
			str2 = arrayToFilter[j].join("");
			//console.log(str1, str2)
			if (str1 == str2) {
				//statesArray[j][0] = 100; //fruits.splice(2, 1);
				arrayToFilter.splice(j,1); //fruits.splice(2, 1);
				//console.log(i, j, str1, str2);
			}
		}
	}
	return arrayToFilter;
}

function selection() {
	var i, j;
	var str1, str2;
	for (i = 0; i <statesArray.length-1; i++) {
		for (j = i + 1; j <statesArray.length; j++) {
			//if (statesArray[i] === statesArray[j]) statesArray[j][0]=100; //fruits.splice(2, 1);
			str1 = statesArray[i].join("");
			str2 = statesArray[j].join("");
			//console.log(str1, str2)
			if (str1 == str2) {
				//statesArray[j][0] = 100; //fruits.splice(2, 1);
				statesArray.splice(j,1); //fruits.splice(2, 1);
				//console.log(i, j, str1, str2);
			}
		}
	}
	console.log(statesArray);
	/*j = 0;
	for (i = 0; i <statesArray.length; i++) {
		if (statesArray[i][0] == 0) j += 1;
	}
	console.log(j);*/
	console.log(statesArray.length);
}

function examine(){
	examineMovesP2(1, 1, stateArrayStart);
}

function examineMovesP1(dice1, dice2, stateArray) {
  //document.getElementById("newstates").innerHTML = "";
  var i, j, k, m;
  var infoRow;
  var stateArrayNew = arrayEqualizer(stateArray);
  for (i = 1; i < (25 - dice1); i++) {
    if (stateArray[i] > 0){
      if (isValidMoveP1(i, dice1, stateArray)){
        stateArrayNew[i] -= 1; 
        if (stateArrayNew[i+dice1] == -1) stateArrayNew[i+dice1] += 2;
        else stateArrayNew[i+dice1] += 1;
        
        var stateArrayNew2 = arrayEqualizer(stateArrayNew);
        for (k = 1; k < (25 - dice2); k++) {
          if (stateArrayNew[k] > 0){
            if (isValidMoveP1(k, dice2, stateArrayNew)){
              stateArrayNew2[k] -= 1; 
              if (stateArrayNew2[k+dice2] == -1) stateArrayNew2[k+dice2] += 2;
              else stateArrayNew2[k+dice2] += 1;
              infoRow = i + "->" + (i+dice1) + ", " + k + "->" + (k+dice2) + ": " + stateArrayNew2 +"\n";
              //document.getElementById("newstates").innerHTML += infoRow;
              statesArrayP1.push(stateArrayNew2);  //array containing the possible states
							stateArrayNew2 = arrayEqualizer(stateArrayNew);
            }
          }
        } // isValidMoveP1(i, dice1, stateArray))
        stateArrayNew = arrayEqualizer(stateArray);
      }
    }
  }
  document.getElementById("state").innerHTML = stateArray;
}

function examineMovesP2(dice1, dice2, stateArray) {
  //document.getElementById("newstates").innerHTML = "";
  var i, j, k, m;
  var infoRow;
  var stateArrayNew = arrayEqualizer(stateArray);
  for (i = 24; i > (0 + dice1); i--) {
    if (stateArray[i] < 0){
      if (isValidMoveP2(i, dice1, stateArray)){
        stateArrayNew[i] += 1; 
        if (stateArrayNew[i-dice1] == 1) stateArrayNew[i-dice1] -= 2;
        else stateArrayNew[i-dice1] -= 1;
        
        var stateArrayNew2 = arrayEqualizer(stateArrayNew);
        for (k = 24; k > (0 + dice2); k--) {
          if (stateArrayNew[k] < 0){
            if (isValidMoveP2(k, dice2, stateArrayNew)){
              stateArrayNew2[k] += 1; 
              if (stateArrayNew2[k-dice2] == 1) stateArrayNew2[k-dice2] -= 2;
              else stateArrayNew2[k-dice2] -= 1;
              infoRow = i + "->" + (i-dice1) + ", " + k + "->" + (k-dice2) + ": " + stateArrayNew2 +"\n";
              //document.getElementById("newstates").innerHTML += infoRow;
              statesArrayP2.push(stateArrayNew2);
							stateArrayNew2 = arrayEqualizer(stateArrayNew);
            }
          }
        } // isValidMoveP1(i, dice1, stateArray))
        stateArrayNew = arrayEqualizer(stateArray);
      }
    }
  }
  document.getElementById("state").innerHTML = stateArray;
}

function arrayEqualizer(array1) {  
  var j;
  var array2 = []; 
  for (j = 0; j < array1.length; j++) {
    array2[j] = array1[j];
  } 
  return array2;
}

function newStateP1(dice1, dice2) {
  var i;
  //stateArrayNew = stateArray;
  for (i = 0; i < 26; i++) {
		stateArrayNew[i] = stateArray[i];
  }
  //document.getElementById("state").innerHTML = stateArray;
  //document.getElementById("statenew").innerHTML = stateArrayNew;
  for (i = 1; i < 24; i++) {
    if (stateArray[i] > 0){
      if (isValidMoveP1(i, dice1)){
        stateArrayNew[i] -= 1; 
        if (stateArrayNew[i+dice1] == -1) stateArrayNew[i+dice1] += 2;
        else stateArrayNew[i+dice1] += 1;
        break;  
      }
    }
  }
  document.getElementById("state").innerHTML = stateArray;
  document.getElementById("statenew").innerHTML = stateArrayNew;
}       

function newStateP2(dice1, dice2) {
  var i;
  //stateArrayNew = stateArray;
  for (i = 0; i < 26; i++) {
		stateArrayNew[i] = stateArray[i];
  }
  for (i = 24; i < 2; i--) {
    if (stateArray[i] < 0){
      if (isValidMoveP2(i, dice1)){
        stateArrayNew[i] += 1; 
        if (stateArrayNew[i-dice1] == 1) stateArrayNew[i-dice1] -= 2;
        else stateArrayNew[i+dice1] -= 1;
        break;  
      }
    }
  }
  document.getElementById("state").innerHTML = stateArray;
  document.getElementById("statenew").innerHTML = stateArrayNew;
}

function isValidMoveP1(placeFrom, diceValue, stateArray) {
  var placeTo;
  placeTo = placeFrom + diceValue;
  if (stateArray[placeTo] > -2) return true; 
  else return false;  
}
         
function isValidMoveP2(placeFrom, diceValue, stateArray) {
  var placeTo;
  placeTo = placeFrom - diceValue;
  if (stateArray[placeTo] < 2) return true; 
  else return false;  
}

function doit() {
  document.getElementById("state").innerHTML = stateArray;
  sumBalanceP1();
  sumBalanceP2();  
}

function sumBalanceP1() {
  var i, sum, sumToken;
  sum = 0;         
  sumToken = 0;
  for (i = 1; i < 25; i++) {
		if (stateArray[i] > 0) {
      sum += (25 - i) * stateArray[i];
      sumToken += stateArray[i];
    }
  }
  document.getElementById("sumP1").innerHTML = sumToken + ": " + sum;
}      

function sumBalanceP2() {
  var i, sum, sumToken;
  sum = 0;
  sumToken = 0;
  for (i = 1; i < 25; i++) {
	  if (stateArray[i] < 0) {
      sum += (i) * stateArray[i];
      sumToken += stateArray[i];
    }
	}
  document.getElementById("sumP2").innerHTML = sumToken + ": " + sum;
}
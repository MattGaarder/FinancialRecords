var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099],
    ];


// This just logs the total number of elements there are in the array 'finances',
// each element is a different month so we know that 86 is the total number of months being referenced.

console.log(finances.length)


// This creates a variable for the total amount of losses and profits. 
// I iterated through the length of the finances array, adding the second element of each array to the total thus getting the total of all profits and losses. 

var total = 0;
for(var i=0; i < finances.length; i++){
    total += finances[i][1];
}

console.log(total);

// I now need to find the average of the changes for all the months. To do this I need to create an array that tracks all the changes.
// I then need find the total for these changes and divide this by the number of changes there have been. 

// I am going to do this by creating an empty array called changes. And a variable called change.

var changes = [];
var change;

// I am then going to push the first change of the finances array to this array. 
// This would be finances[1][1] - finances[0][1] for the first difference in profit. 
// I then need to iterate this calculation for the length of the array. 
// This would look something like: for (var i=0; i < finances.length; i++) {
// change = finances [i+1][i+1] - finances [i][i+1]; changes.push(change)   
// }

// for (var i=0; i < finances.length; i++) {
//     change = finances [i+1][1] - finances [i][1]; changes.push(change)
//     }

//     console.log(changes);


// The reason we were getting error for the above code is that when we do i+1 it goes beyond the length of the array so the system is not able to find any value and gives us an error.
// So we have to create another variable and avoid going beyond the scope of the array with i+1. 

var net = 0;


for (var i = 0; i < finances.length; i++) {
    change = finances[i][1] - net;
    net = finances[i][1];
    changes.push(change);
}
console.log(changes);

// In the above code the first iteration is: change = finances [i(0)][1]/867884 - 0 = 867884
// net is then assigned as 867884
// So the next iteration becomes change = finances [1][1]/984655 - net (assigned as finances [0][1]/867884 = 116771 (this is the correct first value for real change)
// The only problem is that the first push into changes is finances[0][1] - 0, which isn't actually a change, so have to change this somehow.
// I will try figure this out later.

// The next step is to get the total of all the changes and divide this by the number of months by creating a new variable and dividing my the total number of months calculated above:

var totalChanges = 0;

for (i = 0; i < changes.length; i++) {
    totalChanges += changes[i]
}

console.log((totalChanges - finances[0][1])/(finances.length - 1));

// So I think this is probably a really ugly way of getting to the solution. But I am removing the first undesirable result in my changes array by subtracting it from totalChanges.
// I am also subtracting 1 from the number of months because I am trying to find the average of the changes between months, not the number of months.


// I now need to find the greatest increase, and the greatest decrease in profit.

// let max = Math.max.apply(null, changes);
// console.log(max);

// let min = Math.min.apply(null, changes);
// console.log(min);

// The above approach is fine for just returning the smallest, and the largest number in the changes array, but is not helpful for returning the month, or what index in the array this number was derived. 
// I think a better way would be to iterate through the array again, and store the largest value found in a new variable called max. 

// I've also realised that a much simpler and cleaner solution to what I though was ugly code above is just to start of i at 1, and have the first element of the second array element start at i - 1. 
// I think this would also remove the need to introduce a whole other 'net' variable above. But seeing as I've done it already, I'll leave it be. 

var max = 0;
var maxIndex = -1;

for (i=1; i < finances.length; i++){
    let difference = finances[i][1] - finances [i-1][1] 
    if (difference > max) {
        max = difference;
        maxIndex = i
    }
}

console.log(maxIndex);
console.log(finances[maxIndex][0])
console.log(max);


// For the second part, it is just the same but with storing the minimum 

var min = 0;
var minIndex = -1;

for (i=1; i < finances.length; i++){
    let difference = finances[i][1] - finances [i-1][1] 
    if (difference < min) {
        min = difference;
        minIndex = i
    }
}

console.log(minIndex);
console.log(finances[minIndex][0])
console.log(min);


// To add all these results to the the HTML page we need to use below functions 

document.getElementById("monthTotal").innerHTML = finances.length

document.getElementById("netProfit").innerHTML = total

document.getElementById("averageProfit").innerHTML = (totalChanges - finances[0][1])/(finances.length - 1)

document.getElementById("maxProfitMonth").innerHTML = finances[maxIndex][0]

document.getElementById("maxProfitAmount").innerHTML = max

document.getElementById("minProfitMonth").innerHTML = finances[minIndex][0]

document.getElementById("minProfitAmount").innerHTML = min






// var change = 0;
// var changes = [];

// for (let i=0; i < changes.length; i++){
//     change = (finances[i+1][1]-finances[i][1]);
//     changes.push(change);
// }

// var totalChanges;
// var averageChange;
// for (var i=0; i< changes.length; i++){
//     totalChanges = total + changes[i]
// }



// find the average of the changes in profit losses over the entire period. 
// var changes = (finances [0][1] - finances [1][1]) 
// + (finances [1][1] - finances [2][1]) 
// + (finances [2][1] - finances [3][1])

// to iterate 
// for (let i=0; i < finances.length; i++){
// changes = finances [i+1][1] - finances[i][1];
//  }

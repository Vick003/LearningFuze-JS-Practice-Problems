/* https://github.com/Learning-Fuze/practice-problems */

/* One to Multi */
function groupArray(list) {
    var strings = [],
        numbers = [],
        booleans = [],
        nulls = [],
        undefineds = [],
        objects = [],
        master_array = [strings, numbers, booleans, nulls, undefineds, objects],
        current_element,
        current_element_data_type,
        len = list.length;
    
    for (var i = 0; i < len; i++) {
        current_element = list[i];
        current_element_data_type = typeof current_element;
        switch (current_element_data_type) {
        case "string":
            strings.push(current_element);
            break;
        case "boolean":
            booleans.push(current_element);
            break;
        case "number":
            numbers.push(current_element);
            break;
        case "null":
            nulls.push(current_element);
            break;
        case "undefined":
            undefines.push(current_element);
            break;
        default:
            objects.push(current_element);
        }
    }
    return master_array;
}

/* End of 'One to Multi'*/

/* Bigger Words */
    
function bigger_words(word, list) {
    var word_length = word.length,
        list_length = list.length,
        output_array = [],
        counter = 0;
       
    while (counter < list_length) {
        if(list[counter].length > word_length) {
            output_array.push(list[counter]);
        }
        counter++;
    }
    return output_array;
};

/* End of Bigger Words */

/* Total Reverse */

  function arrayReverse(list) {
      var len =list.length,
          reversed_array = [];
      for (var i=len-1; i>=0; i--) {
        reversed_array.push(list[i]);
      }
      return reversed_array;
  }

/* End of Total Reverse */


/* Sort Array and make it in Alphabetical Order */

/*

procedure bubbleSort( A : list of sortable items )
   n = length(A)
   repeat 
     swapped = false
     for i = 1 to n-1 inclusive do
      if this pair is out of order 
       if A[i-1] > A[i] then
         /* swap them and remember something changed 
         swap( A[i-1], A[i] )
         swapped = true
       end if
     end for
   until not swapped
end procedure

*/

/* End of Sort Array */

function bubbleSort(list) {
    var len = list.length,
        first,
        second,
        swapped = false;
    for(var i=0; i<len; i++) {
        if(list[i] >= list[i+1]){
            first = list[i+1];
            second = list[i];
            list[i] = first;
            list[i+1] = second;
            swapped = true;
        }
    }
    return list;
}  

/* End of Sort Array */


/* FizzBuzz*/
function fizzBuzz() {
    for(var i=1; i<=100; i++){
        if(i%15==0){
            console.log("FizzBuzz");
        }
        else if (i%3==0) {
            console.log("Fizz");
        }
        else if (i%5==0){
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }

}

/* End of FizzBuzz */


/* Spirals */

function fibSequence(n) {
    var fib_array = [0,1],
        counter = 2;
    while(counter <= n) {
        fib_array.push(fib_array[counter-2]+fib_array[counter-1]);
        counter++;
    }
    return fib_array;
}


/* End of Spirals*/


/* Pig Latin */

function translate_to_Piglatin(str) {
	var notVowel = /[^aeiou]/i,
        new_str = '',
        //split up words and put it in an array
        str_break_up = str.split(' '); 
    for (var i=0; i<str_break_up.length; i++) {
        var first_letter = str_break_up[i][0];
    	if(notVowel.test(str_break_up[i][0])) {
            console.log(notVowel.test(str_break_up[i][0]));
        	new_str += str_break_up[i].replace(notVowel, ' ')+first_letter+'ay';
            console.log(str_break_up);
        }
    }
    //new_str = new_str.join();
    console.log(new_str);
    return new_str;
}


/* End of Pig Latin*/









 // OBJECT CREATION
//  const rectangle ={
//     // property
//     length:2, 
//     breadth:4,

//     // behaviour - mehtod
//     draw:function(){  
//         console.log(`Drawing Rectangle `); 
//     }

//  };
// rectangle.length=6;
// object accessing
// console.log(rectangle.breadth);
// console.log(rectangle[`length`]);
// console.log(rectangle.draw());

//  let a ={}; // empty object created

 // factory function -> step1:create object step2: return object
//  function createRectangle(len,bread){
//     return rectangle ={
//         // property
//         length:len, 
//         breadth:bread,

//        // behaviour - mehtod
//         draw:function(){  
//             console.log(`Drawing Rectangle `); 
//         } 
//     };
   
//  }
//  console.log(createRectangle());


// let rectangle1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// console.log(rectangle1);

// Constructor Function-> Pascal Notation -> first letter of every word is capital => NumberOfStudents
// constructor function -> prop/methods -> initialise

function Rectangle(len,bred){
    this.length = len;
    this.breadth = bred;
    this.draw = function(){
        console.log(`Drawing Rectangle`);    
    }
}

// object creation using constructor function
let rectangleObject = new Rectangle();
console.log(rectangleObject);
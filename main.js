//now we are giving effects on display 
const display = document.querySelector(".display");    //----> this line will take the all enterd elements in calculator


//here we are takingg all btn's i/p's by help of below line 

const buttons = document.querySelectorAll(".btn");    //---> this line will take all btn actions.


//now we want add event listner to each button.

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.textContent);      //by the textContent we can take button values as inputs, u can see in browser's inspect option , in that select console and then u can press any button in calculator u will get exact elements in console panel.
        
        const buttonvalue = button.textContent; //in this we are storing all selected elements in buttonvalue
        

        // all clear effect
        if ( button.id === "c" || display.textContent === "Error!") { //---->this if stmt will work as if we press "C" the all elements will erased
            display.textContent = "0";  
            return;      //-------------->by this return stmt we can display "0" after clicking the "C".
        }

        //backspace effect

        if (button.id === "backspace"){
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            }else {
                display.textContent = display.textContent.slice(0,-1);  //-----> in this line we given backspace effect by using slice() method from 0 to -1.
               
            }
            return;     //----> by this return we can complete our backspace effet   
        }


        //in this one we added operations on elements
        if (button.id === "equal"){
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error!"
            }
          
            return;      //------> same return effect to not print id element
        }



        // display elements in the calculator
        if (display.textContent === "0" || display.textContent === "Error!"){
            display.textContent = buttonvalue;
        }else {
            display.textContent += buttonvalue;     // in this buttonvalue elements will be showed on display of the calculator
        }
        
        
    
    })
})

let elementVal, elementVal1, textbox, txtval, lastValue, currrentVal, LastIndex;
let prevValue, NextValue, ValIndex;
let myAraay = [];
function txtboxValue(elementVal1) 
{
     textbox = document.getElementById("TextInput");
     LastIndex = myAraay.lastIndexOf("/");
     console.log(LastIndex);
     if (myAraay.length == 0) {
          if (elementVal1 === "+" || elementVal1 === "x" || elementVal1 === "/") 
          {
          //--------Do nothing--------
          }
          else 
          {
               if(elementVal1 === ".")
               {
                    myAraay.push("0"+ elementVal1)
                    console.log(myAraay);
                    textbox.value += elementVal1;   
               }
               else
               {
               myAraay.push(elementVal1);
               console.log(myAraay);
               textbox.value += elementVal1;
               currrentVal = elementVal1;
               }
          }
     }
     else {

          if (elementVal1 === "+" || elementVal1 === "x" || elementVal1 === "/" || elementVal1 === "-") {
               if (currrentVal != "") 
               {
                  //-----Do nothing----- 
               }
               let arrayVal = myAraay[myAraay.length - 1];
               let stringValue = arrayVal.toString();
               if (arrayVal === "+" || arrayVal === "x" || arrayVal === "/" || arrayVal === "-") {

               }
               else {
                    if(stringValue.endsWith('.'))
                    {
                         myAraay[myAraay.length - 1] += "0";
                        // myAraay.push(elementVal1);   
                    }
                   
                    myAraay.push(elementVal1);                  
                    textbox.value += elementVal1;
                    currrentVal = "";
                    console.log(myAraay);
               }
          }
          else {
               if (myAraay.length == 1 && (myAraay[0] === "-" || myAraay[0] <= 0 || myAraay[0] >= 0)) 
               {
                    if(elementVal1 === "." && myAraay[0] === "-")
                         {
                              myAraay[0] += ("0" + elementVal1);  
                         }
                         else if (elementVal1 === "." && (myAraay[0] <= 0 || myAraay[0] >= 0))
                         {
                              if(myAraay[0].includes('.'))
                              {

                              }
                              else
                              {
                                   myAraay[0] += (elementVal1);  
                              }                           
                         }
                         else
                         {
                              myAraay[0] += elementVal1;
                         }
                    //myAraay[0] += elementVal1;
               }
               else if (myAraay.length > 1) {
                    let AtIndexArrayValue = myAraay[myAraay.length - 1];

                    if (AtIndexArrayValue === "+" || AtIndexArrayValue === "x" || AtIndexArrayValue === "/" || AtIndexArrayValue === "-") 
                    {
                         if(elementVal1 === ".")
                         {
                              myAraay.push("0" + elementVal1);  
                         }
                         else
                         {
                         myAraay.push(elementVal1);
                         }
                    }
                    else {
                         if(AtIndexArrayValue.includes('.') && elementVal1 === ".")
                         {

                         }
                         else
                         {
                              myAraay[myAraay.length - 1] += elementVal1;
                         }
                         
                    }
               }
               else {
                    myAraay[myAraay.length] += elementVal1;
               }           
               //textbox.value += elementVal1;
               currrentVal = "";
               console.log(myAraay);            
          }         
     }
     var arrayString = myAraay.join('');
     textbox.value = arrayString;

}
function btnClear_click() {
     textbox = document.getElementById("TextInput");
     textbox.value = "";
      myAraay = [];     
}
function OneFuncToAllbtn(btnId)
{
     elementVal = document.getElementById(btnId);
     elementVal1 = elementVal.textContent;
     txtboxValue(elementVal1);
}
function btnPoint_Click() {
     elementVal = document.getElementById("btnPoint");
     elementVal1 = elementVal.textContent;
     txtboxValue(elementVal1);
}
function btnBckSpc()
{
     let LastArrval = myAraay[myAraay.length - 1].toString();
     let slicedNum;
     
     if (!isNaN(LastArrval)) {
          slicedNum =  LastArrval.slice(0, -1);
          if(slicedNum === "")
          {
               myAraay.splice((myAraay.length - 1), 1)[0];
          }
          else
          {
               myAraay[myAraay.length - 1] = slicedNum;
          }       
      }
       else 
       {         
          myAraay.splice((myAraay.length - 1), 1)[0];
      }
     
     textbox.value = myAraay.join("");
}

function btnEqual_click() {
     elementVal = document.getElementById("btnEqual");
     let FinalResult, DivideIndex, MulIndex, PlusIndex, MinusIndex;

     do {
          if (myAraay.includes("/") == true || myAraay.includes("x") == true) {
               DivideIndex = myAraay.indexOf("/");
               MulIndex = myAraay.indexOf("x");
             
               if (DivideIndex > MulIndex && myAraay.includes("x") == true && MulIndex !== -1) {

                    prevValue = myAraay[MulIndex - 1];
                    if (myAraay[MulIndex + 1] != null) {
                         NextValue = myAraay[MulIndex + 1];
                         myAraay[MulIndex] = (prevValue * NextValue);
                         myAraay.splice((MulIndex + 1), 1)[0];
                         myAraay.splice((MulIndex - 1), 1)[0];
                    }
                    else
                    {
                         myAraay.splice((MulIndex), 1)[0];
                    }
                   
                    FinalResult = myAraay[myAraay.length - 1];
                    console.log(myAraay);
               }
               else if (DivideIndex < MulIndex && myAraay.includes("/") == true && DivideIndex !== -1) {
                    prevValue = myAraay[DivideIndex - 1];
                    if (myAraay[DivideIndex + 1] != null) {
                         NextValue = myAraay[DivideIndex + 1];
                         myAraay[DivideIndex] = (prevValue / NextValue);
                         myAraay.splice((DivideIndex + 1), 1)[0];
                         myAraay.splice((DivideIndex - 1), 1)[0];
                    }
                     else
                         {
                              myAraay.splice((DivideIndex), 1)[0];
                         }           
                    FinalResult = myAraay[myAraay.length - 1];
                    console.log(myAraay);
               }
               else 
               {
                    if ( myAraay.includes("x") == true) {

                         prevValue = myAraay[MulIndex - 1];
                         if (myAraay[MulIndex + 1] != null) {
                              NextValue = myAraay[MulIndex + 1];
                              myAraay[MulIndex] = (parseFloat(prevValue) * parseFloat(NextValue));
                              myAraay.splice((MulIndex + 1), 1)[0];
                              myAraay.splice((MulIndex - 1), 1)[0];
                              FinalResult = myAraay[myAraay.length - 1];
                         }
                         else
                         {
                              myAraay.splice((MulIndex), 1)[0];
                         }
                         FinalResult = myAraay[myAraay.length - 1];
                         console.log(myAraay);
                    }
                    else if ( myAraay.includes("/") == true) {
                         prevValue = myAraay[DivideIndex - 1];
                         if (myAraay[DivideIndex + 1] != null) {
                              NextValue = myAraay[DivideIndex + 1];
                              myAraay[DivideIndex] = (parseFloat(prevValue) / parseFloat(NextValue));
                              myAraay.splice((DivideIndex + 1), 1)[0];
                              myAraay.splice((DivideIndex - 1), 1)[0];
                              FinalResult = myAraay[myAraay.length - 1];
                         }
                         else
                         {
                              myAraay.splice((DivideIndex), 1)[0];
                         }
                         FinalResult = myAraay[myAraay.length - 1];
                         console.log(myAraay);
     
                    }
                }

          }
         
          else if (myAraay.includes("+") == true || myAraay.includes("-") == true) {

               PlusIndex = myAraay.indexOf("+");
               MinusIndex = myAraay.indexOf("-");
               if (PlusIndex < MinusIndex && myAraay.includes("+") == true && PlusIndex !== -1) {
                    prevValue = myAraay[PlusIndex - 1];
                    if (myAraay[PlusIndex + 1] != null) {
                         NextValue = myAraay[PlusIndex + 1];
                         myAraay[PlusIndex] = (parseFloat(prevValue) + parseFloat(NextValue));
                         myAraay.splice((PlusIndex + 1), 1)[0];
                         myAraay.splice((PlusIndex - 1), 1)[0];
                         FinalResult = myAraay[myAraay.length - 1];
                    }
                     else
                    {
                         myAraay.splice((PlusIndex), 1)[0];
                    }
                    FinalResult = myAraay[myAraay.length - 1];
                    console.log(myAraay);
               }
               else if (PlusIndex > MinusIndex && myAraay.includes("-") == true && MinusIndex !== -1) {
                    prevValue = myAraay[MinusIndex - 1];
                    if (myAraay[MinusIndex + 1] != null) {
                         NextValue = myAraay[MinusIndex + 1];
                         myAraay[MinusIndex] = (parseFloat(prevValue) - parseFloat(NextValue));
                         myAraay.splice((MinusIndex + 1), 1)[0];
                         myAraay.splice((MinusIndex - 1), 1)[0];
                        
                    }
                    else
                    {
                         myAraay.splice((MinusIndex), 1)[0];
                    }

                    FinalResult = myAraay[myAraay.length - 1];
                    console.log(myAraay);
               }
               else 
               {
                    if ( myAraay.includes("+") == true) {
                         prevValue = myAraay[PlusIndex - 1];
                         if (myAraay[PlusIndex + 1] != null) {
                              NextValue = myAraay[PlusIndex + 1];
                              myAraay[PlusIndex] = (parseFloat(prevValue) + parseFloat(NextValue));
                              myAraay.splice((PlusIndex + 1), 1)[0];
                              myAraay.splice((PlusIndex - 1), 1)[0];
                            
                         }
                         else
                         {
                              myAraay.splice((PlusIndex), 1)[0];
                         }
                         FinalResult = myAraay[myAraay.length - 1];
                         console.log(myAraay);
                    }
                    else if (myAraay.includes("-") == true) {
                         prevValue = myAraay[MinusIndex - 1];
                         if (myAraay[MinusIndex + 1] != null) {
                              NextValue = myAraay[MinusIndex + 1];
                              myAraay[MinusIndex] = (parseFloat(prevValue) - parseFloat(NextValue));
                              myAraay.splice((MinusIndex + 1), 1)[0];
                              myAraay.splice((MinusIndex - 1), 1)[0];
                         }
                         else
                         {
                              myAraay.splice((MinusIndex), 1)[0];
                         }
                        
                         FinalResult = myAraay[myAraay.length - 1];
                         console.log(myAraay);
                    }
                    else{}
                }
          }     
     } while (myAraay.length > 1)
     if(Number.isInteger(parseFloat(FinalResult)))
     {
          textbox.value = FinalResult;
          myAraay = [];
     }
     else
     {
         // FinalResult.toString().replace(/(\.\d*?[1-9])0+$/, "$1");
          textbox.value = FinalResult.toString().replace(/(\.\d*?[1-9])0+$/, "$1");
          myAraay = [];
     }
}

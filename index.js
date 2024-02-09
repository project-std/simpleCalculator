let equal = document.querySelector('button'); 
equal.addEventListener('click',calculate); let operation=0;
// console.log(equal); 
let resultDiv = document.createElement('div'); 
resultDiv.id="result";
document.getElementById('wrapper').appendChild(resultDiv);
function calculate(){ 
  // let value = document.getElementById('text').value; 
  // let operator=value.split(''); 
  // let operator1=operator[0],operator2 =operator[1]; 
  // console.log(operator1);console.log(operator2);
  let operator1 = Number(document.getElementById('text1').value);
  let operator2 = Number(document.getElementById('text2').value);

  let select = document.getElementById("input");
  let selection = select.options[select.selectedIndex].value; 
  switch(selection)
  { 
  case 'addition':  
  operation= operator1 + operator2; 
  break   
  case 'subtraction':  
  operation= operator1 - operator2; 
  break    
  case 'division':  
  operation= operator1 / operator2; 
  break   
  case 'multiplication':  
  operation= operator1 * operator2; 
  break
  
} 
document.getElementById("result").innerHTML=operation;

}


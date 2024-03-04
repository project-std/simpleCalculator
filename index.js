let button = document.getElementById("submit");    
button.addEventListener('click',calculate); 
let resultDiv = document.createElement('div'); 
resultDiv.id="result";
document.getElementById('container').appendChild(resultDiv);

function calculate() {                     
  
  let values1 = Number(document.getElementById('input1').value);
  let values2 = Number(document.getElementById('input2').value);
  let values3 = Number(document.getElementById('input3').value);
  let option = document.getElementById('option');
  let selection = option.options[option.selectedIndex].value; 
  let total = 0;

  // console.log(values);  
  // console.log(selection);
  switch(selection){
    case 'area':
      var sum = (values1 + values2 + values3) / 2;
      total = Math.floor(Math.sqrt(sum * (sum - values1) * (sum - values2)*(sum-values3)))
      // result = Math.sqrt(squareRoot);
      console.log(total);
    break
    case 'peri':
      total = Math.floor(values1 + values2 + values3);
      console.log(total);
  }
  document.getElementById('result').innerHTML = total;
}
let  resetButton =document.getElementById('reset');
// let value = [values1,values2,values3];

resetButton.addEventListener('click',resetForm);
function resetForm(){
  document.getElementById('input1').value='';
  document.getElementById('input2').value='';
  document.getElementById('input3').value='';
}

// function checkInput(){ 
  //   if(isNaN(this.value)){ 
    // alert("Please enter a number");
        // this.value="";
  //     return false;
  //   }else{
    //   return true;
  //   }
// }

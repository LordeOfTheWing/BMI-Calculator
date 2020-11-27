const b = document.querySelector('button');

b.addEventListener('click',()=>{
			let h=document.getElementById('h').value;
			let w=document.getElementById('w').value;

			//Validation to restrict numbers to a reasonable range
			if(h <= 0  || w<= 0 || h>=223 || w>= 441){
				alert("ERROR!!Please Enter Correct Range Of Values.")
			}else{
			let bmi=w/(h/100*h/100);
			let bmio=(bmi.toFixed(2));

			document.getElementById("result").innerText="Your BMI is " + bmio;

			//Validation to restrict input values to only numbers
			if(document.getElementById("result").innerText="Your BMI is " + bmio === "Your BMI is NaN" ){
				alert("ERROR!You Can Only Input Numbers");
			}else{
				document.getElementById("result").innerText="Your BMI is " + bmio;
			}
			}		
});

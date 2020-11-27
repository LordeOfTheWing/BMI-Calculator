const b = document.querySelector('button');

b.addEventListener('click',()=>{
	let h=document.getElementById('h').value;
			let w=document.getElementById('w').value;
			
			if(h <= 0 || w<= 0){
				alert("ERROR!!Please Enter Correct Range Of Values.")
			}else{
				let bmi=w/(h/100*h/100);
			let bmio=(bmi.toFixed(2));

			document.getElementById("result").innerText="Your BMI is " + bmio;
			}		
});

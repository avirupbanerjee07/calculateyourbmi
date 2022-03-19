function myfunction(){
    let W= document.getElementById("wweight").value
    let H= (document.getElementById("hheight").value)/100
    
    let BMI=(W/(H*H))
    let res=BMI.toFixed(2) 
    document.getElementById("ddisplay").innerHTML=res
    let age= document.getElementById("aage").value
    let verdict
    if(age<18)
    {
        if(BMI<17.00){
            verdict="Underweight"
    }
        
        if(BMI>=17.00 && BMI<=25.00){
            verdict="Perfectly Fit"
        }
        
        if(BMI>25.00){
            verdict="Overweight"
        }
        
    }
    if(age>=18.00 && age<40.00)
    {
        if(BMI<19.00)
        verdict="Underweight"
        
        if(BMI>=19.00 && BMI<=25.00){}
        verdict="Perfectly Fit"
        if(BMI>25)
        verdict="Overweight"
    }
    if(age>=40.00)
    {
        if(BMI<19.00)
        verdict="Underweight"
        if(BMI>=19.00 && BMI<=27.00)
        verdict="Perfectly Fit"
        if(BMI>27.00)
        verdict="Overweight"
    }
    console.log(verdict)
    document.getElementById("weight-status-verdict").innerHTML=verdict
}

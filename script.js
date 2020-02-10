var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;


for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function()
    {
    var value=this.getAttribute('data-value');
    if(value=="+"||value=="-"||value=="*"||value=="/")
    {
      
        operator=value;
        operand1=parseFloat(display.textContent);
        display.innerText='';
        
        }
     
       

    
    else if(value=='=')
    {
        operand2=parseFloat(display.textContent);
        if(operator=="+")
        {
        operand1+=parseFloat(operand2); 
        display.innerText=operand1;
        }
       else if(operator=="-")
        {
            operand1-=parseFloat(operand2); 
            display.innerText=operand1;   
        }
       else if(operator=="*")
       {
        operand1*=parseFloat(operand2); 
        display.innerText=operand1;
       }
       else if(operator=="/")
       {
        operand1 /=parseFloat(operand2); 
        display.innerText=operand1;
       }
     

    }
     else if(value=="+/-"){
     
        operand1=parseFloat(display.textContent);
        operand1 *=- 1;
        display.innerText=operand1;
    }
  

    else if(value=="%")
    {
        operand1=parseFloat(display.textContent);
        operand1 /=100;
        
    }

    else if(value=='AC'){
        operand1="";
        operand2="";
        operator="";
         
        display.innerText="";
    }
    else{
        display.innerText+=value;
        
    }
    });
}
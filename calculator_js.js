var buttons=document.getElementsByClassName("button");
var display=document.getElementById("disp");
var op1=0;
var op2=0;
var operator=null;
var dot=0;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){
        var value=this.getAttribute('data-value');
        if(value=='+')
        {
            dot=0;
            operator='+';
            op1=display.innerText;
            display.innerText='';
        }
        else if(value=='-')
        {
            dot=0;
            operator='-';
            op1=display.innerText;
            display.innerText='';
        }
        else if(value=='.')
        {
            if(dot>0)
            {
            }
            else{
            display.innerText+=".";
            dot++;
            }
            
        }
        else if(value=='*')
        {
            operator='*';
            dot=0;
            op1=display.innerText;
            display.innerText='';
        }
        else if(value=='/')
        {
            dot=0;
            operator='/';
            op1=display.innerText;
            display.innerText='';
        }
        else if(value=='%')
        {
            dot=0;
            operator='%';
            op1=display.innerText;
            display.innerText='';
        }
        else if(value=='AC')
        {
            dot=0;
            display.innerText='';
            display.innerText='';
        }
        else if(value=='-1')
        {
            dot=0;
            display.innertext=display.innertext*(-1);
            display.innerText='';
        }
        else if(value=='=')
        {
            dot=0;
            op2=display.innerText;
            display.innerText=eval(op1+' '+ operator+' ' +op2);
            op1=display.innerText;
        }
        else
        {
            display.innerText+=value;
        }
    })
}
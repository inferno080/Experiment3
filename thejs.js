c = 0;
p =0;
function f0(){
    document.getElementById("rect854").style.display="block";
    document.getElementById("rect854").style.cursor="pointer";
}
function f1()
{   
    if(c==0)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun1").style.display = "none"  
        }, (1000))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches");
        c--;
    }
}
function f2()
{   
    if(c==1)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun2").style.display = "none"  
            
        }, (1500))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}
function f3 ()
{   
    if(c==2 | c==4 | c==10)
    {   
        c = c+1;
        if (p==0)
        {
            document.getElementById("fun3").style.display = "none"
            setTimeout(function(){
                document.getElementById("liq_late").style.display = "block"  ;
            }, (5000))
            p ++;
        }
        else if (p==1)
        {
            document.getElementById("fun5").style.display = "none"
            p ++;
        }
        else if (p==2)
        {
            p ++;
        }
        setTimeout(function(){
            document.getElementById("liq2").style.display = "block"  ;
        }, (1000))
        setTimeout(function(){
            document.getElementById("liq2").style.display = "none"  ;
            document.getElementById("measuringcylindertilt").style.display = "block"  ;
            document.getElementById("measuringcylinder").style.display = "none"  ;
            document.getElementById("liq3tilt").style.display = "block"  ;
        }, 3500)
        setTimeout(function(){
            document.getElementById("measuringcylinder").style.display = "block"  ;
            document.getElementById("measuringcylindertilt").style.display = "none"  ;
            document.getElementById("liq3tilt").style.display = "none"  ;
            if(p==3)
            {
                document.getElementById("glassrod").style.display = "block"
                document.getElementById("fun10").style.display = "none"
            }
        }, (6000))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}

function f4()
{   
    if(c==3)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun4").style.display = "none"  
        }, (1500))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}
function f5()
{   
    if(c==5)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun6").style.display = "none"  
            document.getElementById("fancyspoon1").style.display = "block"  
        }, (1500))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}
function f6()
{   
    if(c==6)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun7").style.display = "none"  
            document.getElementById("fancyspoon2").style.display = "block"  
            document.getElementById("fancyspoon1").style.display = "none"  
            document.getElementById("whitepowder").style.display = "block"  
        }, (3000))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}

function f7()
{   
    if(c==7)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun8").style.display = "none"  
            document.getElementById("fancyspoon3").style.display = "block"  
            document.getElementById("fancyspoon2").style.display = "none"  
            document.getElementById("whitepowderinmachine").style.display = "block"  
            document.getElementById("whitepowder").style.display = "none" 
            document.getElementById("Pisplay2").style.display = "block"  
            document.getElementById("Pisplay1").style.display = "none"  
        }, (2000))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}

function f8()
{   
    if(c==8)
    {   
        c = c+1;
        document.getElementById("Pisplay1").style.display = "block"  
        document.getElementById("Pisplay2").style.display = "none"  
        setTimeout(function(){
            document.getElementById("fun9").style.display = "none"  
            document.getElementById("fancyspoon3").style.display = "none"  
            document.getElementById("whitepowderinmachine").style.display = "none"  
            document.getElementById("whitepowder").style.display = "none" 

        }, (3000))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}

function f9()
{   
    if(c==9)
    {   
        c = c+1;
        setTimeout(function(){
            document.getElementById("fun11").style.display = "none" 
        }, (1500))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}

function f10()
{
    if(c==11)
    {
        setTimeout(function(){
            document.getElementById("fun12").style.display = "none" 
            document.getElementById("slime").style.display = "block" 
        }, (1500))
    }
    else
    {
        alert("You Clicked The Wrong Apparatus, Refresh to avoid glitches")
        c--;
    }
}
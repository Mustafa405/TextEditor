function textChange()
{
    let ta = document.getElementById("textarea").value
    let lc=document.getElementById("lettercount")
    let wc=document.getElementById("wordcount")
    
    lc.innerHTML="Letters : "+ta.length
    if(ta.length===0)
    {
        wc.innerHTML="Words : 0";
    }
    else
    {
        
    
    wc.innerHTML="Words : "+ta.split(" ").length
    }
}
function clearIt()
{
    var ta = document.getElementById("textarea").value="";
 textChange()
    
}

function replaceText()
{
    let ta = document.getElementById("textarea")
    let ft=document.getElementById("findText").value
    rt=document.getElementById("replaceText").value
    ta.value=ta.value.replace(ft,rt)
    textChange()
}
function navFindReplace()
{
    x=document.getElementById("findReplace")
    if(x.style.display=="none")
    {
        x.style.display="block"
    }
    else
    {
        x.style.display="none"
    }
}

function changeTheme()
{
    x=document.getElementById("changeTheme")
    body=document.getElementById("body")
    textarea=document.getElementById("textarea")
    
    if(x.innerHTML=="Light Mode ☀️")
    {
        x.innerHTML="Dark Mode 🌑"
        body.style.backgroundColor="white"        
        textarea.style.backgroundColor="white"
        textarea.style.color="black"
        
    }
    else
    {
        x.innerHTML="Light Mode ☀️"
        body.style.backgroundColor="black"
        textarea.style.backgroundColor="black"
        textarea.style.color="white"
    }
}
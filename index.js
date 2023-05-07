document.getElementById('Blog').addEventListener('click',function(){

    window.location.href = "description.html";
})
// page add above
var serial=0;


document.getElementById('Triangle_calculator').addEventListener('click',function(){
    serial=serial+1;
            var area=document.getElementById('b')
            var b=area.value
          
            var areah=document.getElementById('h')

            var h=areah.value
            
            var letter=document.getElementById('Triangle').innerText;
            var result=0.5*b*h;
            DisplayData(result.toFixed(2),letter)

})

// Triangle
document.getElementById('Rectangle_calculator').addEventListener('click',function(){
    serial=serial+1;
            var area=document.getElementById('w')
            var b=area.value
            
            var areah=document.getElementById('i')
            var h=areah.value
            
            var result=b*h;
            var letter=document.getElementById('Rectangle').innerText;
            DisplayData(result.toFixed(2),letter)
})
//Rectangle_calculator calculation
document.getElementById('Parallelogram_calculator').addEventListener('click',function(){
    serial=serial+1;
            var area=document.getElementById('b1')
            var b=area.value
            
            var areah=document.getElementById('h1')
            var h=areah.value
            
            var result=b*h;
            var letter=document.getElementById('Parallelogram').innerText;
            DisplayData(result.toFixed(2),letter)

})
//Parallelogram_calculator
document.getElementById('Rhombus_calculator').addEventListener('click',function(){
    serial=serial+1;
    var area=document.getElementById('d1')
    var b=area.value
    
    var areah=document.getElementById('d2')
    var h=areah.value
    
    var result=0.5*b*h;
    var letter=document.getElementById('Rhombus').innerText;
    DisplayData(result.toFixed(2),letter)


})
//Rhombus_calculator

document.getElementById('Pentagon_calculator').addEventListener('click',function(){
    serial=serial+1;
                  
    var area=document.getElementById('p1')
            var b=area.value
          
            
            var areah=document.getElementById('pentagon_b')
            var h=areah.value
           
            
            var result=0.5*b*h;
            var letter=document.getElementById('Pentagon').innerText;
            DisplayData(result.toFixed(2),letter)

    
})
document.getElementById('Ellipse_calculator').addEventListener('click',function(){
    serial=serial+1;
                  
    var area=document.getElementById('ellipse_a')
            var b=area.value
          
            
            var areah=document.getElementById('ellipse_b')
            var h=areah.value

            
           
            
            var result=Math.PI*b*h;
            var letter=document.getElementById('Ellipse').innerText;
            DisplayData(result.toFixed(2),letter)
    
})

function DisplayData(Triangle,letter)
{
        var Area_Calculation_table=document.getElementById('Area_Calculation_table')
        var tr=document.createElement('tr')
        tr.innerHTML=`<td>${serial}.</td>
        <td>${letter}</td> <td>${Triangle}cm<sup>2</sup></td>
         <td><button style="background: #1090D8;
         border-radius: 4px;color: #FFFFFF;font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 14px;width:105px;
         height: 32px;">Covert to m<sup>2</sup></button></td>
        
        
        `
        Area_Calculation_table.appendChild(tr)

}
// rendom color
 function myfunction(){

    var rendomColor=document.getElementById('rendom')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  rendomColor.style.color='white'
 }

 function myfuntionout(){
    
    var rendom=document.getElementById('rendom')
    rendom.style.background='#FBBCED'
 }
 function myfunction1(){

    var rendomColor=document.getElementById('rendom1')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  rendomColor.style.color='white'
 }

 function myfuntionout2(){
    
    var rendom=document.getElementById('rendom1')
    rendom.style.color='black'
    rendom.style.background='white'
 }
 function myfunction3(){

    var rendomColor=document.getElementById('rendom2')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  
 }

 function myfuntionout4(){
    
    var rendom=document.getElementById('rendom2')
    rendom.style.background='white'
    rendom.style.color='black'
    
 }
 function myfunction5(){

    var rendomColor=document.getElementById('rendom3')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  
 }

 function myfuntionout6(){
    
    var rendom=document.getElementById('rendom3')
    rendom.style.background='white'
    rendom.style.color='black'

    
    
 }
 function myfunction7(){

    var rendomColor=document.getElementById('rendom4')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);

 }

 function myfuntionout8(){
    
    var rendom=document.getElementById('rendom4')
    rendom.style.background='#69C7F0'

    
 }

 function myfunction9(){

    var rendomColor=document.getElementById('rendom5')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  
 }

 function myfuntionout10(){
    
    var rendom=document.getElementById('rendom5')
    rendom.style.background='white'
 }
 function myfunction11(){

    var rendomColor=document.getElementById('rendom6')
    
    
  rendomColor.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
  
 }

 function myfuntionout12(){
    
    var rendom=document.getElementById('rendom6')
    rendom.style.background='white'
 }



 
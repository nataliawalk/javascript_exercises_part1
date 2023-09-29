// ex 1
const inputs = document.querySelectorAll('.input');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const description = document.querySelector('#description');

for(let input of inputs) {
	input.addEventListener('input', function() {		
	document.body.style.backgroundColor = 'rgb('+red.value+','+green.value+','+blue.value+')';
	description.innerHTML=this.value;
	});
}

// ex 2
const description2 = document.querySelector('#description2');
const inputs2 = document.querySelectorAll('.input2');

for(let input of inputs2) {
	input.addEventListener('click', () => {
	if(input.checked) {	
		description2.innerHTML="Ostatnio wybrano: " + input.value; 	
	}
	});
}

//ex 3 
const result3 = document.querySelector('#result3');

document.querySelector('#input3_1').addEventListener('click',function(){
    let promien = document.querySelector('#input3').value;
    let prom = 2*Math.PI*promien;
    let ob = Math.PI*Math.pow(promien,2);
    result3.innerHTML = "obwod kola: " + prom + '<br>' + "pole kola: " + ob;
});

//ex 4
const osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]
const table = document.querySelector('#table');
const table1 = document.querySelector('#table1');
const table2 = document.querySelector('#table2');

table.innerHTML=osoby.join(" , ");
table1.innerHTML='<p>'+osoby.join("</p><p>")+'</p>';


table2.innerHTML=osoby.map(osoba=>{return "<h3>"+osoba.substring(osoba.indexOf(" ")+1)+"</h3>"; }).sort().join(" ");

//ex 5
const informacja=document.querySelector('#informacja');
const dane=document.querySelector('#dane');
const dane1=document.querySelector('#dane1');
const dane2=document.querySelector('#dane2');

let tekst='JavaScript (w skrócie JS) – język został opracowany przez firmę Netscape w połowie lat 90. Jego twórcę jest Brendan Eich.';
        
informacja.innerHTML=tekst;
dane.innerHTML='ten tekst ma '+ tekst.length+' znaków';

let pozycja1=tekst.indexOf("Netscape")
informacja.innerHTML=tekst;
dane1.innerHTML='słowo Netscape zaczyna się od ' + pozycja1 + ' znaku';

let pozycja2=tekst.lastIndexOf(" ");
informacja.innerHTML=tekst;
dane2.innerHTML='ostatnia spacja to znak nr.: ' + pozycja2;

//ex 6
const szczyty=document.querySelector('#szczyty');
const result4=document.querySelector('#result4');
      
szczyty.addEventListener("input", function(){
	result4.innerHTML='Najwyższy szczyt: '+szczyty.value;
});

//ex 7
const square=document.querySelector('.square');
const rozmiar=document.querySelector('#rozmiar');
const wielkosc=document.querySelector('#wielkosc');

rozmiar.addEventListener('input',function(){ 
    square.style.width=rozmiar.value+'px'; 
    square.style.height=rozmiar.value+'px';      
    wielkosc.innerHTML=rozmiar.value+'px'     
});

//ex 8
const liczba=document.querySelector('#liczba');
const suwak=document.querySelector('#suwak');
suwak.addEventListener("input",function(){
    liczba.innerHTML=this.value+" px";;
    liczba.style.fontSize=this.value+"px";
})

// ex 9
const a=document.querySelector('#a');
const b=document.querySelector('#b');
const dodaj=document.querySelector('#dodaj');
      
dodaj.addEventListener("click", function(){
    let suma=Number(a.value)+Number(b.value);
	wynik.innerHTML='<b>'+suma+'</b>';
});
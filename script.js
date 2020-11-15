
const dlyaVedraEl = document.getElementById('dlya-vedra')
const massivVeder = []


class vedro{

    constructor(
        voda = false,
        htmlTag = null,
        src= "",
        numClick = Number 
        
    ){
        this.voda = voda
        this.htmlTag = htmlTag
        this.src = src
        this.numClick = numClick
    
        this.htmlTag.src = src;
    }

    nalitVody(){   // метод, который наливает водичку

        
       this.voda = true
       this.src = './img/vedro2.jpg'  // меняет ссылку именно в массиве
       this.htmlTag.src='./img/vedro2.jpg' // меняет ссылку именно в самом теге
       this.numClick=1
    }

}

for(let i=0; i<5; i++){

    massivVeder.push  (// это создаёт массив вёдер

        new vedro(
            false,
            document.createElement("img"),
            './img/vedro1.jpg',  
            0,     
           
    ) )

    dlyaVedraEl.appendChild(massivVeder[i].htmlTag); // вроде как привязывает к html массив


    document.getElementsByTagName('img')[i].style.width = 200 + 'px'  //та самая строчка, которая делает css

    
    massivVeder[i].htmlTag.addEventListener('click',onClick) // какая-то умная строчка, которая ивент привязывает именно к тегу

    function onClick(){

        if(massivVeder[i].numClick === 2){

            numClick = 3
            document.getElementsByTagName('img')[i].style.opacity = 0
        }
        else


        if (massivVeder[i].voda === false){
    
            massivVeder[i].nalitVody()

        console.log(massivVeder[i])
        }
        else if(massivVeder[i].voda === true){

            alert('камон, там уже есть эта кристально чистая вода')
            massivVeder[i].numClick = 2
        }  
    }
}
console.log(massivVeder)






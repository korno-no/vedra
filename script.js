
const dlyaVedraEl = document.getElementById('dlya-vedra')
const massivVeder = []


class vedro{

    constructor(
        voda = false,
        htmlTag = null,
        src= "",
      
        
    ){
        this.voda = voda
        this.htmlTag = htmlTag
        this.src = src
    
        this.htmlTag.src = src;
    }

    nalitVody(){

       this.voda = true

       this.src = './img/vedro2.jpg'

    }

}

for(let i=0; i<5; i++){

    massivVeder.push(

        new vedro(
            false,
            document.createElement("img"),
            './img/vedro1.jpg',       
           
    ) )

    dlyaVedraEl.appendChild(massivVeder[i].htmlTag);
    document.getElementsByTagName('img')[i].style.width = 200 + 'px'  

    
    massivVeder[i].htmlTag.addEventListener('click',onClick)

    function onClick(){

       
        if (massivVeder[i].voda === false){
    
            massivVeder[i].nalitVody('./img/vedro2.jpg')

        console.log(massivVeder[i])
        }

    }
}












console.log(massivVeder)






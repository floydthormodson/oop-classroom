class Marker {
  constructor(size, color, remainingInk){
      this.size =size
      this.color = color
      this.remainingInk = remainingInk
  }
  
  write(word){
    let charsPrint = word
    let totalChars = word.length
    let totalCharsArray = word.split('')
    let inkChars = totalCharsArray.filter(char=> {return char = ' '})
    

    if(this.remainingInk>inkChars.length){
        this.remainingInk = this.remainingInk - inkChars.length
        return charsPrint
    }else{
       // let num =this.remainingInk
        return charsPrint.substring(0,this.remainingInk)
    }









    /*let inkWords= sentence.reduce(char=> char=' ')
    for(i=0; i<=inkWords.length; i++){
        if(this.remainingInk >= inkWords.length){
            this.remainingInk--
        }else if(this.remainingInk<inkWords.length){

        }
    }*/
  }
      
      
}

module.exports = Marker

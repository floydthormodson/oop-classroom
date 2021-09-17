class Marker {
  constructor(size, color, remainingInk){
      this.size =size
      this.color = color
      this.remainingInk = remainingInk
  }
  
  write(word){
      let charCount = word.split('').filter(char=>char!== ' ')

      this.remainingInl -= charcterCount;
      return word

      //if(charCount>this)
    
}
}

module.exports = Marker

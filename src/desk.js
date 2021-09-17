class Desk {
  constructor(length, width, height, isWhiteboard){
      this.length = length
      this.width = width
      this.height =height
      this.isWhiteboard = isWhiteboard
      this.content= ''
  }
  write(words){
      return this.content += words
  }
  wipe(){
      if(this.isWhiteboard){
          this.content = ''  
      }else{
          this.content = this.content
      }
  }
}

module.exports = Desk

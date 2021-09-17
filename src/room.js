class Room {
  constructor(name, description){
      this.name =name
      this.description = description
      this.contents = []
  }
  add(item){
      this.contents.push(item)
      return this
  }
  has(ref){
    if(this.contents.includes(ref)){
        return true
    }else{
        return false
    }
  }
  
}

module.exports = Room

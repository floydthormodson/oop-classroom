class Student {
  constructor(name, skillLevel){
      this.name = name
      this.skillLevel = skillLevel
      this.assignments = []
  }
  study(){
      if(this.skillLevel<100){
          this.skillLevel++
      }
      return this
  }

  
  doHomework(homework){
      
      if(homework.skillLevel<this.skillLevel){
          homework.completed = true
      }else{
          homework.completed=false
      }
      if(homework.skillLevel != undefined && homework.skillLevel>1 && homework.skillLevel<=100){
        this.assignments.push(homework)
      }
      

    }
  
}

module.exports = Student

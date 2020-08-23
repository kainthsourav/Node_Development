const fs=require('fs')
const chalk = require('chalk')

//add note
const addNotes=function(title,body)
{
  const notes=loadNotes()
  //to find the already existing title
  const duplicateNotes=notes.filter(function(notes)
  {
     return notes.title===title
  })

  if(duplicateNotes.length===0)
  {
     //adding new values to json objects
   notes.push({
      title:title,
      body:body
     })
   saveNotes(notes)
   console.log(chalk.greenBright('New Note Added'))
  }
  else
  {
   console.log( chalk.redBright('Note Title already exists'))
  }
 
}

//load notes
const loadNotes=function()
{
   try
   {
     const dataBuffer=fs.readFileSync('notesData.json')
     const dataJson=dataBuffer.toString()
     return JSON.parse(dataJson)
   }
   catch(e)
   {
      return []           
   }
}
//save notes
saveNotes=function(notes)
{
   const dataJson=JSON.stringify(notes)
   fs.writeFileSync('notesData.json',dataJson)
}

//remove notes
const removeNotes=function(title)
{

}


 module.exports={
    getAddNotes:addNotes,
    getRemoveNotes:removeNotes
 }
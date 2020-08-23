const fs=require('fs')
const chalk = require('chalk')
const { title } = require('process')

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
   console.log(chalk.black.bgGreenBright('New Note Added'))
  }
  else
  {
   console.log(chalk.black.bgRedBright('Note Title already exists'))
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
   const notes=loadNotes();
   const notesToKeep=notes.filter(function(notes){
      return notes.title!==title
   })
  
   if(notes.length>notesToKeep.length)
   {
      console.log(chalk.black.bgGreen('Note removed'))
      saveNotes(notesToKeep)
   }
   else
   {
      console.log(chalk.black.bgRedBright('No note found'))
   }

}

const getNotesList=function()
{
   const notes=loadNotes();
   if(notes.length!==0)
   {
      console.table(notes)
   }
   else
   {
      console.log(chalk.black.bgRedBright('no note found'));
   }
}

//read the selected note
const getReadNote=function(title)
{
   const notes=loadNotes()
   const readNote=notes.filter(function(notes)
   {
      return notes.title===title
   })

    if(readNote.length!==0)
    {
      console.log(readNote)
    }
    else
    {
      console.log(chalk.black.bgRedBright('Note does not exist'))
    }
   
}

 module.exports={
    getAddNotes:addNotes,
    getRemoveNotes:removeNotes,
    getNotesList:getNotesList,
    getReadNote:getReadNote
 }
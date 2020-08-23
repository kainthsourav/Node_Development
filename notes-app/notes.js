const fs=require('fs')
const chalk = require('chalk')

//add note
const addNotes=(title,body)=>
{
  const notes=loadNotes()
  //to find the already existing title
  const duplicateNotes=notes.filter((notes)=>{ notes.title===title})

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
const loadNotes=() =>
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
saveNotes=(notes) =>
{
   const dataJson=JSON.stringify(notes)
   fs.writeFileSync('notesData.json',dataJson)
}

//remove notes
const removeNotes=(title) =>
{
   const notes=loadNotes();
   const notesToKeep=notes.filter((notes) => {notes.title!==title})
  
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

const getNotesList=() =>
{
   const notes=loadNotes();
   if(notes.length!==0)
   {
      console.log(chalk.inverse('List of nodes :'))
      notes.forEach((note)=>
      {
         console.log(chalk.inverse(note.title))
      })
   }
   else
   {
      console.log(chalk.black.bgRedBright('no note found'));
   }
}

//read the selected note
const getReadNote=(title) =>
{
   const notes=loadNotes()
   const readNote=notes.filter((notes) =>{notes.title===title})
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
const chalk=require('chalk');
const validator=require('validator')
const yargs=require('yargs');
const notes=require('./notes')

//custom verison
yargs.version('1.1.0');


//Creating commands
//add
yargs.command({
    command:'add',
    describe:'Adds a new note',
    builder:{
        title:{
            describe:'Note Title',
           demandoption:true,
            type:'string'
        },
        body:{
            describe:'Note description',
            demandoption:true,
            type:'string'
        }
    },
    handler(argv)
    {
       notes.getAddNotes(argv.title,argv.body)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
      title:{
        describe:'Note title',
        demandoption:true,
        type:'string'
      }  
    },
    handler(argv)
    {
        notes.getRemoveNotes(argv.title)
    }
})
//list
yargs.command({
    command:'list',
    describe:'Shows list of notes',
    handler(){
       notes.getNotesList()
    }
})
//read
yargs.command({
    command:'read',
    describe:'read the selected note',
    builder:{
        title:{
            describe:'Note title to be read',
            demandoption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.getReadNote(argv.title)
    } 
})

yargs.parse()
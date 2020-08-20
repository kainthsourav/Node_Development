const chalk=require('chalk');
const validator=require('validator')
const yargs=require('yargs');
const { command, string, describe } = require('yargs');

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
            type:string
        },
        body:{
            describe:'Note description',
            demandoption:true,
            type:string
        }
    },
    handler:function(argv)
    {
        console.log('Title: '+argv.title)
        console.log('Description: '+argv.description)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function()
    {
        console.log('Note removed')
    }
})
//list
yargs.command({
    command:'list',
    describe:'Shows list of notes',
    handler:function(){
        console.log('Here is list of all notes');
    }
})
//read
yargs.command({
    command:'read',
    describe:'read the selected note',
    handler:function(){
        console.log('opening selected note')
    }
})

yargs.parse()
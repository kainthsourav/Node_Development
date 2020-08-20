const chalk=require('chalk');
const validator=require('validator');


cmd=process.argv[2];

if(cmd==='add')
{
 console.log(chalk.white.bgGreen('Note has been added'));
}
else if(cmd==='remove')
{
    console.log(chalk.white.bgRed('Note has been removed'));
}
else{
    console.log('Invalid',process.argv[2]);
}
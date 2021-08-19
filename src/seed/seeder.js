const fs = require('fs');
const db = require('../db/sequelize')

module.exports =  () =>  {
    let levelSeedData = fs.readFileSync(__dirname +'\\level.seed.json',{'encoding':'utf-8'});
    levelSeedData = JSON.parse(levelSeedData);
    levelSeedData.forEach(async level => {
       await  db.levels.create(level).then(result => console.log(result)).catch(err => console.error(err));
    });
    
    //add seeder for client/s
}




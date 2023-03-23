const Agenda = require("agenda");

const mongoConnectionString = "mongodb+srv://mydatabase:mydatabase@cluster0.dv1r9ak.mongodb.net/?retryWrites=true&w=majority";

const agenda = new Agenda({ db: { address: mongoConnectionString}, collection: "agenda" });

agenda.define('firstjob', (job, done) => {
  console.log('printing the first job');
  done();
  
});

agenda.on('ready', () => {
  agenda.every('5 seconds', 'firstjob');
  agenda.start();
},);







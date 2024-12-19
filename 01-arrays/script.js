const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
 teachers.splice(4, 1, "Patrick");
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[6];
teachers.pop();

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.shift()
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa")
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
let indexLewis = teachers.indexOf("Lewis")
// console.log(indexLewis);

// e salvalo nella variabile lewisIndex
const lewisIndex = teachers[5];
// console.log(teachers);

// 8. Verifica se l'array teachers è vuoto
let verify = teachers.length;

// e salva il risultato nella variabile isTeachersEmpty
if(verify === 0){
const isTeachersEmpty = true;
}
else{
  const isTeachersEmpty = false;
}
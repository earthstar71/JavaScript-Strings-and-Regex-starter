let template_1 = `Multi
 line           string 1`

 console.log(template_1);
 const note_1 = document.getElementById('note');
 note_1.innerText = template_1;

 let template_2 = `Multi \n \n
 line \t \t \t \t string 2`

 console.log(template_2);

 const note_2 = document.getElementById('note_2');
 note_2.innerText = template_2;

 const pre_tag = document.getElementById('pre_tag');
 pre_tag.innerText = template_2;

let pair = "usd/eur"

let raw_string = String.raw`Multi \n \n
line \t \t \t \t string ${pair}`;

console.log(raw_string);
const note_raw = document.getElementById('note_3')
note_raw.innerText = raw_string;
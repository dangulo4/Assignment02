// DECLARE VARIABLES
let es = 'Hola Mundo';
let de = 'Hallo Welt';
let en = 'Hello World';
let fr = 'Bonjour le monde';

// PROMPT USER FOR LANGUAGE CODE
langCode = prompt('Choose a language code (es, de, en, fr)');
// DISPLAY HEADER
document.write('<h1>The Word Translator</h1>');
// GREET USER WITH SELECTED LANGCODE
switch (langCode) {
  case 'es':
    document.write(`Hello World translated in Spanish is: <strong>${es}</strong>`);
    break;
  case 'de':
    document.write(`Hello World translated in German is: <strong>${de}</strong>`);
    break;
  case 'en':
    document.write(`Hello World translated in English is: <strong>${en}</strong>`);
    break;
  case 'fr':
    document.write(`Hello World translated in French is: <strong>${fr}</strong>`);
    break;
  default:
    document.write(`Hello World translated in English is: <strong>${en}</strong>`);
}

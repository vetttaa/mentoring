function func() {
  try {
    alert("start");
    return "result";
  } catch (e) {
    alert("error");
  } finally {
    alert("clean");
  }
}
func(); //start clean 'result'
//finally гарантирует очистку

//Создайте программу, которая открывает файл, считывает его содержимое, а затем закрывает его.
//Используйте try блок для операций с файлами и finally блок для обеспечения закрытия файла независимо от того, возникнет ли исключение.

function readFile(fileName) {
  let content = "";
  try {
    content = prompt("Content", "");
    console.log(content);
  } catch (e) {
    alert("Error", e.message);
  } finally {
    console.log("closed");
  }
}
readFile();


//напишите функцию, которая анализирует строки JSON.
//Используйте try блок для синтаксического анализа JSON и catch блок для обработки любых ошибок синтаксического анализа.
//Включите finally блок для регистрации завершения операции синтаксического анализа.

function readJSON(jsonString) {
  let data;
  try{
    data = JSON.parse(jsonString);
    console.log(data);
  }catch(e){
    console.log("Error", e.message);
  }finally{
    console.log("parsing finished");
  }
}
readJSON('{"name": "John", "age": 30}');
readJSON('Invalid JSON');
//{name: 'John', age: 30}
//parsing finished
//Error Unexpected token 'I', "Invalid JSON" is not valid JSON
//parsing finished

//Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
//Класс должен поддерживать свойства message, name и stack.

class FormatError extends SyntaxError{
  constructor(message){
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
// решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». 
// Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let checkingMessages = new WeakSet()

checkingMessages.add(messages[0])
checkingMessages.has(messages[0])

//Теперь вопрос стоит так: какую структуру данных вы бы 
//предложили использовать для хранения информации о том, когда сообщение было прочитано?

let dateMessages = new WeakMap()

dateMessages.set(messages[0], new Date(2024, 1, 1))
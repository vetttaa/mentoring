async function showAvatar() {
  // запрашиваем JSON с данными пользователя
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // запрашиваем информацию об этом пользователе из github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // отображаем аватар пользователя
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // ждём 3 секунды и затем скрываем аватар
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
  });

  img.remove();
  return githubUser;
}
showAvatar();

//Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson("no-such-user.json").catch(alert);

//В функции demoGithubUser замените рекурсию на цикл: используя async/await

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Логин?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (error) {
      if (error instanceof HttpError && error.response.status == 404) {
        alert("Такого пользователя не существует, попробуйте ещё раз.");
      } else {
        throw error;
      }
    }
  }

  alert(`Полное имя: ${user.name}.`);
  return user;
}
demoGithubUser();

//Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((result) => alert(result));
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
f();

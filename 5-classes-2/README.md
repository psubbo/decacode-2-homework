Написать приложение, которое:

Состоящее из 3 файлов: user.class.js, admin.class.js, index.js

В файле user.class.js должен быть описан класс пользователя с ключами firstName (строка), lastName (строка), hasAccess (false), isLoggedIn (false) и методами login, logout

Метод login должен изменять значение isLoggedIn на true, если ключ hasAccess равен true
Метод logout должен изменять значение isLoggedIn на false

В файле admin.class.js должен быть описан класс Admin, наследующий функционал от класса пользователя, но ключ hasAccess должен быть в значении true.

В файле index.js создать по одному объекту User и Admin вызвать у них метод login и вывести объекты в консоль
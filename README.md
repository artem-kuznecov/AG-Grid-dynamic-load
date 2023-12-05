# Инструкция по запуску

Проект тестового задания находится в [репозитории](https://github.com/artem-kuznecov/IRS-introductory-project)  в ветке master

## Установка зависимостей

Необходимо склонировать репозиторий локально и выполнить слеедующие действия:
   

 1. Перейти в директорию **/server** и выполнить `npm install`
 2. Запустить проект командой `npm run start`
 
	 **Примечание:** вместо первых двух пунктов возможно из директории /server выполнить `npm run start:clean` 
	 
 3. Перейти в директорию **/client** и выполнить `npm install`
 4. Запустить проект командой `npm run start`
 
	   **Примечание:** Вместо пунктов 3-4 возможно из директории /server выполнить `npm run start:clean`
 5. Приложение станет доступно на [localhost](http://localhost:3000/). Если были изменены стандартные порты, необходимо так же изменить их в ссылке

## Особенности

Сервер Express по умолчанию запускается на порте **8000**, а клиент - на порте **3000**

Если эти порты используются, сделать следующее:
 - В директории **/server** открыть файл **.env** и изменить переменную **PORT** на любой свободный порт. Также необходимо перейти в директорию **/client**, открыть файл **.env** и в параметрах **REACT_APP_EMPLOYEES_URL** и **REACT_APP_DEPARTMENTS_URL** заменить 8000 на выбранный порт.
 
 - В директории **/client** открыть файл **package.json**, где в переменной **scripts** в значение поля **start** заменить 3000 на выбранный порт клиента.

## Возможные проблемы

Проект разрабатывался на NodeJS версии **20.2.0**
При возникновении ошибки запуска обновите версию до последней стабильной

Также возможна проблема **CORS-политики** в браузере, которая не позволит отправлять запросы. При использовании браузера **Google Chrome** перейти по [ссылке](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=ru), установить и включить расширение, после чего перезагрузить страницу.

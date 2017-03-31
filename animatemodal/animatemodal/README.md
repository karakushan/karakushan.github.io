# animatemodal - плагин модальных окон jQuery

## Зависимости
* Библиотека JQuery
* animate.css https://daneden.github.io/animate.css/ (только в том случае если нужна анимация появления окна)

## Демо
<https://karakushan.github.io/animatemodal/>

## Подключение
для работы необходимо подключить эти файлы:

* animate-modal.js
* animate-modal.css
* animate.css

## Инициализация
Код элемента по которому будет осуществлён клик, data-target содержим id модального окна которое будет открыто.
```html
<a href="#" data-target="#modal-suport" class="btn-yellow modal-open">Написать нам</a>       
```
Код модального окна. Атрибут id можно менять по своему усмотрению.
```html
 <div class="modal" id="modal-suport">
   <div class="modal-content" >
     <!-- здесь содержимое модального окна -->
   </div>
 </div>
```
Инициализация плагина в вашем js файле. jQuery должен быть уже подключён.
```js
 $('.modal-open').animatemodal({
        animate: "animated fadeInDown"
 });
```






## Домашнее задание

### Теория

[Примеры с занятия](./example.js)

[Работа со стилями](https://learn.javascript.ru/styles-and-classes) + `Object.assign(elem.style, {width: '15px'})`

[Введение в браузерные события](https://learn.javascript.ru/introduction-browser-events)

===
### Практика

####(1) ⭐ Используя заготовку в папке [table](./table), создайте класс TableView, который будет уметь отрисовывать таблицу на странице. При этом TableView должен работать следующим образом:

- принимает в качестве аргумента экземпляр класса Table с данными для таблицы:
```javascript
var headers = ["name", "mark", "language"];
var data = [{
                language: 'JavaScript',
                mark: 8
            },
            {
                name: 'Anna',
                language: 'Ruby'
            },
            {
                name: 'Olga',
                mark: 5
            }];
var table = new Table(headers,data);
var tableView = new TableView(table);
```

- экземпляр класса TableView имеет метод createTable, который непосредственно создает все необходимые узлы для таблицы (подсказка [здесь](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)) и возвращает полученную таблицу. Обратите внимание, что в подсказке выше функция generate_table создает таблицу и вставляет ее в body. Нам нужно добиться от метода createTable немного другого: только возвращать DOM элемент, никуда его не вставляя (вставка будет происходить отдельной инструкцией, используя appendChild).

```javascript
// var tableView = new TableView(table);
var tableNode = document.querySelector('.table');
var createdTable = tableView.createTable();
tableNode.appendChild(createdTable);
```

После того как вы добились работоспособности вашего класса TableView, используйте кнопку, при нажатии на которую будет создаваться новая таблица на странице вместо старой. Этот фукнкционал должен быть реализован в файле [main.js](./table/main.js).


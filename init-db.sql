-- Создание базы данных

CREATE DATABASE company WITH OWNER postgres;

-- Создание таблиц

CREATE TABLE employees (
    id integer NOT NULL PRIMARY KEY,
    firstname CHARACTER VARYING(30) NOT NULL,
    lastname CHARACTER VARYING(30) NOT NULL,
    birthdate DATE NOT NULL,
    gender CHARACTER VARYING(1)
);

CREATE TABLE departments (
    id integer NOT NULL PRIMARY KEY,
    name CHARACTER VARYING(30) NOT NULL,
    foundation_date DATE NOT NULL,
    about_text CHARACTER VARYING(100),
    address CHARACTER VARYING(100),
    director_id INTEGER,
	CONSTRAINT fk_director FOREIGN KEY (director_id) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE SET DEFAULT
);

-- Наполнение таблиц начальными данными

-- Таблица employees

INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (1, 'Александрова', 'Алиса', '1996-03-28', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (2, 'Андреев', 'Егор', '1975-06-23', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (3, 'Артамонова', 'Мария', '1997-03-15', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (4, 'Архипов', 'Глеб', '1976-06-04', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (5, 'Барсуков', 'Михаил', '1969-10-08', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (6, 'Беляев', 'Руслан', '1968-12-13', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (7, 'Беляева', 'Дарья', '1984-02-24', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (8, 'Бобров', 'Михаил', '1985-09-11', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (9, 'Богомолова', 'Виктория', '1970-05-27', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (10, 'Бондарев', 'Святослав', '1971-08-19', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (11, 'Быкова', 'Полина', '1989-12-01', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (12, 'Вдовин', 'Юрий', '1982-01-11', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (13, 'Воронова', 'Вера', '1975-09-03', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (14, 'Гаврилова', 'Виктория', '1968-05-22', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (15, 'Голубев', 'Адам', '1985-09-28', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (16, 'Гончаров', 'Артём', '1992-12-06', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (17, 'Дроздов', 'Александр', '1998-02-15', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (18, 'Дубинина', 'Полина', '1979-04-11', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (19, 'Дубов', 'Егор', '1991-08-20', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (20, 'Дубова', 'Елизавета', '1996-12-24', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (21, 'Евдокимов', 'Даниил', '1975-01-14', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (22, 'Евсеев', 'Иван', '1967-12-31', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (23, 'Егоров', 'Алексей', '1973-05-24', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (24, 'Егорова', 'Мия', '1984-07-22', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (25, 'Ершова', 'Елизавета', '1981-12-23', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (26, 'Жуков', 'Борис', '1983-07-11', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (27, 'Зайцев', 'Матвей', '1993-04-06', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (28, 'Зеленин', 'Михаил', '2000-10-17', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (29, 'Иванов', 'Владимир', '1971-05-16', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (30, 'Иванова', 'Анна', '1991-01-30', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (31, 'Иванова', 'Василиса', '2000-08-16', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (32, 'Исаев', 'Даниил', '1986-11-08', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (33, 'Ковалева', 'Арина', '1985-08-19', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (34, 'Ковалева', 'Арина', '1983-03-08', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (35, 'Козлова', 'Кристина', '1996-10-23', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (36, 'Кольцова', 'София', '1984-07-03', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (37, 'Коровина', 'Мария', '1975-08-20', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (38, 'Крюкова', 'Полина', '1993-07-25', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (39, 'Кудрявцева', 'Алиса', '1969-02-09', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (40, 'Кузин', 'Артём', '1973-03-01', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (41, 'Кузнецов', 'Роман', '1965-11-22', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (42, 'Кузнецов', 'Никита', '1990-11-11', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (43, 'Кузьмин', 'Илья', '1971-09-26', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (44, 'Кулаков', 'Егор', '1978-04-12', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (45, 'Лазарева', 'Надежда', '1975-03-10', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (46, 'Лебедев', 'Егор', '1969-02-24', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (47, 'Леонтьев', 'Илья', '1977-01-07', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (48, 'Логинов', 'Фёдор', '1965-10-04', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (49, 'Лукьянова', 'Александра', '1986-12-20', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (50, 'Максимова', 'Мария', '1995-06-13', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (51, 'Марков', 'Андрей', '1989-05-10', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (52, 'Медведева', 'Елизавета', '1978-05-26', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (53, 'Мельников', 'Александр', '1967-08-02', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (54, 'Минаева', 'София', '1969-01-21', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (55, 'Миронова', 'Таисия', '1987-08-27', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (56, 'Миронова', 'Мирослава', '1985-01-04', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (57, 'Назарова', 'Светлана', '1998-05-28', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (58, 'Некрасова', 'Анна', '1981-04-11', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (59, 'Нестеров', 'Платон', '1982-09-29', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (60, 'Никифорова', 'Полина', '2000-10-01', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (61, 'Новикова', 'Анастасия', '1977-02-24', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (62, 'Носкова', 'Василиса', '1992-05-05', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (63, 'Окулов', 'Ярослав', '1969-12-18', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (64, 'Олейников', 'Адам', '1970-11-20', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (65, 'Орлов', 'Артемий', '1978-03-04', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (66, 'Панина', 'Мария', '1989-10-17', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (67, 'Петухов', 'Иван', '1993-11-16', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (68, 'Попов', 'Павел', '1998-03-29', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (69, 'Попова', 'Вероника', '1972-07-15', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (70, 'Попова', 'Варвара', '1993-12-15', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (71, 'Потапов', 'Егор', '1979-08-29', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (72, 'Потапова', 'Кристина', '1987-11-13', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (73, 'Прокофьев', 'Тимофей', '1977-03-27', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (74, 'Рубцова', 'Варвара', '1977-02-14', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (75, 'Сазонова', 'Вероника', '1994-01-20', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (76, 'Самойлов', 'Сергей', '1971-05-17', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (77, 'Сафонов', 'Лев', '1972-01-01', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (78, 'Севастьянов', 'Михаил', '1967-03-08', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (79, 'Семенов', 'Всеволод', '1974-11-18', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (80, 'Сергеева', 'Зоя', '2000-11-19', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (81, 'Смирнов', 'Александр', '1973-07-09', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (82, 'Смирнова', 'София', '1998-05-22', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (83, 'Соколов', 'Максим', '1985-09-16', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (84, 'Соколов', 'Владислав', '1977-12-10', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (85, 'Соловьев', 'Дмитрий', '1978-07-07', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (86, 'Софронова', 'Анна', '1989-10-19', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (87, 'Степанова', 'Ксения', '1976-10-18', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (88, 'Степанова', 'Арина', '1996-11-13', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (89, 'Суворова', 'Ева', '1993-04-16', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (90, 'Титов', 'Дмитрий', '1972-07-18', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (91, 'Титова', 'Кира', '1986-06-27', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (92, 'Тихонов', 'Николай', '1971-12-07', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (93, 'Трифонов', 'Илья', '1982-01-26', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (94, 'Фирсов', 'Лев', '1975-10-29', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (95, 'Фролова', 'Ксения', '1990-10-12', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (96, 'Харитонова', 'Дарина', '1986-08-20', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (97, 'Чистякова', 'Варвара', '1968-07-04', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (98, 'Шестакова', 'Алиса', '2000-04-05', 'Ж');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (99, 'Щербаков', 'Антон', '1983-07-25', 'М');
INSERT INTO public.employees (id, firstname, lastname, birthdate, gender) VALUES (100, 'Яковлева', 'Екатерина', '1998-01-26', 'Ж');

-- Таблица departments

INSERT INTO public.departments (id, name, foundation_date, about_text, address, director_id) VALUES (1, 'Перекресток', '2009-03-13', 'Продуктовый ритейл, алкоголь', 'г. Москва, ул. Средняя Калитниковская, д. 28 стр. 4', 90);
INSERT INTO public.departments (id, name, foundation_date, about_text, address, director_id) VALUES (2, 'Карусель', '2013-10-27', 'Алкоголь, продуктовый ритейл', 'г. Москва, ул. Академика Королева, д. 19, помещ. 5045', 3);
INSERT INTO public.departments (id, name, foundation_date, about_text, address, director_id) VALUES (3, 'Чижик', '2007-11-25', 'Продуктовый ритейл', 'г. Москва, ул. Ладожская, д. 10', 74);
INSERT INTO public.departments (id, name, foundation_date, about_text, address, director_id) VALUES (4, 'Пятерочка', '2000-01-07', 'Доставка продуктов, продуктовый ритейл, алкоголь ', 'г.Санкт-Петербург, Невский пр-кт, 90/92', 63);
INSERT INTO public.departments (id, name, foundation_date, about_text, address, director_id) VALUES (6, 'Много лосося', '2013-12-16', 'Доставка еды', 'г. Москва, муниципальный округ Нижегородский вн.тер.г., ул. Средняя Калитниковская, д. 28, стр. 4', 4);
INSERT INTO public.departments (id, name, foundation_date, about_text, address, director_id) VALUES (5, 'Перекресток Express', '2007-12-13', 'Продуктовый ритейл, доставка продуктов', 'г. Москва, пл. Спартаковская, д. 14 стр. 3 ком. 10', 69);
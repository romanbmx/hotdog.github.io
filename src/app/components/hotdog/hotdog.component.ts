import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotdog',
  templateUrl: './hotdog.component.html',
  styleUrls: ['./hotdog.component.css']
})
export class HotdogComponent implements OnInit {

  fastfood:string;
  type:string;                  //Типи змінних
  ingredients:Ingredients;
  price: any;
  additionaly:string[];
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.fastfood = 'Хот Дог';
    this.type = 'Класичний';
    this.ingredients = {
      roll: 'Житня',
      sausage: 'Соєва',              //За замовчування стоять такі параметри
      cucumber: 'Немає',
      tomato: 'Немає',
      cabbage: 'Немає',
      carrot: 'Немає'
    };
    this.price = "20грн";
    this.additionaly = ["Кетчуп", "Гірчиця", "Майонез"];
  }

  showEdit() {
    this.isEdit = !this.isEdit;  //Юзаєм Редагувати і форми появляються і зникають
  }

  addIng(ingredient){
    this.additionaly.unshift(ingredient);   //Добавляє то шо ми вписуєм в поле  в Додатково
    return false;
  }

  deleteIng(ingredient){
    for(let i = 0; i < this.additionaly.length; i++){
      if(this.additionaly[i] == ingredient){           //Видаляє по 1 все шо є в полі Додатково
      this.additionaly.splice(i, 1);
      break;
    }
  }
}

  hotdogSelect(hotdogType){
    if(hotdogType == 'Класичний'){
      this.fastfood = 'Хот Дог';
      this.type = 'Класичний';
      this.ingredients = {
        roll: 'Житня',                      //Метод нажимання на кнопки;
        sausage: 'Соєва',                   //На яку кнопку нажмем такі дані...
        cucumber: 'Немає',                  //і будуть відображатися.
        tomato: 'Немає',
        cabbage: 'Немає',
        carrot: 'Немає'
      };
      this.price = "20грн";
      this.additionaly = ["Кетчуп", "Гірчиця", "Майонез"];
    }
    else if(hotdogType == 'Французький'){
      this.fastfood = 'Хот Дог';
      this.type = 'Французький';
      this.ingredients = {
        roll: 'Пшенична',
        sausage: 'Баварська',
        cucumber: 'Немає',
        tomato: 'Немає',
        cabbage: 'Немає',
        carrot: 'Немає'
      };
      this.price = "18грн";
      this.additionaly = ["Кетчуп", "Гірчиця", "Майонез"];
    }
    else if(hotdogType == 'Мисливський'){
      this.fastfood = 'Хот Дог';
      this.type = 'Мисливський';
      this.ingredients = {
        roll: 'Житня',
        sausage: 'Мисливська',
        cucumber: 'Немає',
        tomato: 'Немає',
        cabbage: 'Немає',
        carrot: 'Немає'
      };
      this.price = "22грн";
      this.additionaly = ["Кетчуп", "Гірчиця", "Майонез"];
    }
    else if(hotdogType == 'В лаваші'){
      this.fastfood = 'Хот Дог';
      this.type = 'В лаваші';
      this.ingredients = {
        roll: 'Лаваш',
        sausage: 'Соєва або Мисливська',
        cucumber: 'Є',
        tomato: 'Є',
        cabbage: 'Є',
        carrot: 'Є'
      }
      this.price = "25грн";
      this.additionaly = ["Кетчуп", "Гірчиця", "Майонез"];
    }
    else{
      this.fastfood = 'Хот Дог';
      this.type = 'Подвійний';
      this.ingredients = {
        roll: 'Житня',
        sausage: '2 Соєві',
        cucumber: 'Немає',
        tomato: 'Немає',
        cabbage: 'Немає',
        carrot: 'Немає'
      };
      this.price = "30грн";
      this.additionaly = ["Кетчуп", "Гірчиця", "Майонез"];
    }
  }
}

interface Ingredients{
  roll:string,
  sausage:string,
  cucumber:string,      //Задали типи змінних для Інгридієнтів
  tomato:string,
  cabbage:string,
  carrot:string
}

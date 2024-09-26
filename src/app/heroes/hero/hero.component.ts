import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

//clases exponen la informacion
export class HeroComponent {
// propiedades junto con capitalizedName
  public name: string= 'ironman';
  public age: number= 45;


//metodo geters
  get capitalizedName():string{
      return this.name.toUpperCase();

  }

  //metodo
  getHeroDescription():string{

      return `${this.name} - ${this.age} `;
  }

  changeHero():void{

      this.name= 'Spiderman';


  }
  changeAge():void{
    this.age= 25;

  }

  resetForm():void{
    this.name= 'ironman';
   this.age= 45;

   document.querySelector('h1')!.innerHTML= '<h1>Desde Angular modifico DOM</h1> '
  /*document.querySelectorAll('h1')!.forEach(element =>{
  element.innerHTML== '<h1>Desde Angular modifico DOM</h1>';

});*/
  }

}

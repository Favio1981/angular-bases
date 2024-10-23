import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
    public characterList: Character[]= [{
        name:'Trunk',
        power:10

    }];

    //onDeleteId index
    @Output()

    public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?:string):void{
      //emitir el id del personaje
       // console.log({index});
       if (!id) return;
        this.onDelete.emit(id);

    }


}

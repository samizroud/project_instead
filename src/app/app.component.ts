import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public masterTag: string=""
  public titleMaster:string=""
  public listTags: string[] = ["",""];
  changeMaster(event:any){
    this.masterTag=event.target.value
  }
  changeTitle(event:any){
    this.titleMaster=event.target.value
  }

  addTag(){
    const tag = document.getElementById('tag') as HTMLInputElement
    this.listTags.push(tag.value)
    
  }

  removeTags(){
    let index=this.listTags.length
    this.listTags.splice(index-1,1)
    console.log(this.listTags)
  
  }
}

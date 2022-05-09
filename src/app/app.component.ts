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
}

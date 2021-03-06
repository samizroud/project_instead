import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { slide } from './list.animation';

/**
 * List item containing one or more lines
 */


/**
 * Displays items as an unordered list
 *
 * Each item contains one or more line {@see ItemComponent}
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide],
})
export class ListComponent implements OnInit {
  @Input()
  public master: string="" ;

  @Input()
  public title: string=""  ;

  @Input()
  public items: string[] = [];


 ngOnInit() {
  
  }

}
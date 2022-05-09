import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItem } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // public rulesTitle: string = 'The goal is not only to create a working example but well written code:';

  public rules: ListItem[] = [
    {
      lines: ['tag','tag2'],
    },
   
    // {
    //   lines: ['Adapt to the existing code-style'],
    // },
    // {
    //   lines: ['Comment your code and explain your choices'],
    // },
  ];

  public instructionsTitle: string = 'Given the limited time available, implement in priority order:';

  public instructions: ListItem[] = [
    {
      lines: ['tag'],
    },
    // {
    //   lines: ['Possibility to rename the Master tag'],
    // },
    // {
    //   lines: ['Possibility to add and remove tags'],
    // },
    // {
    //   lines: ['Possibility to name the tag to be added'],
    // },
    // {
    //   lines: ['Imagine that performances might be a concern'],
    // },
    // {
    //   lines: [
    //     'The +n behaviour when the space is too narrow to show every tags',
    //     '(Think of all the ways for the available space to change)',
    //   ],
    // },
    // {
    //   lines: ['Now, tags come from a (slow) api'],
    // },
  ];
}

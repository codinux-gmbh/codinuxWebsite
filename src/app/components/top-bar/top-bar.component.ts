import { Component } from '@angular/core'


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  isSideBarCollapsed = true


  constructor() { }


  // TODO: for navigation links find a better solution as when clicking on navigation link noone wants to see the animation how side navigation menu collapses
  toggleSideBarVisibility() {
    this.isSideBarCollapsed = !!! this.isSideBarCollapsed
  }

}

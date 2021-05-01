import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  template: `
    <footer>
      <div class="ps-4 pe-4 overflow-hidden">
        <div class="row d-flex align-items-center">
          <div class="col">
            <small>
              TMF &copy; All rights reserved 2021-{{ currentYear }}
            </small>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent {
  currentYear = new Date().getFullYear();
}

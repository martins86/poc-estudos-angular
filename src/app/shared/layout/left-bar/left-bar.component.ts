import { Component, EventEmitter, Output } from '@angular/core';

import { RegistryIconsService } from '@shared/services/registry-icons/registry-icons.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent {
  @Output()
  closeLeftBarForMe: EventEmitter<string> = new EventEmitter();

  constructor(protected iconRegistryService: RegistryIconsService) {
    this.registeringIcons();
  }

  closeLeftBar(): void {
    this.clickMenuCheck();
    this.closeLeftBarForMe.emit('closeLeftBar');
  }

  clickMenuCheck(): void {
    window.document.getElementById('menu-checked')?.click();
  }

  registeringIcons(): void {
    const iconsNames: string[] = [
      'account_circle',
      'home',
      'login',
      'manage_accounts',
      'logout',
      'web',
    ];
    this.iconRegistryService.registryIcons(iconsNames);
  }
}

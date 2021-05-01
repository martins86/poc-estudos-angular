import { Component, EventEmitter, Output } from '@angular/core';

import { RegistryIconsService } from '@shared/services/registry-icons/registry-icons.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @Output()
  toggleLeftBarForMe: EventEmitter<string> = new EventEmitter();

  logotipoBranco = './assets/images/logo/logo-tmf86-branco.svg';

  constructor(protected iconRegistryService: RegistryIconsService) {
    this.registeringIcons();
  }

  toggleLeftBar(): void {
    this.toggleLeftBarForMe.emit('toggleLeftBar');
  }

  registeringIcons(): void {
    const iconsNames: string[] = [
      'settings',
      'help_outline',
      'person',
      'login',
      'manage_accounts',
      'logout',
    ];
    this.iconRegistryService.registryIcons(iconsNames);
  }
}

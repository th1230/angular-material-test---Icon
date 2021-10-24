import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//解決xss的問題，需在module中import HttpClientModule
import { MatIconRegistry } from '@angular/material/icon';
//註冊第三方的icon圖案

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-materialIcon';

  constructor(
    private MatIconRegistry: MatIconRegistry,
    private DomSanitizer: DomSanitizer
  ) {
    //使用DI依賴注入後使用其方法

    this.MatIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.DomSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icon/angular.svg'
      )
    );
    //註冊svg圖案

    this.MatIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    //註冊第三方icon圖示
  }
}

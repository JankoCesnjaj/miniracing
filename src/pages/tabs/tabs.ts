import { Component } from '@angular/core';

import { RegisterPage } from '../register/register';
import { RacePage } from '../race/race';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = RegisterPage;
  tab3Root = RacePage;

  constructor() {

  }
}

import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  editor: any;

  componentDidLoad() {
    
  }

  render() {
    return (
      <ion-content>
        Hello
      </ion-content>
    );
  }
}

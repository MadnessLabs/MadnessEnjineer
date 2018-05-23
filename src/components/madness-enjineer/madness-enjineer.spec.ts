import { TestWindow } from '@stencil/core/testing';
import { MadnessEnjineer } from './madness-enjineer';

describe('madness-enjineer', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLAppProfileElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [MadnessEnjineer],
      html: '<madness-enjineer></madness-enjineer>'
    });
  });
});

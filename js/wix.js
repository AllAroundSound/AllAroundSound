import { createClient, OAuthStrategy, media } from '@wix/sdk';
import { items } from '@wix/data';

export const wix = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: '47688e4c-0fcd-4463-94b5-41aad72bc9e3' })
});

// Turns a Wix image value (wix:image://...) into a normal URL
export const imgUrl = (img, w, h) => media.getScaledToFillImageUrl(img, w, h, {});

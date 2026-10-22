import { createClient, OAuthStrategy, media } from '@wix/sdk';
import { items } from '@wix/data';

export const wix = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: 'ad76b052-fd24-4b15-aed6-66397a3c1eb0' })
});

// Turns a Wix image value (wix:image://...) into a normal URL
export const imgUrl = (img, w, h) => media.getScaledToFillImageUrl(img, w, h, {});

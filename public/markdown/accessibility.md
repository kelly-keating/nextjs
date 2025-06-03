# Accessibility Notes

Some collected notes relating to web accessibility.

## Tools

WAVE

![WAVE tool Interface](https://espaciocompartir.inap.es/v3/pluginfile.php/5071/mod_resource/content/20/img0.png)

## Emojis

_Displaying emojis in a way that is also accessible_

Images are notable for needing accessible alternatives (the alt text), but sometimes we also require something similar to this for other visual elements (such as emojis) that don't have these accessibility features naturally built in. In this case we ask, does this need clearer labeling?

Emojis have a word or code that is associated with the picture. E.g. 🦈 is known simply as "shark" and 😎 is "smiling face with sunglasses". Many screen readers simply announce this text representation rather than referencing that this came from an emoji, which can make some sentences a bit of a mouthful especially in casual messaging (e.g. "Congratulations bottle with popping cork bottle with popping cork bottle with popping cork" is the visually shorter "Congratulations🍾🍾🍾").

Most of the time, this may be fine (emojis are so common now that many users say they are used to how these show up within text) but sometimes we may want to specifically reference that this is an emoji image we are using and differentiate it from emoji used within text. This is the case when these are implemented as icons or other stand-alone elements.

In this case we can make use of aria roles and labels:

```html
<span role="img" aria-label="Tiger face">🐯</span>
```

This means screen readers will name that this is specifically an image (rather than text content) and give its label description. Not all emojis need this, but it can be helpful when treating them like stand-alone images to make sure they will be interpreted as such by all users.

<!-- TODO: display none vs render off screen -->

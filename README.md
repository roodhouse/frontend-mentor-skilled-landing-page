# Frontend Mentor - Skilled e-learning landing page solution

This is my solution to the [Skilled e-learning landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot
#### mobile
![](../frontend-mentor-skilled-landing-page/src/assets/mb.png)

#### tablet
![](../frontend-mentor-skilled-landing-page/src/assets/tab.png)

#### desktop
![](../frontend-mentor-skilled-landing-page/src/assets/dt.png)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-skilled-landing-page)
- Live Site URL: [Add live site URL here](https://skilled.rugh.us/)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

I learned a little bit more about positioning elements on the right edge so that they do not create a scrollbar if they are too large. Here is a sample of the code:

```html
<div id='topImage' className='md:absolute md:w-[368px] md:h-[640px] md:overflow-hidden md:left-[400px] md:top-[-65px] lg:w-[400px] lg:left-[624px] xl:w-[653px] xl:h-fit xl:top-[-180px] xl:left-[787px] 2xl:w-[616px] 2xl:left-[902px]'>
            <img src={TopImage} alt="Cofee drinker" className='md:hidden' />
            <img src={TabletImage} alt="Cofee drinker" className='hidden md:block md:max-w-[640px] md:w-[640px] xl:hidden' />
            <img src={DesktopImage} alt="Cofee drinker" className='hidden xl:block xl:max-w-[991px] xl:w-[991px] xl:h-full' />
</div>
```

I learned that delcaring the width of the parent element and then using overflow hidden will clip the image at the width of the parent container. This was great for me to learn. However, due to absolute position and then moving the element with top and left the image does not scale correctly. I can not figure out how to get the image to scale and utilize overflow hidden at the same time. Either the image creates a scrollbar (overflow not hidden) or the image does not scale (absolute position, left and top). Here is an example:

#### overflow hidden

![](../frontend-mentor-skilled-landing-page/src/assets/overflowvHidden.png)

#### overflow visible

![](../frontend-mentor-skilled-landing-page/src/assets/overflowVisible.png)

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)
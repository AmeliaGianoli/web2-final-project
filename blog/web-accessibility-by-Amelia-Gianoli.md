---
title: "Web Accessibility"
author: "Amelia Gianoli"
description: "An overview of Accessibility"
published: "2026-2-25"
---

# Web Accessibility Pre-Research Reflection

## What Web Accessibility Means to Me

Accessibility to me means that anyone can utilize the web page, regardless of physical limitations.  

Everyone benefits in some way. Obviously those with a physical disability (such as screen reader compatability for the blind) are the intended target, but everyone benefits from an alt image description if the image fails to load properly, or when that alt tag allows it to be found with a search engine. Having tab stops and input field tags would greatly help someone that may struggle with using a mouse for some reason, but it also benefits those using a laptop with trackpad, or those of us that just prefer to primarily use a keyboard.

## Accessibility in Practice: Real Website Experiences

Skyward is the website that the school district uses and it is one of the most terrible user experiences I have ever had. It is difficult to navigate, once you log in it opens in a new bare-bones window, the mobile version doesn't scroll correctly, and that is just the tip of the iceburg. To improve it, I would fix the media query and make it more mobile-friendly. Simply adjusting the font size and layout would make it easier to read/navigate. The forms are very basic (like, Web I basic) so putting a little bit of effort into styling them would make it a more positive experience. Adding in buttons instead of links to things would make it easier to navigate as well.

Almost every website I have interacted with has some drawback that detracts from a positive user experience. Usually it is a navigation issue (site maps are not as ommon as they used to be) or layout/style issue. The thing is, besides the undiagnosed ADHD, I am a fairly neurotypical person with no physical limitations. If these small things are leading to a negative user experience for me, I can almost guarantee that someone with more challenges is struggling even more.

## Categories of Disabilities That Affect Web Use

### Physical

Physical conditions may limit the way one can actually interact with the computer screen or device that they use to navigate the webpage. Being able to navigate using only a keyboard and not relying on a mouse could help someone that has a condition such as tremors or anything that affects fine motor control. Being able to navigate with buttons instead of links would allow you to adjust the size of buttons to be easier to click.

### Sensory

Limitations such as vision or hearing loss would greatly affect how one interacted with a webpage. Needing to use a screenreader would put you at the mercy of whoever designed the page, and you would just have to hope that they tagged everything appropriately and used alternative text, etc. Hearing would probably be less impactful, but making sure any audio/video is properly captioned would negate most of this.

### Intellectual / Developmental

Having an overstimulating page, or a page that is too “busy” could prove to be a barrier to someone with ASD or another developmental challenge. Having things very clearly labeled and having a well-designed site map could aid in navigating your page.

### Mental / Behavioral

Much like the intellectual/developmental category, designing a page that is more streamlined and free from extra distractions can aid those that struggle with mental or behavioral challenges. A consistent layout, and logical structure will go a long way towards a positive user experience.

### Learning / Neurological

Individuals with these challenges often require simple, consistent, and predictable design. So all the same strategies for the previous two categories also apply here. Additionally being mindful of font choice (maybe provide the user with a way to adjust font settings?) and size is important.

## Experiencing Barriers Firsthand

Trying to navigate a website without sight or a mouse was impossible. Regardless of how much I use Blackboaard on a regular basis, I am not equipped to navigate it without sight or a mouse.

Watching the first 30 seconds of the Strings API video with no sound was a challenge. Even with CC on, the nuances and tone were completely missing. It was all one run-on sentence, so I had to guess at where the breaks and pauses were to make it more understandable. Even knowing the content, I was still confused and overwhelmed trying to process what I was reading (and having to read while seeing what was being displayed in the video).

Technology itself can also be a barrier. If I did not have access to a computer and was relying solely on mobile devices, I would avoid a lot of sites (such as Blackboard). Conversely, if I only had computer access, I wouldn't use tools like Google nearly as often. When it comes to quickly looking something up, I almost always reach for my phone, even if I have my computer up and running. Large/inefficient websites may take too long to load based on internet connection and processing power of the device accessing it.

## Legal and Ethical Considerations

My understanding of ADA law would say that website owners do have a legal obligation to make their sites accessible. I think all public access websites should be required to be as accessible as possible. Private business sites I do not think should be required to do so, but it would almost always be in their best interest to do so. Typically, if a site is difficult to navigate or use, the business is going to lose out on revenue.

Legally, organizations may open themselves up to lawsuits or fines from regulatory bodies. Financially, there would be a loss of revenue as potential customers turn elsewhere and find a vendor that is more accessible to them. Socially, if they are not accessible, they will inevitably receive bad publicity and that will have further financial consequences.

Ethically, we should be trying to make all goods and services available to the widest possible audience. We should be striving to not exclude anyone, deliberately or accidentally.

## Coding for Accessibility

### Buttons and Clickable Elements

The following code creates accessibility issues:

```html
<div onclick="submitForm()">Submit</div>
```

It is only able to be submitted if the user "clicks" the "Submit" text; it is not an actual button. This is a barrier to anyone that cannot use a mouse or trackpad for some reason, nor would it be an automatic tab stop. To improve it, it should be changed to:

```html
<form><button type="submit">Submit</button></form>
```

### Alt Text on Images

Alt text provides a description for screen readers to read and also provides a descriptor if the image link is broken for some reason.

Instances where the alt should be blank:
- When it adds no meaningful information, is just for styling, or repeated visual flair (example: a divider line)
- Redundant images where the information is already provided in nearby text (such as an image caption)

Best practice is to include `alt=""` so the screen reader does not read the file name instead.

### Accessible Form Fields

This form field is missing a label:

```html
<input type="text" placeholder="Enter your email">
```

It has no label for the screen reader to read, so it would not consistently announce "enter your email." Furthermore, the placeholder goes away once user starts typing, so it would not reliably be able to be tabbed back to.

A more accessible version:

```html
<label for="email">Email</label>
<input type="text" id="email" placeholder="Enter your Email">
```

### Semantic HTML

Semantic elements describe what they are, not just what they look like. For example, `<main>`, `<button>`, and `<form>` clearly define their purpose. Without prior knowledge, elements like `<div>` are not intuitive in what they actually are.

### ARIA and Custom Components

Using only `<div>` and `<span>` elements for interactive components does not define what the elements are doing, if the dropdown is expanded, or what the result will be. It also does not allow for keyboard navigation/interaction.

ARIA stands for Accessible Rich Internet Applications. ARIA is a supplement, not a replacement — if native HTML is sufficient, use that instead.

Common ARIA attributes:
- `role` defines what something is
- `aria-expanded` tells if something expandable is open or closed
- `aria-haspopup` indicates if an element will open a popup
- `aria-label` provides an accessible name directly on the element
- `aria-labelledby` uses another element's ID
- `aria-describedby` supplements the accessible name
- `aria-hidden` hides content from screen readers (such as an icon)
- `aria-live` tells the reader to announce dynamic content updates

Example of improving an icon-only button:

```html
<button><i class="icon-trash"></i></button>
```

Screen readers will most likely announce "button" with no context. A fix:

```html
<button aria-label="trash"><i class="icon-trash"></i></button>
```

### Keyboard Navigation

Keyboard navigation means using the keyboard only to navigate and interact with a website, typically using arrows, tab, and enter/space keys.

On google.com, I did a search for keyboard navigation, and it seemed like every element was able to be interacted with. I did not find anything that was unable to be selected with tab. I did hit a roadblock in that I had no idea how to go back to a prior page, but was able to find the info very quickly (alt+left arrow). For laptop users like myself, using the keyboard to navigate is often easier than using the trackpad, regardless of ability level.

### Color Contrast

Contrast makes it much easier to read or see what is going on. Light colored text on a light background can be very difficult to read, no matter how good your sight is. Using an online contrast checker showed that light gray text (#999999) on white fails accessibility standards.

### Meaningful Link Text

This link is poor:

```html
<a href="document.pdf">Click here</a>
```

It does not give any indication of what you are clicking. From an accessibility standpoint, it does not tell you where it is pointing or what type of link it is. A better version:

```html
<a href="AccessibilityCheatSheet.pdf">Here is an accessibility reference sheet</a>
```

## Accessibility Benefits Everyone

Accessibility benefits all users. I often watch videos with no sound, so captions are very helpful. Having a transcript is even better. I often look things up quickly on a mobile device so being able to quickly and easily navigate is a must. I am often on the go and look things up as the idea strikes me, so internet connectivity can be questionable. Nothing is more annoying than waiting full minutes for a page to load because cell service is spotty in a given location.

## Questions I Would Ask a Company

- What level of updates are you open to — incremental improvements, structural redesign, or a full rebuild if needed to meet accessibility standards?
- Are there any brand requirements (such as colors, typography, or layout elements) that must remain unchanged?
- Are there specific audiences, accessibility needs, or usage contexts we should prioritize (e.g., screen reader users, keyboard-only navigation, mobile users, or low-bandwidth environments)?

## Area of Interest for Further Research

My biggest area of interest is finding ways to streamline the process of checking accessibility.
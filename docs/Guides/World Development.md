# World Development
## Why?
Hello, and thank you for being here. My primary purpose of this guide is to help catalogue my techniques and skills, both for my own future reflection and to document and share these techniques for other who wish to get into making virtual worlds in VRChat and beyond. Forgive me but I'd like to infodump my thoughts, if you just want a tutorial, skip this section.

A lot of art and creativity flourishes and dies by the privileges and access to resources by the artists that create it. The same way some people pontificate on the number of Albert Einsteins equivalents are being born into economic situations they can't thrive; so too do artists of all kinds. But we live in an age where access to the internet is ubiquitous for many, and it's arguably visibly on the horizon and in the air for those who desire it and don't yet have it. 

By sharing my knowledge about virtual world development, I can hand the tools I use to the people who need it for their own endeavors.

---
# 2. What to Expect
First off I want to set expectations; like every form of art, you don't make virtual worlds to get rich. Some of you might find a way or get lucky, but it's never a given. **You make art because you love it.** Not for your family or friends, **but for you alone**.

I've spent **way** to long grinding trying to strike it big, make content that will get me attention. All of it, and I do mean **all** of it has ultimately failed. Even some of my biggest successes and new accomplishments never felt like *my* accomplishments because I wasn't doing it for myself. [Forgotten Cat Tree](/Worlds/Forgotten Cat Tree), one of my biggest successes took months of labor and burnout only to succeed and feel... meh, I didn't feel any proud of it. 

With that successful failure, I started making worlds just for myself, nobody else, and that started feeling much better. I went on to make [Abstract Backyard Glow](/Worlds/Abstract Backyard Glow) and that did moderately well and more or less stepped away from world making, it felt wrong, I was burnt out, and didn't want to do it anymore. Then one day, I made a joke with a friend and slapped together a [VRChat meta shitpost world](/Worlds/World Is Not Available) in under two hours one night before bed. And god damnit if that didn't make it through the VRChat Labs clout-gate in less than 48hrs with little to no marketing.

In contrast with worlds I've spent 100s of hours working on, that really hurts.

Which is why I say don't do this unless you genuinely want too. Don't let yourself get carried away, chasing arbitrary numbers and success for the sake of having something to show for it. Just make things because you enjoy making things. Create things to scratch that itch to create.

If you don't feel like you have an itch to create, that's okay too. Usually that just means you haven't found the right medium for you or you just don't know how to stretch your muscles in the medium you've chosen. If you'd like further reading, Adam Savage's Every Tool's a Hammer (ISBN:9781982113476) is really one of my favorites to help ground myself surrounding my creative endeavors. 

---
# 3. Tools You'll Need
Now with the introductory stuff out of the way, lets get down to practical information! Note that this blog assumes you're using VRChat. Note that this is being written around late 2024 and VRChat and it's SDK are subject to change, and I might not always have the time to update the information here. If you run into errors, ask around and check the official [VRChat Creator Docs](https://vcc.docs.vrchat.com/) and or the [general purpose documentation](https://docs.vrchat.com/).

Here's what you'll need (don't worry all of these are free):

- **[VRChat Creator Companion](https://vcc.docs.vrchat.com/) (Also known as the VCC.)** - micromanages project package updates and can even install the correct version of Unity for you.
- **[Unity Hub](https://unity.com/unity-hub)** - Micromanages your Unity installs, lets you add and remove platform export packages at any time. Requires a free Unity account. If the VCC ever has trouble installing Unity it might ask you to install it through Unity Hub. Great if you're also a Unity dev or need to export content for [ChilloutVR](https://store.steampowered.com/app/661130/ChilloutVR/) or [VSeeFace](https://www.vseeface.icu/), which may require different unique Unity versions.
- **[Current supported version of the Unity Editor](https://creators.vrchat.com/sdk/upgrade/current-unity-version/)** - Whatever version of Unity VRChat's currently using.
- **Preferred model editor with a `.FBX` export format.** ([Blender](https://www.blender.org/) is recommended.)
- **Preferred image/texture editor with `.PNG` export format** ([Paint.NET](https://www.getpaint.net/index.html) or [Krita](https://krita.org/en/) are recommended.)
- **Windows OS** - Yes. I know. I hate it too. But so far the most stable and only officially supported editor OS for VRChat is Windows. If you're a Linux daily driver, I'd advise just getting Windows disk just for this trust me, it's just not worth the headache.

The breadth of skills and disciplines that go into making virtual worlds is incredibly diverse, so your choice of tools will reflect what you're most comfortable with.

## Installation 
There are some installation gatchas that might trip you up or be inconvenient; here are some of my suggestions:

- I recommend first installing Unity Hub then the VCC, this way the VCC can call upon Unity Hub if it needs it.
- Install Blender through the **[website](https://www.blender.org/)** installer not through Steam (yes it's on Steam). Unity will automatically call upon Blender to export `.blend` files (and maybe a few other types of files) in your project to `.fbx` at import time. But Unity can struggle to identify Blender if it's installed through steam.
I have been lately working on a debugger ui & i faced some issues to make the debugger toolbar detachable, which means that as a user, i should be able to take-off the toolbar from its original position & move it where i want on my screen, still i should also have the ability to get it back to its first place.

So basically, this is what i was trying to do:

![dnd-kit-detachable](./assets/img/posts/dnd-kit-detachable.gif)

It looks pretty simple right? Let's then see how we can implement this using [Dnd-kit](https://dndkit.com/).

Before going more further, i assume that you already have a basic idea of how Dnd-kit works & how to add it to your project, if not please check the official [documentation](https://docs.dndkit.com/).

So the first step is to setup our [DndContext](https://docs.dndkit.com/api-documentation/context-provider), & put our Toolbar component inside it.

<br/>

<iframe src="https://codesandbox.io/embed/cool-glade-owi9d?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cool-glade-owi9d"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Next, the Toolbar component should have a **detached** state, a **current position** state & a state which indicates if the toolbar is currently being dragged **over its original place**.

<br/>

<iframe src="https://codesandbox.io/embed/cool-glade-owi9d?fontsize=14&hidenavigation=1&module=%2Fsrc%2FToolbar%2Findex.tsx&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cool-glade-owi9d"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Finally, when the **detached** state equals true, we use a [portal](https://en.reactjs.org/docs/portals.html) to move the Toolbar component outside its placeholder (check the [DraggableToolbar](https://codesandbox.io/s/cool-glade-owi9d?file=/src/Toolbar/DraggableToolbar.tsx) component, you can also check the [useDraggable](https://docs.dndkit.com/api-documentation/draggable/usedraggable) & [useDroppable](https://docs.dndkit.com/api-documentation/droppable/usedroppable) hooks documentation to have a better understanding).

Is that all we need? It should be the case, but due to the fact that Dnd-kit is handling the draggable components state/positions in an internal state (inside the DndContext) & that for some reasons the position of each draggable component is reseted when you drag it, the above code won't work correctly.

Here is what you'll get if you try the above example:

<br/>

<iframe src="https://codesandbox.io/embed/cool-glade-owi9d?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="cool-glade-owi9d"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

To solve the position reset issue, we have to add an **initial position** state & set the initial position based on the current position of the toolbar each time the user drops it on the screen, additionally we need to define a custom [collision detection strategy](https://docs.dndkit.com/api-documentation/context-provider/collision-detection-algorithms) & a custom [modifier](https://docs.dndkit.com/api-documentation/modifiers) which will use the initial position as their starting point.

<br/>

<iframe src="https://codesandbox.io/embed/dnd-kit-detachable-component-fixed-wvp98?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dnd-kit-detachable-component-fixed"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<iframe src="https://codesandbox.io/embed/dnd-kit-detachable-component-fixed-wvp98?fontsize=14&hidenavigation=1&module=%2Fsrc%2FToolbar%2Fmodifiers.ts&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden; margin-top: 15px"
     title="dnd-kit-detachable-component-fixed"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Here is the final result:

<br/>

<iframe src="https://codesandbox.io/embed/dnd-kit-detachable-component-fixed-wvp98?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dnd-kit-detachable-component-fixed"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

That's it! I know that this might look tricky, but that's the best way i figured out to solve a such problem, if you ever have a better solution feel free to share it in the comment section below. You can also find the full code example [here](https://codesandbox.io/s/dnd-kit-detachable-component-fixed-wvp98?file=/src/App.tsx).

**Note**: In case you're wondering why i merged both [tailwindcss](https://tailwindcss.com/) classes & native css styles in my example while i could only use one of them, it's due to the fact that i didn't succeed to correctly setup the latest version of tailwindcss on my codesandbox, so in the end i used an old version which doesn't seem to include all the css classes that i needed.

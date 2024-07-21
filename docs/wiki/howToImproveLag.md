# How to Improve Lag

We're all playing on the same server and sharing the same ressources. If everyone makes just very small changes to their farms and redstone, it can have a huge impact on server performance. 

Better performance allows us to build even crazier Redstone contraptions and use a larger simulation distance without lagging the server. 

Below are a few things that you can do to improve server lag without having any impact on your gameplay:

## Disable villager AI
:::danger[High Impact]
:::

<details>
<summary>Details</summary>
Villagers often contribute to 60-80% of the entity lag on a server. That's because their AI is very badly implemented in Minecraft. Every other game tick they will compute complex calculations to find their nearest village center, find their workbench, find other villagers to talk to, and so on. Please disable their AI if you only need them for trading.
</details>

1. Put your trading villagers in a 1x1-block hole/room.
2. Put the lectern (or other workbench) in front of it.
3. Put a magma block underneath the lectern.

## Optimize hoppers
:::warning[Medium Impact]
:::
<details>
<summary>Details</summary>
Hoppers can contribute to server lag because they constantly check for items to transfer. When a hopper is not interacting with another container, such as a furnace or composter, it is in a continuous state of checking for items. Placing a container like a furnace or composter above the hopper prevents it from performing these checks because the hopper knows that it cannot pull items from a container without items.
</details>

- Put a composter or furnace above every hopper that has no other hopper above it and does not need to pick up items.
- Avoid very long hopper chains. Use water instead. 

## Avoid light-level changes
:::warning[Medium Impact]
:::
<details>
<summary>Details</summary>
When a light source is added, removed, or changes state (e.g., turning on a redstone lamp), the game must recalculate the light levels for each affected block. Light propagates outward from the source, affecting a potentially large number of blocks. Light level changes trigger block updates. The game checks adjacent blocks to see how the light level change affects them, leading to further updates if those blocks also need to change their light levels. This cascading effect can quickly multiply the number of calculations required, especially in complex or densely built areas.
</details>

- Avoid flickering redstone lamps
- Redstone wire and Redstone torches emit light and the light changes when being activated.
    - Use as little Redstone wire as possible (observers are often more efficient)
    - Light up the area around the contraption! If the light level is above 7 at the Redstone (which is the light level of powered Redstone) then the light level changing algorithm won't be triggered.

## Turn off gravity of decorational armor stands
:::warning[Medium Impact]
:::
<details>
<summary>Details</summary>
Armor stands have gravity by default and can be moved by water and other physics items. Therefore, they are being ticked like every other entity. If you have lots of armor stands in your base for decoration, please disable the gravity to disable their physics.
</details>

1. Face the armor stand and run `/ast`
2. Scroll with your mousewheel to select the nether star.
3. Right-Click
4. Click the ghast tear to toggle the gravity.

## Avoid building many farms at one spot
:::warning[Medium Impact]
:::
<details>
<summary>Details</summary>
If all of your farms are at one spot they are all being loaded at the same time (even if you don't need them) they use up server performance. Some players want to build all of their farms at their base and also build a massive storage system. This is a really bad idea and if the server lags, this will make your farms less efficient aswell.
</details>

- Build **multiple** farm districts for your farms. Only have a selective set of farms at your base.

## Avoid having too many entities in your base
:::info[Low Impact]
:::
<details>
<summary>Details</summary>
Although the AI computation of entities are not as bad as [Villagers](#disable-villager-ai), they still do some AI computation to move around the world.
</details>
Please don't have massive chicken and cow farms if now needed. Kill entities when you don't need them anymore.
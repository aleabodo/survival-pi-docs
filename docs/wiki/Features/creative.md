# Creative Server

We have a (public) Creative server with plots where you can use World Edit and Creative tools to pre-build your base. 

- `/plot claim`: Find an empty plot (you can see whether it's empty with `/plot info`) and run the command to claim it.
- `/plot auto`: Instead of manually claming a plot, this command will automatically find an available plot for your.
- `/plot info`: Show info about the plot you're currently in, including the owner.
- `/plot add PLAYER`: Adds PLAYER to the plot so they can help you build **while you're online**.
- `/plot trust PLAYER`: Similarly to `/plot add PLAYER`, this allows PLAYER to use your plot but **also when you're offline**.
- `/plot remove PLAYER`: Untrusts PLAYER.
- `/plot merge`: If you have two adjacent plots you can merge both plots by looking from one plot in the direction of the other plot and running this command.
- `/plot unlink`: Reverts the plot merging. Be careful when using this command! It's not reversible and will devide your merged plots with streets again!
- `/plot alias set NAME`: Create a name for your plot that's listed in the plot list and info. With `/plot alias remove NAME` you can remove the alias. 
- `/plot sethome`: Set the plot-home you're standing on. The plothome is the position where the player will teleport if he uses the `/plot home` or `/plot visit` command.
- `/plot home NUMBER/ALIAS`: Teleports you to the plot with NUMBER or ALIAS if you've set a plot alias.
- `/plot visit PLAYER NUMBER/ALIAS`: Same as `/plot home` but for visiting plots of other players.
- `/plot list mine`: Lists all of your plots. `/plot list all` lists all plots. `/plot list PLAYER` lists all plots owned by PLAYER.
- `/plot biome BIOME`: Sets the biome of the plot. You need to rejoin.
- `/tp PLAYER`: Teleports to a player

## Schematics

### Download Schematic

You can easily save schematics (`.schem`) files from your builds. 

1. Select the area you want to save with the wooden axe (WE tool). 
2. Run `//copy`
3. Run `//download`
4. Follow the instructions in chat and download the schematic from the linked website.

### Load Schematic

1. Visit https://athion.net/fawe/
2. Upload the schematic to the site.
3. Copy the command from the website.
4. Paste it into the game chat.
5. Run `//paste` or `//paste -a` to paste the loaded schematic.

## Using World Edit

- Watch [this video](pathname://https://www.youtube.com/watch?v=SOOvommDpUA) to learn the basics of World Edit. 
- Check out the [FAWE documentation](pathname://https://intellectualsites.gitbook.io/fastasyncworldedit/basic-commands/brushes) for more commands and more powerful tools.

### Basic Commands Spreadsheet

```python
//pos1 # Equivalent to left-clickging with your wooden axe.
//pos2 # Equivalent to right-clickging with your wooden axe.

//copy
//cut
//paste
//paste -a # Paste without air.
//flip # Will flip the clipboard to the direction you look at.
//rotate DEGREE # DEGREE can be 90,180,-90,-180.
//replace PATTERN_1 PATTERN_2
//deform EXPRESSION # More advanced transformations like scale and rotate.

//brush sphere PATTERN RADIUS # Sphere brush
//brush cylinder PATTERN RADIUS
/mask PATTERN # Sets a mask to only use brush on blocks in PATTERN.

//outline PATTERN # Cover every outer part of region with a pattern. 
//line PATTERN SIZE
//curve PATTERN SIZE
//cyl PATTERN RADIUS HEIGHT # Cylinder
//hcyl PATTERN RADIUS HEIGHT # Hollow Cylinder

//naturalize # Makes stone, dirt, grass layers
//forest TYPE DENSITY
//flora DENSITY

//fill PATTERN RADIUS DEPTH # Fill particular blocks around the player's feet with the cylinder's radius and bottom sphere's depth. 
//fillr PATTERN RADIUS DEPTH # Fill but recursively.
//fixwater RADIUS # Fixes broken water
//fixlava RADIUS
```

### Advanced Masks

https://intellectualsites.gitbook.io/fastasyncworldedit/features/masks

### Advanced Patterns

https://intellectualsites.gitbook.io/fastasyncworldedit/command-utilities/patterns

### Advanced Selection (Cuboid, Convex, etc.)

https://intellectualsites.gitbook.io/fastasyncworldedit/basic-commands/selection
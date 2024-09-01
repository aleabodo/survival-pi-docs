---
sidebar_class_name: hidden
---

# For Admins

Running the server takes a lot of time. If you help me with doing some basic moderating stuff, I can allocate more of my time to the technical side of running the server ❤️

## Applications

:::tip
Copy the commands below by hovering over them and clicking the copy button.
:::

1. **Respond** to the applicant:
    ```
    Thanks for applying! We’ll vote internally and update you by tomorrow.
    ```
2. Run the following **poll** command in the *application-discussion* channel. Replace *MESSAGE-LINK* with the message link of the application.
    ```
    /timepoll question:Application: MESSAGE-LINK time:24h maxchoices:1 answer-1::white_check_mark: answer-2::x: type:Hidden (Buttons)
    ```
3. Create a **discussion thread** by right-clicking the poll and selecting *Create Thread*.\
4. **After the poll:**
    - If rejected, inform the applicant.
    - If accepted:
        1. Delete the thread by right-clicking it (On your phone *Edit Thread*).
        2. Delete the poll message from the application channel.
        3. Add them to Discord by clicking their profile and assigning the *Member* role.
        4. Whitelist them: 
            ```
            /whitelist add PLAYER
            ```
        5. Welcome them in the General chat with something like this:
            ```
            @PLAYER, welcome to the server! 🥳 You can read [this](https://survival-pi.com/docs/season2) for catching up if you want. You'll be added to the Whitelist shortly. Looking forward to meeting you in the game soon! 😊
            ```

## Minecraft Commands

### CoreProtect logs

If somebody wants to cheat they will always find a way. However, x-ray is the first and easiest cheat they will try to use. Therefore, we can more easily filter out new players by having anti-x-ray intentionally disabled and checking on them once in a while. It's really easy to do and fun detective work too 😊

- Go in spectator with `/gm 3`. Run the command below. Click on the coords to teleport to the location.
    ```
    /co l u:USER t:30d b:deepslate_diamond_ore
    ```
- `/co l u:USER t:30d b:deepslate_diamond_ore r:20`\
Radius check.
- `/co i`\
More [here](./Features/coreprotect.md).

### Spectate players

- `/spectate PLAYER`
- `/spectate leave`

### Spartan Anti-Cheat

- `/spartan info PLAYER`\
Opens a GUI menu with a player's violations info.
- `/spartan menu`\
Opens the main gui menu.
- `/spartan warn PLAYER REASON`\
Warns a player with a reason.
- `/spartan kick PLAYER REASON`\
Kicks a player and broadcasts a message.
- `/spartan notifications TICK-FREQUENCY`\
Toggles the notification system. When notification frequency is less than 100 ticks, which is worth 5 seconds, Spartan will pick Detection Notifications. If it is 100 ticks or greater, it will pick Detection Notifications along with Suspicion Notifications.

### Rollbacks

:::danger
Please be careful with running these command! They can do irreversible damage and chaos when executed wrongly. When something goes terribly wrong, don't attempt to fix it and let me know!
:::

- Rollback of YoloBurny removing a shulker box in a radius of 20 blocks within 2h of it happening:
    ```
    /co rollback YoloBurny t:2h radius:20 b:shulker_box action:-block
    ```
- `/co l u:#tnt r:20`
- `/co l u:#fire r:20`
- `/irp restore`\
Rollback play inventory backups. Inventory backups on join and on death. Make sure to 100% confirm that the player is eligible for a rollback (i.e., server lagg) and not just died because of their own fault.

### Open inventories

- `/openender`
- `/openinv`

### Dynmap

- `/dynmap hide`
- `/dynmap show`\
Don't forget to run this command after you're done with your admin duties!

### Whitelist / Ban

:::warning
When banning a player permanently, please also remove them from the Whitelist!
:::

- `/ban PLAYER REASON`
- `/tempban PLAYER 3d`
- `/kick PLAYER`
- `/whitelist remove PLAYER`
- `/whitelist add PLAYER`

### Miscellaneous

- `/spark profiler report/start/stop` Open a detailed browser page with a review of all things that lag a server. Please stop the profiler after you don't need it anymore.
- `/whois PLAYER` Show approximate location of the player. Based on IP address.
- `/allpvp <on|off>`\
Turn off PvP for everyone.
- `/discord linked <Name/UUID/DiscordID/DiscordTag>`\
See whether player linked their account.
- `/discord link <Name/UUID> <DiscordID/DiscordTag>`\
Manually link a player. You usually don't need to use this if they can link themselves.
- `/discord unlink <Name/UUID/DiscordID/DiscordTag>`\
Unlink user. Sometimes there are issues caused by username changes when this might be necessary.
- `/discord resync`\
Somebody bought a rank but doesn't have it in discord? Use this to sync group/rank.
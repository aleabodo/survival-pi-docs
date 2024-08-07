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
2. Create a **poll**:
    1. Right-click the application and copy the message link.
    2. Run the following command in the *application-discussion* channel. Replace *MESSAGE-LINK*.
        ```
        /timepoll question:Application: MESSAGE-LINK time:24h maxchoices:1 answer-1::white_check_mark: answer-2::x: type:Hidden (Buttons)
        ```
3. Create a **discussion thread** by right-clicking the poll and selecting *Create Thread*.\
4. **After the poll:**
    - If rejected, inform the applicant.
    - If accepted:
        1. Delete the thread by right-clicking it.
        2. Delete the poll with the following command. Replace *POLL-ID* with the id of the poll you can find at the very bottom of the poll.
            ```
            /deletepoll id:POLL-ID
            ```
        3. Add them to Discord by clicking their profile and assigning the *Member* role.
        4. Whitelist them with the in-game command: 
            ```
            /whitelist add PLAYER
            ```
        5. Welcome them in the General chat:
            ```
            @PLAYER, welcome to the server! 🥳 You can read [this](https://survival-pi.com/docs/season2) for catching up if you want. Looking forward to meeting you in the game soon! 😊
            ```

## Minecraft Commands

### Check player logs for x-ray

If somebody wants to cheat they will always find a way. However, x-ray is the first and easiest cheat they will try to use. Therefore, we can more easily filter out new players by having anti-x-ray intentionally disabled and checking on them once in a while. It's really easy to do and fun detective work too 😊

- `/co l u:USER t:30d b:deepslate_diamond_ore`\
Go in spectator with `/gm 3`. Click on the coords to teleport to the location.
- `/co l u:USER t:30d b:deepslate_diamond_ore r:20`\
Radius check.
- `/co i`\
More [here](./Features/coreprotect.md).

### Rollbacks

Please be careful with running these command! They can do irreversible damage and chaos when executed wrongly.

- `/co rollback YoloBurny t:2h radius:20 b:shulker_box action:-block`\
Rollback of YoloBurny removing a shulker box in a radius of 20 blocks within 2h of it happening.
- `/co l u:#tnt r:20`
- `/co l u:#fire r:20`
- `/irp restore`\
Rollback play inventory backups. Inventory backups on join and on death. Make sure to 100% confirm that the player is eligible for a rollback (i.e., server lagg) and not just died because of their own fault.

### Open inventories

- `/openender /openinv`

### Whitelist / Ban

When banning a player permanently, please also remove them from the Whitelist!

- `/ban PLAYER REASON`
- `/tempban PLAYER 3d`
- `/kick PLAYER`
- `/whitelist remove PLAYER`
- `/whitelist add PLAYER`

### Miscellaneous

- `/spark profiler report/start/stop` Open a detailed browser page with a review of all things that lag a server. Please stop the profiler after you don't need it anymore.
- `/tp PLAYER` Go in gm 3 first! 
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
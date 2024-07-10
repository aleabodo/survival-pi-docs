# Chest Protection

We use a plugin called `ChestProtect` to protect chests and barrels. We have a rule against stealing and you can already check who took stuff out of your chests with `/co i`. We're also a Whitelisted server and everyone knows each other. But some people still wanted a chest protection system so they can manage in more detail who can access their chests and who can't. 

By default, all of your chests get protected as soon as you build them. You can unprotect the chests, add friends to them, add friends to the default protection, or disable this behavior alltogether if you wish to. Below is a list of commands that help you do these thing.

- `/chestprotect lock`: Enter chest protection locking mode. Now click any of your chests to lock the it. 
- `/chestprotect unlock`: Enter chest protection unlocking mode. Now click any of your chests to unlock the it. 
- `/chestprotect trust PLAYER`: Enter trust-mode. Now you can click a chest to trust *PLAYER* to it. *PLAYER* will be able to access the chest.
- `/chestprotect untrust PLAYER`: Enter untrust-mode. Now you can click a chest to untrust *PLAYER*. *PLAYER* can no longer access the chest.
- `/chestprotect view`: Highlights all of your protectected chest with particles, so you can more easily find them. Run the command againn to disable the particles. 

:::warning[Hoppers can't suck items from locked chests!]
Make sure you unlock chests that you want to use in Redstone contraptions.
:::

## Protection Settings
By default, the lock- and unlock-mode will automatically disable after clicking a chest. You can configure to stay in that mode for locking or unlocking multiple chest. You can do that by going into the ChestProtect menu settings with `/chestprotect menu`. Then click on *Settings*. Set the first option *Persistent Lock/Unlock* to *enabled* by clicking on it. In this settings menu you can also disable autolocking and other things.

## Trusted-groups

You can add friends to *trusted-groups*. This feature enables you to build projects together with friends and trust all friends that are members of that specific project to the project chests. It also enables you to configure a list of friends that should be automatically trusted to every chest you build.

- Head to the ChestProtect settings menu with `/chestprotect menu`. Click on the option *Groups*. Here you can manage the groups.
- Adding friends to the `Default` group will automatically trust them with every new chest you create.
- If you have more trusted-groups for building projects, you can add a chest to a certain trusted-group by *SHIFT-Left-clicking* the chest. This opens the protection menu of that chest. Now, click on *Edit Group* where you can manage the trusted-groups that this chest is assigned to. Adding a trusted-group to the chest will make every member of that group be able to access the chest. 
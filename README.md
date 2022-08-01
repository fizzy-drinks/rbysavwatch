# RBY save watcher

> Automatically update files to include in stream overlays with party and Pokédex info

![image](https://user-images.githubusercontent.com/6524870/182236830-639f7265-4197-4b2f-9230-9ac0ce027904.png)

# Installing

Clone the repository, `cd` into its root directory and create a package:

```npm i
npm pack
```

Install the package that was created:

```
npm i -g rby-sav-to-txt-1.0.0.tgz
```

Run `rbysavwatch` from anywhere, specifying the save file and the destination of the text file with game data:

```
rbysavwatch pokemon-red.sav partyinfo.txt
```

Add the output file as a source to your favourite streaming software and use it.

# TODO: outline development and testing

# README.md

## Overview
This project is a [Monarch](https://microsoft.github.io/monaco-editor/monarch.html)  syntax highlighter for the [Pickchr](https://pikchr.org/home/doc/trunk/homepage.md) language.

Pikchr is a [PIC](https://en.wikipedia.org/wiki/PIC_(markup_language))-like markup language which allows you to insert diagrams in [markdown](https://www.markdownguide.org/basic-syntax/) formatted technical documentation by embedding Pikchr syntax into a [fenced code block](https://spec.commonmark.org/0.29/#fenced-code-blocks).

The Pikchr language was developed by [D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp) (primary author of [SQLite](https://en.wikipedia.org/wiki/SQLite)) and is extensively used to generate documentation [figures](https://sqlite.org/syntaxdiagrams.html) for SQLite.

## Screenshot
![syntax_highlighting_1][syntax_highlighting_1] 

## Genesis
I developed this highlighter to support pikchr highlighting in the best note-taking app on the planet (IMHO): [Notable](https://notable.app). If all goes well, Pickhr support will land in the next release of Notable. Please try Notable, and if you love it, as you should, kick [Fabio](https://github.com/sponsors/fabiospampinato) some sponsor dollars! (Well, ok, British Pounds to be specific.)

## Monaco
[Monaco](https://microsoft.github.io/monaco-editor/) is the open-source editor under-the-hood in VSCode, and Monaco supports Monarch as a syntax-highlighting system. If _you_ have a Manaco project, then using this syntax highlighter should be trivial. Have fun.

If you want to "kick the tires", you can go to the online [Monarch](https://microsoft.github.io/monaco-editor/monarch.html) editor, paste the contents of `pikchr.monarch.js` into the left editor pane, paste some Pikchr code into the right editor pane, and see it in action.

### Monokai
I am most at-home with the Monokai syntax highlighting theme. If you want to see Monokai in the online Monarch/Monaco editor then you can go [there](https://microsoft.github.io/monaco-editor/monarch.html), open a JS dev console, and paste the contents of `monokai_monaco_retheming.js` into it to "inject" (and switch to) a Monokai theme.  The screenshots herein were rendered using Monokai.

## VSCode
For reasons I do not understand VSCode itself does not support Monarch (but rather TextMate), so there is no way that I know of to use the highlighter here inside VSCode.  I sure wish it did, because I live in VSCode.

[syntax_highlighting_1]:  https://raw.githubusercontent.com/epmoyer/pikchr_monarch/media/pikchr_syntax_highighting_1.png?raw=true "pikchr_syntax_highlighting_1"
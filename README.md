# Log Highlighter
Help to highlight logs in your development

Now only for **Firefox**

## How to install
Open [Releases](https://github.com/GulDilin/log-highlighter-web-ext/releases)
Download one of versions and open in Firefox


## How to run in development mode

- install **npm**
- `npm install --global web-ext`
- `web-ext run`

Then firefox opens window with installed add-on

## How to use add-on
It is prepared for strict text format (most useful for files)

highlights strigns wich
- starts with `\\d+:\\d+:\\d+\\s\\|\\sERROR` and ends with `\\d+\-\\d+\-\\d+`
- starts with `\\d+:\\d+:\\d+\\s\\|\\sWARNING` and ends with `\\d+\-\\d+\-\\d+`

For example that will be highlighten as error:
```
12:00:00 | ERROR | Function error:
    Code execution failed
    What a pity
```

Regexp and colors can be changed at `highlight_logs.js`

To call highlight function, use **context menu**
just select **Highlight logs**

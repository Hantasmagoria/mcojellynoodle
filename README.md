# MCO Jelly Noodles
MCO Jelly Noodles is a script to deal with the issue of inefficiency in the presentation of the booking table data for our facility managers working with the MCOnline Facility booking system.

Current version: [3.0.3]

##  Installation
As of now, the only 'permanent' way to install the script is to save the script directly into the browser.
Currently the script can only be 'installed' in chrome(as far as we know), without implementing any third-party software or browser extensions. Testing has not been done on any other browsers.
>we might expand the project into a userscript, in which case this section of the documentation will be updated. For now the only way to 'install' this script is via chrome's snippet devtool. running the script in any browser's console works fine(except IE9 and below). Saving the script as a bookmark also works.

```bash 
1) In chrome, open up the snippets creation devtool(either 1a or 1b):
1a) Ctrl + shift + I  -->  Ctrl + shift + P  -->  type: "snippet"  -->  select "Create new snippet".
1b) Three dots icon  -->  More tools  -->  Developer Tools  -->  Three dots icon  -->  Run command  -->  type: "snippet"  -->  select "Create new snippet".

2) Paste in the source code for the script.
3) Run the script using Ctrl + Enter, or rightclick and run.
```

## Usage

To use the script, the snippet has to be run. Open up the browser's console, and use the method #2) and #3) in the installation above, or:

>Ctrl + shift + I  -->  Ctrl + shift + P  --> backspace, type: "!"  -->  press enter.

Upon loading the script, two buttons will appear above the calendar. 

>Pick a Date
>>The First button, labelled "Pick a Date", has to be used first, to initialize the date used in the script. The "Bookings" button will not work otherwise. Upon clicking the button, an alert window will pop up on the page, asking for a date to be typed into the input box. Any date can be given, however only the date that is within the week that is shown in the calendar will be taken for the "Bookings" buton to work.

>Bookings
>>The Second button, labelled "Bookings", can be used at any point in time as long as the date is initialized using the "Pick a Date" button as mentioned above. The "Bookings" button, upon being clicked, will replace the entire calendar with the information of all the bookings on the date specified.

## Usage(Alternative)
Alternatively, copy the code from index.js and save it as the URL of a bookmark on your browser. Anytime you need to use it just run.

## Roadmap
Future developments will still be continued unless otherwise specified.

>Planned features:
```bash
-disable focus on the buttons so that navigating through facilities would be easier
-Make the design prettier?
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


[3.0.3]: https://github.com/Hantasmagoria/mcojn/blob/master/index.js

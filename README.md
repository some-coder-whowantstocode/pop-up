# popup: Component made with typescript for popups

## Overview

The `popup` npm package is a React component designed to show popups, perfect for displaying messages, errors, or important information. It offers customizable options for various styles and animations.

## Installation

To install the `popup` package, use the following command in your terminal:

```bash
npm install popup
```
## Usage

Import the PopupProvider and usePopup component into your React application:

```bash
import { PopupProvider, usePopup } from 'path to nodemodules/node_modules/popup/dist/bundle.js';
```

Use the PopupProvider in your JSX to wrap your application or components:

```bash
<PopupProvider>
    <YourComponent />
</PopupProvider
```
Use the usePopup hook in your components:
```bash
const { pushPopup, popPopup } = usePopup();
```
## Features
* Customizable popup messages
* Configurable colors and styles for different types of messages (error, info, etc.)
* Simple API for showing and hiding popups
* Click on the popup for removing popup.

## Customization Options:
* pushPopup(message: string, bg: string, col: string, border: string ): Show a popup with a specified message and css styles.


## Passing props
Now, you can add a couple of customizations to the TypeWriter component :

```
   message: string, 
   bg: string, 
   col: string, 
   border: string
```

## All available custom styling

* ```bg``` : background color of popup.
* ```col``` : text color.
* ```border``` : color of the border. 

## Example code 

### simple usage


```
"use client"

import React from 'react';
import { PopupProvider, usePopup } from '@your_npm_username/popup';

const MyComponent = () => {
    const { pushPopup } = usePopup();
    
    const showError = () => {
        pushPopup('This is an error message');
    };

    return (
        <div>
            <button onClick={showError}>Show Error</button>
        </div>
    );
};

const App = () => (
    <PopupProvider>
        <MyComponent />
    </PopupProvider>
);

export default App;

```

### Custom usage

```
"use client"

import React from 'react';
import { PopupProvider, usePopup } from '@your_npm_username/popup';

const MyComponent = () => {
    const { pushPopup } = usePopup();
    
    const showCustomMessage = () => {
        pushPopup('Your custom message here', 'black','white', 'gray');
    };

    return (
        <div>
            <button onClick={showCustomMessage}>Show Info</button>
        </div>
    );
};

const App = () => (
    <PopupProvider>
        <MyComponent />
    </PopupProvider>
);

export default App;

```


## Contributing
Contributions to the type-writer package are welcome! Please feel free to submit pull requests or issues on the [GitHub repository](https://github.com/some-coder-whowantstocode/pop-up).

## License
This project is licensed under the ``` ISC ``` License.

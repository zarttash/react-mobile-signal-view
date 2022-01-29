# react-mobile-signal-view

react-mobile-signal-view provides simple React Mobile Signal component which can be implemented to show mobile signals in React App.



## Screenshot

![App Screenshot](https://i.ibb.co/GnQ4TH9/screenbud-f5830628-2c02-4136-ae8e-663e071298c4.png)

## Installation

Using NPM:

```bash
npm install react-mobile-signal-view
```
## Usage/Example

```render
import SignalView from "react-mobile-signal-view"

# render component 
<SignalView bars='five-bars' strength='good' />
```
## Props Reference

| Prop | Default     | Value                |
| :-------- | :------- | :------------------------- |
| `strength` | `good` | `good`, `ok`, `bad` |
| `bars` | `string` | `first-bar`, `second-bar`, `third-bar`, `fourth-bar`, `fifth-bar` |

## Classes to override style

| Class | Description     | 
| :-------- | :------- | 
| `.signal-sizing-box` | to override height and with of container |
| `.mobile-signal-bars` | to override height and width of bars |
| `.good .signal-bar` | to override GOOD strength color |
| `.ok .signal-bar` | to override OK strength color |
| `.bad .signal-bar` | to override BAD strength color |
| `.signal-bar.first-bar` | to override first bar height |
| `.signal-bar.second-bar` | to override second bar height |
| `.signal-bar.third-bar` | to override third bar height |
| `.signal-bar.fourth-bar` | to override fourth bar height |
| `.signal-bar.fifth-bar` | to override fifth bar height |

## Authors

- [@zarttash](https://www.github.com/zarttash)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
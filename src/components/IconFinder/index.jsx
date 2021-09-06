import React, { Component } from 'react';

export default class IconFinder extends Component {
  renderSwitch = (name) => {
    switch (name) {
      case 'menu':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 11.5C2 11.1022 2.14048 10.7206 2.39052 10.4393C2.64057 10.158 2.97971 10 3.33333 10H20.6667C21.0203 10 21.3594 10.158 21.6095 10.4393C21.8595 10.7206 22 11.1022 22 11.5C22 11.8978 21.8595 12.2794 21.6095 12.5607C21.3594 12.842 21.0203 13 20.6667 13H3.33333C2.97971 13 2.64057 12.842 2.39052 12.5607C2.14048 12.2794 2 11.8978 2 11.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 4.5C2 4.10218 2.14048 3.72064 2.39052 3.43934C2.64057 3.15804 2.97971 3 3.33333 3H20.6667C21.0203 3 21.3594 3.15804 21.6095 3.43934C21.8595 3.72064 22 4.10218 22 4.5C22 4.89782 21.8595 5.27936 21.6095 5.56066C21.3594 5.84197 21.0203 6 20.6667 6H3.33333C2.97971 6 2.64057 5.84197 2.39052 5.56066C2.14048 5.27936 2 4.89782 2 4.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 18.5C2 18.1022 2.14048 17.7206 2.39052 17.4393C2.64057 17.158 2.97971 17 3.33333 17H20.6667C21.0203 17 21.3594 17.158 21.6095 17.4393C21.8595 17.7206 22 18.1022 22 18.5C22 18.8978 21.8595 19.2794 21.6095 19.5607C21.3594 19.842 21.0203 20 20.6667 20H3.33333C2.97971 20 2.64057 19.842 2.39052 19.5607C2.14048 19.2794 2 18.8978 2 18.5Z"
              fill="white"
            />
          </svg>
        );
      case 'avatar':
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#F9FAFB" />
            <circle cx="16" cy="13" r="5" fill="#D0D4D9" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.67916 30.2307C8.24251 29.2427 8 28.1497 8 27C8 22.5817 11.5817 19 16 19C20.4183 19 24 22.5817 24 27C24 28.1497 23.7575 29.2427 23.3208 30.2307C21.1271 31.3615 18.6381 32 16 32C13.3619 32 10.8729 31.3615 8.67916 30.2307Z"
              fill="#D0D4D9"
            />
          </svg>
        );

      case 'none':
        return <svg></svg>;

      default:
        break;
    }
  };

  render() {
    return <div> {this.renderSwitch(this.props.name)}</div>;
  }
}

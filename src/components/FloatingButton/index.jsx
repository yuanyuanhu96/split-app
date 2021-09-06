import React, { Component } from 'react';
import './index.css';

export default class FloatingButton extends Component {
  render() {
    return (
      <svg
        className="svg-button"
        width="58"
        height="59"
        viewBox="0 0 58 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={this.props.openModal}
      >
        <g filter="url(#filter0_d)">
          <rect x="5" y="3" width="48" height="48" rx="23.4" fill="#FFCD1E" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.0607 13.9393C29.7794 13.658 29.3978 13.5 29 13.5C28.6022 13.5 28.2206 13.658 27.9393 13.9393C27.658 14.2206 27.5 14.6022 27.5 15V25.5H17C16.6022 25.5 16.2206 25.658 15.9393 25.9393C15.658 26.2206 15.5 26.6022 15.5 27C15.5 27.3978 15.658 27.7794 15.9393 28.0607C16.2206 28.342 16.6022 28.5 17 28.5H27.5V39C27.5 39.3978 27.658 39.7794 27.9393 40.0607C28.2206 40.342 28.6022 40.5 29 40.5C29.3978 40.5 29.7794 40.342 30.0607 40.0607C30.342 39.7794 30.5 39.3978 30.5 39V28.5H41C41.3978 28.5 41.7794 28.342 42.0607 28.0607C42.342 27.7794 42.5 27.3978 42.5 27C42.5 26.6022 42.342 26.2206 42.0607 25.9393C41.7794 25.658 41.3978 25.5 41 25.5H30.5V15C30.5 14.6022 30.342 14.2206 30.0607 13.9393Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.2"
            y="0.6"
            width="57.6"
            height="57.6"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.4" />
            <feGaussianBlur stdDeviation="2.4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
}

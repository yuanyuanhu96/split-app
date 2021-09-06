import React, { Component, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import FormControl from 'react-bootstrap/FormControl';

import './index.css';

export default class CustomizeDropdown extends Component {
  CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) => !value || child.props.children.startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle as={this.CustomToggle} id="dropdown-custom-components">
          Select Friend &nbsp;
        </Dropdown.Toggle>

        <Dropdown.Menu as={this.CustomMenu}>
          <Dropdown.Item eventKey="1">Shiya</Dropdown.Item>
          <Dropdown.Item eventKey="2">Jessica</Dropdown.Item>
          <Dropdown.Item eventKey="3">Evie</Dropdown.Item>
          <Dropdown.Item eventKey="4">Alex</Dropdown.Item>
          <Dropdown.Item eventKey="5">Ananya</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

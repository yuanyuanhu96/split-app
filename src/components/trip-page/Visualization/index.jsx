import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './index.css';

// import * as d3 from 'https://www.cdn.skypack.dev/d3@7';

export default class index extends Component {
  render() {
    const people = [
      { name: 'Yuanyuan', x: 100, y: 100, color: '#5D39B7' },
      { name: 'Sarah', x: 400, y: 100, color: '#7F8A94' },
      { name: 'Sarah', x: 259, y: 330, color: '#FFCD1E' },
    ];

    const box = { width: 80, height: 32 };

    const pairs = [
      [0, 1],
      [1, 2],
      [2, 0],
    ];

    return (
      <Container>
        <div className="vis-wrapper">
          <svg
            className="result-vis"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 500 400"
            height="100%"
            width="100%"
          >
            {/* draw arrow to show transactions */}

            {pairs.map((pair) => (
              <g>
                {' '}
                <defs>
                  <marker
                    id={'arrowhead' + pair[0]}
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="2"
                    orient="auto"
                    fill={people[pair[0]].color}
                  >
                    <polygon points="0 0, 4 2, 0 4" />
                  </marker>
                </defs>{' '}
                <line
                  x1={
                    people[pair[0]].x +
                    (people[pair[1]].x - people[pair[0]].x) * 0.1
                  }
                  y1={
                    people[pair[0]].y +
                    (people[pair[1]].y - people[pair[0]].y) * 0.1
                  }
                  x2={
                    people[pair[1]].x +
                    (people[pair[0]].x - people[pair[1]].x) * 0.27
                  }
                  y2={
                    people[pair[1]].y +
                    (people[pair[0]].y - people[pair[1]].y) * 0.27
                  }
                  stroke={people[pair[0]].color}
                  stroke-width="4"
                  marker-end={'url(#arrowhead' + pair[0] + ')'}
                />
                <g>
                  <rect
                    x={
                      (people[pair[0]].x + people[pair[1]].x) / 2 -
                      box.width * 0.5
                    }
                    y={
                      (people[pair[0]].y + people[pair[1]].y) / 2 -
                      box.height * 0.5
                    }
                    width={box.width}
                    height={box.height}
                    rx="5"
                    fill={people[pair[0]].color}
                    dominant-baseline="middle"
                  />

                  <text
                    text-anchor="middle"
                    x={(people[pair[0]].x + people[pair[1]].x) / 2}
                    y={(people[pair[0]].y + people[pair[1]].y) / 2 + 5}
                    fill="white"
                  >
                    $200
                  </text>
                </g>
              </g>
            ))}
            {/* draw circle for each person */}
            {people.map((person) => (
              <g>
                <circle
                  cx={person.x}
                  cy={person.y}
                  r="50"
                  fill={person.color}
                />
                <text
                  text-anchor="middle"
                  x={person.x}
                  y={person.y + 5}
                  fill="white"
                >
                  {person.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <br />
      </Container>
    );
  }
}

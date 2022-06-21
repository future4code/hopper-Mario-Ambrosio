import React, { useState, useEffect } from "react"

function Layout(props) {
  return (
    <>
      <div className="Layout">
        <div className="ConteinerLogo">
          <h1 className="Logo">ASTROMATCH</h1>
        </div>

        <div className="ConteinerCentral">

          <div className="ConteinerTotal">
            <div className="ConteinerMatch">
              <img src={props.imagem} alt="" className="Img" />
              <div className="textoDiv">
                <h1>{props.name}, {props.age}</h1>
                <p>{props.bio}</p>
              </div>
            </div>
            <button className="BotoesMatch" id="Verde" onClick={props.DarMatch}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADbElEQVRoge2YT2gcVRzHP7/ZTdNaNf5BRempIrmYZNPdtSkx2gSxRaFSvfQglFz0pMlSrGePxqazTRFvohhFvQiKhV6qYKSmyebPbotKNV6ihdpikuqhm+z8PCTiEt/M7MzOGND5HH+/33u/73dm3mPeg4SEhISE/zMSpLizVOgTOKxKP3A/cA9wHfR7Rc45wnuXsvYPXnNkZl9+qFZLPS/oAEg7cDfwK3BF0XMWqU/mc6MTkRroKB3LCs4oyuM+pQ7oOC3pV8pdJ67WJ9onjt/Wun3VBgYBy2sShS8FPVbOFWf8tPka6CgVBkV5C2j1q62T8ItjyTMX99jTAA/PFHKWw0fA7sbn4CbwYjlnv+tV5GlgQ/zbAZrWs1SzZH+6hqWiXwBtYSZRkcFK9uQ7bnlXA5kLQ3nHsiaAbWEab7T/EUQI9uQ3c1PF6q1kR0umpOu36FiWTVPiAeRBmhMP0Crq2G5Jo4HM1PB+oLfJxlHS1zEz9JgpYTSgljwXr57giGM9a4qbDShGt1uMcQt3WwO7YhQSFqMmNwO3xCgkLLeagm4GrrrEt5IrpqB5DUAlXi2huGQKGg0I8nm8WoIjYNRkNLBjbfV94LdYFQVjWVL6oSlhNDDZc3pFYCReTQEQRua6i0umlOuvxJ032k4AF2IT1TizLfrHG25J77/RqcJuEc4D90YuqzGu1YR9Xockz4NFJW8vgHNIYSV6bb78rpYe8jvheRoAKOdOTQrOk/yLi1phxVI9WNlTPO9X62sA1k1Yqdpe4Num1fmzIFrrncsXv26kuCEDAHPdY5d3rK31oHwWXpsvX9GS2lfOj11sdEDDBmB9e23/afGwiIwAGlieOwqcuutG28DmywA/Al2r1NMxVXhChHHgvrBzbLAswgvzWfvjMINDGwDo/OalXaTTHwB9YcaryBSOHlnf7cIR6BPaTLnn9GL7wmI/Kq8BToChCow5229/tBnx0OQbqKezNDygKuOyfmPnxTVVOVrJnzwTRd/IDAB0zxx/wHFWzyh0uZSUJc1T8xn756h6RmoAIDM7fIdTk0/557qYrNaqT3+3983rUfZrag2YmOsuLu2scgDk7N9RObuzSn/U4iGGN/AX2elX29aoTis4LWx7pJR7fTmuXrHRWSoc7CoNHdhqHQkJCQkJ/13+BPdpBr8NANQ8AAAAAElFTkSuQmCC" alt=""  className="ImgMatch"/>
            </button>
            <button className="BotoesMatch" id="Vermelho" onClick={props.DarDesMatch}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACJUlEQVRoge2YvW/TQBiHn7sjY9UFiSIYOjSiVGyt5HYAUkLyR0NVRwgJkBiRGGAEqaIsSQZKFfsYiFFUXXJ3vtdIiHtG34d/j+9svzZkMplMJhPIfFgcTEdFv6v5p4OTvfmwOIgZo0M7zsaH+wp7Zmr7av78+GF8vM1MR0XfmGqisOV8fPQodJwK6TQbH+7rypwDd5eHLqzSz7bO3n5sE/Ym01HRN7UtgXvLQ9+sqYdbL95/8I31CjjCN4hIOMI3BEl4t1DvuncF/HQ07Shbn6dspw3hAWrqW5VvjqAt9GNwvFuZugR2Hc2tVsITPnjOIAGQlZAKDxECICMhGR4iBSBNQjo8tBCAdhJdhIeWAhAn0VV4SBCAMIla2UVX4SFRADwSikssNXDHMVTkRZgsAN6VcCFWiogIQJSEaB0lJgC/JRamfq3c+x0L31H6iVR4iCinQ7ju2Z62mHXtoldriZhA86i0ip0N3W6nFoA3Ebkonue8C7H7IHkFNoa3XAIXjmHJpXhDkoD3Dav106oyj4EvjnYRidZbKKY8mA5O9oypSuC+r28srQTa1DZdSUQLpBRmXUhECUhUlUuJScocqwTfxFIl8fbkzedKq1Pgq6M5+sYOWoEu6vm/9lHf5ceIxNzeLaQWlV7TL/ltuv3y3acN20mjF2vrqj/5Qk40Oz16oLUu+Rd/LTasSCjJ8A0rEr3Q8NF0/nt9VPRjf69nMplM5v/mF/i6x8b172ZWAAAAAElFTkSuQmCC" alt=""  className="ImgMatch"/>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Layout;
import React from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import {HOME_TYPEWRITER_STRINGS} from "../../constants"

function TypeWriterComponent() {
  return (
    <Typewriter
      options={{
        strings: HOME_TYPEWRITER_STRINGS,
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
        wrapperClassName: "typewriter-content "
      }}
    />
  );
}

export default TypeWriterComponent;

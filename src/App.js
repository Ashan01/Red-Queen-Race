import React, { useRef, useLayoutEffect } from "react";
import "./App.css";

function App() {
   let aliceSript = useRef(null);
   let foreground = useRef(null);
   let background = useRef(null);

   useLayoutEffect(() => {
      let spriteFrames = [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }];

      var alice = aliceSript.current.animate(spriteFrames, {
         easing: "steps(7, end)",
         direction: "reverse",
         duration: 500,
         playbackRate: 1,
         iterations: Infinity,
      });
   });
   return (
      <div className="container">
         <div className="sky"></div>
         <div className="earth">
            <div className="alice">
               <img
                  className="aliceSprite"
                  ref={aliceSript}
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
               />
            </div>
         </div>
         <div className="scenery" id="foreground">
            <img id="threefore" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" />
         </div>
         <div className="scenery background1">
            <img
               className="pawn"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
               alt=""
            />

            <img
               className="pawn2"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
               alt=""
            />
            <img className="threeback" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" />
         </div>
      </div>
   );
}

export default App;

import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const StyledSlider = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: sticky;
    top: 0;

    img {
      width: 200px;
      display: block;
      margin: auto;
    }

    .left-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      > img {
        &:not(:first-child) {
          position: absolute;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
        }

        &:first-child {
          position: absolute;
          transform: translateY(20px);
        }
      }
    }

    .right-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;

      .content {
        > div {
          &:not(:first-child) {
            position: absolute;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
          }

          &:first-child {
            position: absolute;
            transform: translateY(20px);
          }
        }
      }
    }

    .steps {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      right: 20%;

      .step {
        display: block;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background: #ccc;
        padding: 3px;
        margin-top: 10px;

        &:focus {
          outline: none;
        }

        &:first-child {
          background: blue;
        }
      }

      .active-border {
        width: 20px;
        height: 20px;
        background: transparent;
        border: 1px solid blue;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        right: -5px;
        padding: 0;
      }
    }
  }
`;

export default function Home() {
  const wrapperRef = useRef();
  const slide1ImageRef = useRef();
  const slide1ContentRef = useRef();
  const slide1DotRef = useRef();
  const slide2ImageRef = useRef();
  const slide2ContentRef = useRef();
  const slide2DotRef = useRef();
  const slide3ImageRef = useRef();
  const slide3ContentRef = useRef();
  const slide3DotRef = useRef();
  const slide4ImageRef = useRef();
  const slide4ContentRef = useRef();
  const slide4DotRef = useRef();
  const activeBorderRef = useRef();

  const timeline = useRef(
    gsap.timeline({
      smoothChildTiming: true,
      paused: true,
      defaults: {
        duration: 1,
        ease: "linear",
      },
    })
  );

  useEffect(() => {
    timeline.current
      .addLabel("slide1")
      .to(activeBorderRef.current, {
        y: 20 * 1,
      })
      .to(
        slide1ImageRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        "<"
      )
      .to(
        slide1ContentRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        "<"
      )
      .to(
        slide1DotRef.current,
        {
          background: "#ccc",
        },
        "<"
      )
      .to(
        slide2DotRef.current,
        {
          background: "blue",
        },
        "<"
      )
      .to(
        slide1ImageRef.current,
        {
          autoAlpha: 0,
          y: -20,
        },
        "<"
      )
      .to(
        slide1ContentRef.current,
        {
          autoAlpha: 0,
          y: -20,
        },
        "<"
      )
      .addLabel("slide2")
      .to(activeBorderRef.current, {
        y: 20 * 1,
      })
      .to(
        slide1DotRef.current,
        {
          background: "#ccc",
        },
        "<"
      )
      .to(
        slide2DotRef.current,
        {
          background: "blue",
        },
        "<"
      )
      .to(
        slide2ImageRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        "<"
      )
      .to(
        slide2ContentRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        "<"
      )
      .to(slide2ImageRef.current, {
        autoAlpha: 0,
        y: -20,
      })
      .to(
        slide2ContentRef.current,
        {
          autoAlpha: 0,
          y: -20,
        },
        "<"
      )
      .addLabel("slide3")
      .to(
        activeBorderRef.current,
        {
          y: 20 * 2,
        },
        "<"
      )
      .to(
        slide2DotRef.current,
        {
          background: "#ccc",
        },
        "<"
      )
      .to(
        slide3DotRef.current,
        {
          background: "blue",
        },
        "<"
      )
      .to(slide3ImageRef.current, {
        autoAlpha: 1,
        y: 0,
      })
      .to(
        slide3ContentRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        "<"
      )
      .to(slide3ImageRef.current, {
        autoAlpha: 0,
        y: -20,
      })
      .to(
        slide3ContentRef.current,
        {
          autoAlpha: 0,
          y: -20,
        },
        "<"
      )
      .addLabel("slide4")
      .to(
        activeBorderRef.current,
        {
          y: 20 * 3,
        },
        "<"
      )
      .to(
        slide3DotRef.current,
        {
          background: "#ccc",
        },
        "<"
      )
      .to(
        slide4DotRef.current,
        {
          background: "blue",
        },
        "<"
      )
      .to(slide4ImageRef.current, {
        autoAlpha: 1,
        y: 0,
      })
      .to(
        slide4ContentRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        "<"
      );

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=2000px",
      invalidateOnRefresh: true,
      animation: timeline.current,
    });
  }, []);

  return (
    <StyledSlider>
      <div className="wrapper" ref={wrapperRef}>
        <div className="left-content">
          <img
            src="https://placekitten.com/300/700?image=1"
            alt="kitty"
            ref={slide1ImageRef}
          />
          <img
            src="https://placekitten.com/300/700?image=2"
            alt="kitty"
            ref={slide2ImageRef}
          />
          <img
            src="https://placekitten.com/300/700?image=3"
            alt="kitty"
            ref={slide3ImageRef}
          />
          <img src="/boca.png" alt="kitty" ref={slide4ImageRef} />
        </div>

        <div className="right-content">
          <div className="content">
            <div ref={slide1ContentRef}>
              <h1>Slide 1</h1>
              <p>lorem ipsum</p>
            </div>
            <div ref={slide2ContentRef}>
              <h1>Slide 2</h1>
              <p>lorem ipsum</p>
            </div>
            <div ref={slide3ContentRef}>
              <h1>Slide 3</h1>
              <p>lorem ipsum</p>
            </div>
            <div ref={slide4ContentRef}>
              <h1>Slide 4</h1>
              <p>BOKA BOKA</p>
            </div>
          </div>

          <div className="steps">
            <button
              ref={slide1DotRef}
              className="step"
              onClick={() => {
                timeline.current.pause();
                timeline.current.play("slide1");
              }}
            />
            <button
              ref={slide2DotRef}
              className="step"
              onClick={() => {
                timeline.current.pause();
                timeline.current.play("slide2");
              }}
            />
            <button
              ref={slide3DotRef}
              className="step"
              onClick={() => {
                timeline.current.pause();
                timeline.current.play("slide3");
              }}
            />
            <button
              ref={slide4DotRef}
              className="step"
              onClick={() => {
                timeline.current.pause();
                timeline.current.play("slide4");
              }}
            />
            <button ref={activeBorderRef} className="active-border" />
          </div>
        </div>
      </div>
    </StyledSlider>
  );
}

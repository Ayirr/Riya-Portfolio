import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function MySlider ()  {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider w-40">
          <div className="keen-slider__slide number-slide1 neon-border2 h-screen p-4 bg-black">
            <div className="text-4xl p-4">About Me</div>
            <div className="flex p-8 justify-center gap-20 bg-none ">
                <div className="p-2 bg-white rounded-xl">
                    <img src="img.jpg" className="h-80 "></img>
                </div>
                <div className="w-96">
                Currently pursuing engineering at The LNM Institute of Information Technology. I find joy in exploring the intersections of Frontend Development and bringing creative ideas to life. As I navigate through my studies, I'm on the lookout for exciting opportunities to apply my knowledge in real-world scenarios. I'm enthusiastic about connecting with fellow students and professionals who share similar interests and aspirations. Besides that I am also a digital illustrator actively seeking opportunities bridge the gap between academia and artistic exploration.
                </div>
            </div>
          </div>
          <div className=" keen-slider__slide neon-border2 h-screen p-4 bg-black">
            <div className="text-4xl p-4">Education</div>
            <div className="flex p-8 justify-center gap-20 ">
                <div className="p-2 bg-white rounded-xl">
                    <img src="bps2.png" className="h-80 "></img>
                </div>
                <div className="w-96 text-left mt-20">

                <ul>
                    
                <li>Class 10th from Social Baluni Public School, Dehradun with 96.8% <br/></li>
                <li>Class 12th from Social Baluni Public School, Dehradun with 95% <br/></li>
                <li>Currently pursuing Bachelors of Technology from The LNM Institute of Infromation Technology, Jaipur with a CGPA of 7.3</li></ul></div>
                
            </div>
          </div>
          <div className="keen-slider__slide number-slide1 neon-border2 h-screen p-4 bg-black">
            <div className="text-4xl p-4">Extra-Curricular</div>
            <div className="flex p-8 justify-center gap-20 bg-none ">
                <div className="p-2 bg-white rounded-xl">
                    <img src="art.jpg" className="h-80 "></img>
                </div>
                <div className="w-96 mt-20">
                    <ul>
                        <li>Digital artist proficient in using Medibang, Fire Alpaca, Adobe Fresco and Procreate</li>
                        <li>Active member of Eminence the fashion club of LNMIIT</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

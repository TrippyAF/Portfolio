import React from "react";

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-black'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <rect width="2.8" height="12" x="1" y="6" fill="#66c61c">
          <animate
            id="SVGLQdHQe4p"
            attributeName="y"
            begin="0;SVGg3vsIeGm.end-0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="6;1;6"
          />
          <animate
            attributeName="height"
            begin="0;SVGg3vsIeGm.end-0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="12;22;12"
          />
        </rect>

        <rect width="2.8" height="12" x="5.8" y="6" fill="#66c61c">
          <animate
            attributeName="y"
            begin="SVGLQdHQe4p.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="6;1;6"
          />
          <animate
            attributeName="height"
            begin="SVGLQdHQe4p.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="12;22;12"
          />
        </rect>

        <rect width="2.8" height="12" x="10.6" y="6" fill="#66c61c">
          <animate
            attributeName="y"
            begin="SVGLQdHQe4p.begin+0.2s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="6;1;6"
          />
          <animate
            attributeName="height"
            begin="SVGLQdHQe4p.begin+0.2s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="12;22;12"
          />
        </rect>

        <rect width="2.8" height="12" x="15.4" y="6" fill="#66c61c">
          <animate
            attributeName="y"
            begin="SVGLQdHQe4p.begin+0.3s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="6;1;6"
          />
          <animate
            attributeName="height"
            begin="SVGLQdHQe4p.begin+0.3s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="12;22;12"
          />
        </rect>

        <rect width="2.8" height="12" x="20.2" y="6" fill="#66c61c">
          <animate
            id="SVGg3vsIeGm"
            attributeName="y"
            begin="SVGLQdHQe4p.begin+0.4s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="6;1;6"
          />
          <animate
            attributeName="height"
            begin="SVGLQdHQe4p.begin+0.4s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
            values="12;22;12"
          />
        </rect>
      </svg>

    </div>
  )
}
export default LoadingSpinner;
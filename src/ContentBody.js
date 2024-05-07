import { useState } from "react";

let ess = "";
let gr = "";
let cus = "highlight";

function ContentBody() {
  const [slider, setSlider] = useState(200);
  const [mins, setmins] = useState(75);

  const options = [
    { label: "75 mins", value: 75 },
    { label: "100 mins", value: 100 },
    { label: "125 mins", value: 125 },
    { label: "150 mins", value: 150 },
  ];
  function handleChange(event) {
    let sv = event.target.value;
    setSlider(sv);
    if (sv <= 100) {
      ess = "highlight";
      gr = "";
      cus = "";
    } else if (sv <= 150) {
      ess = "";
      gr = "highlight";
      cus = "";
    } else {
      ess = "";
      gr = "";
      cus = "highlight";
    }
  }
  function handlevaluechange(event) {
    setmins(event.target.value);
  }

  return (
    <div className="body-content">
      <div className="body-content-one">
        <div className="body-content-text-one">
          Suggesting an ideal plan for producing around{" "}
          <span className="purple">{slider} clips</span> monthly
        </div>
        <div className="flex-slider">
          <p className="slider-content">50</p>
          <input
            type="range"
            className="slider-content slider-slider"
            min={50}
            max={200}
            step={1}
            value={slider}
            onChange={handleChange}
          />
          <p className="slider-content">200+</p>
        </div>
      </div>
      <div className="pricing-plans">
        <div className={`pricing-plan`}>
          <div className="pp">
            <div className="ppp">
              <div className="ph">
                <h3>Free</h3>
                <h2 className="phh">
                  INR 0 <span className="phs">/month</span>
                </h2>
                <div className="spacer"></div>
                <div className="margint">
                  <a className="pricing-btn">Downgrade to Free</a>
                </div>
              </div>
              <div className="divider"></div>
              <div className="list">
                <div className="list-content">&#x2713; 75 mins per month</div>
                <div className="list-content">&#x2713; 720p render quality</div>
                <div className="list-content">
                  &#x2713; Chapters & short videos
                </div>
                <div className="list-content">&#x2713; Tiktok Publishing</div>
                <div className="list-content">&#x2713; CutMagic</div>
                <div className="list-content">
                  &#x2713; 30 days data retention
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`pricing-plan ${ess}`}>
          <div className="pp">
            <div className="ppp">
              <div className="ph">
                <h3>Essential</h3>
                <h2 className="phh">
                  INR 1762 <span className="phs">/month</span>
                </h2>
                <div className="spacer"></div>
                <div className="margint">
                  <a className="pricing-btn">Upgrade to Essential</a>
                </div>
              </div>
              <div className="divider"></div>
              <div className="list">
                <div className="list-content">&#x2713; 75 mins per month</div>
                <div className="list-content">&#x2713; 720p render quality</div>
                <div className="list-content">
                  &#x2713; Everything in Free plan
                </div>
                <div className="list-content">&#x2713; 300 mins per month</div>
                <div className="list-content">
                  &#x2713; 1080p render quality
                </div>
                <div className="list-content">
                  &#x2713; Import with integrations
                </div>
                <div className="list-content">
                  &#x2713; Import with Inteliclips
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`pricing-plan ${gr}`}>
          <div className="pp">
            <div className="ppp">
              <div className="ph">
                <h3>Growth</h3>
                <h2 className="phh">
                  INR 2065 <span className="phs">/month</span>
                </h2>
                <div className="spacer"></div>
                <div className="margint">
                  <a className="pricing-btn">Upgrade to Growth</a>
                </div>
              </div>
              <div className="divider"></div>
              <div className="list">
                <div className="list-content">
                  &#x2713; Everything in Essential plan
                </div>
                <div className="list-content">&#x2713; 600 mins per month</div>
                <div className="list-content">
                  &#x2713; Custom Brand Kit & Templates
                </div>
                <div className="list-content">
                  &#x2713; Viddy AI Content Assistant
                </div>
                <div className="list-content">&#x2713; CutMagic</div>
                <div className="list-content">
                  &#x2713; Metadata for all social platforms
                </div>
                <div className="list-content">
                  &#x2713; Social Media Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`pricing-plan ${cus}`}>
          <div className="pp">
            <div className="ppp">
              <div className="ph">
                <h3>Custom</h3>
                <h2 className="phh">
                  INR {mins * 50} <span className="phs">/month</span>
                </h2>
                <div className="spacer"></div>
                <div className="margint">
                  <a className="pricing-btn">Upgrade to Custom</a>
                </div>
              </div>
              <div className="divider"></div>
              <div>
                <div>Select Minutes</div>
                <select className="dropdown" onChange={handlevaluechange}>
                  {options.map((option) => {
                    return <option value={option.value}>{option.label}</option>;
                  })}
                </select>
              </div>
              <div className="list">
                <div className="list-content">
                  &#x2713; Everything in Growth plan
                </div>
                <div className="list-content">
                  &#x2713; 400-1000 mins per month
                </div>
                <div className="list-content">&#x2713; 4K render quality</div>
                <div className="list-content">&#x2713; Bulk export</div>
                <div className="list-content">&#x2713; Multiple brand kits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBody;

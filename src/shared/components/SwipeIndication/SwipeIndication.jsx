import "./SwipeIndication.css";
0
const SwipeIndication = ({description}) => {
    return (
        <>
          <div className="flex w-full justify-center items-center p-4">
            <div className="swipe-element pr-2">
                <p className="swipe-description">{description}</p>
            </div>
              <div className="chevron swipe-element"></div>
              <div className="chevron swipe-element"></div>
              <div className="chevron swipe-element"></div>
              <div className="chevron swipe-element"></div>
              <div className="chevron swipe-element"></div>
            </div>
        </>
    )
}

export default SwipeIndication;
const Notification = (props) => {
  const { imgUrl, imgCls, msgCard, msgContent } = props.source;
  return (
    <div className={msgCard}>
      <img src={imgUrl} className={imgCls} />
      <p>{msgContent}</p>
    </div>
  );
};

const sourcePrimary = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
  imgCls: "images",
  msgCard: "cards primary",
  msgContent: "Information Message",
};

const sourceSuccess = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
  imgCls: "images",
  msgCard: "cards success",
  msgContent: "Success Message",
};

const sourceWarning = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
  imgCls: "images",
  msgCard: "cards warning",
  msgContent: "Warning Message",
};

const sourceError = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
  imgCls: "images",
  msgCard: "cards error",
  msgContent: "Error Message",
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification source={sourcePrimary} />
    <Notification source={sourceSuccess} />
    <Notification source={sourceWarning} />
    <Notification source={sourceError} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
